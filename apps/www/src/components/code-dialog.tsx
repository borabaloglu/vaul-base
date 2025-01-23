"use client"

import * as React from "react"
import { Dialog } from "@base-ui-components/react/dialog"
import { CheckIcon, CopyIcon, XIcon } from "lucide-react"
import { createHighlighter } from "shiki"

import { Button } from "@/components/button"

import { EXAMPLES } from "@/constants/examples"

import { merge } from "@/libs/utils"

interface CodeDialogProps {
  name: keyof typeof EXAMPLES
}

const CodeDialog = ({ name }: CodeDialogProps) => {
  const { content } = EXAMPLES[name]

  const [code, setCode] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    async function highlight() {
      const highlighter = await createHighlighter({
        themes: ["github-dark-default"],
        langs: ["tsx"],
      })

      const highlighted = highlighter.codeToHtml(content, {
        lang: "tsx",
        theme: "github-dark-default",
        transformers: [
          {
            pre(node) {
              node.properties.style = "tab-size: 2"
            },
            code(node) {
              node.properties.style = "tab-size: 2"
            },
          },
        ],
      })

      setCode(highlighted)
    }

    highlight()
  }, [content])

  const onCopy = async () => {
    await navigator.clipboard.writeText(content!)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        render={(props) => (
          <Button variant="ghost" {...props}>
            Code
          </Button>
        )}
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black opacity-70 transition-all duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="bg-bg text-fg fixed left-1/2 top-1/2 -mt-8 w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:w-[50vw]">
          <div className="space-y-4">
            <div
              className={merge(
                "border-muted overflow-hidden rounded-lg border shadow-sm"
              )}
            >
              <div className="border-muted bg-subtle/50 flex items-center justify-between border-b px-4 py-2">
                <div className="flex h-8 items-center overflow-x-auto">
                  <span className="bg-muted/30 rounded px-2 py-0.5 text-xs font-medium">
                    {name}.tsx
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onCopy}
                    className="text-muted-fg hover:bg-muted hover:text-fg focus-visible:outline-accent flex size-8 items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1"
                  >
                    {copied ? (
                      <CheckIcon className="size-4" />
                    ) : (
                      <CopyIcon className="size-4" />
                    )}
                  </button>
                  <Dialog.Close className="text-muted-fg hover:bg-muted hover:text-fg focus-visible:outline-accent flex size-8 items-center justify-center rounded-md transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1">
                    <XIcon className="size-4" />
                  </Dialog.Close>
                </div>
              </div>
              <div
                className="scrollbar-custom [&>pre]:!bg-bg text-xs [&>pre>code]:!bg-transparent [&>pre]:!m-0 [&>pre]:max-h-[300px] [&>pre]:overflow-auto [&>pre]:p-4"
                dangerouslySetInnerHTML={{ __html: code! }}
              />
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CodeDialog
