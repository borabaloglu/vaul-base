import * as React from "react"
import { Dialog } from "@base-ui-components/react/dialog"
import { CheckIcon, CopyIcon, Loader2Icon, XIcon } from "lucide-react"
import { createHighlighter } from "shiki"

import { Button } from "@/components/button"

import { EXAMPLES } from "@/constants/examples"

import { getExampleContent } from "@/lib/get-example-content"
import { cn } from "@/lib/utils"

interface CodeDialogProps {
  name: keyof typeof EXAMPLES
}

const CodeDialog = ({ name }: CodeDialogProps) => {
  const [content, setContent] = React.useState<string>("")
  const [code, setCode] = React.useState<string | null>(null)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    getExampleContent(name).then((fileContent) => {
      if (fileContent) {
        setContent(fileContent)
      }
    })
  }, [name])

  React.useEffect(() => {
    if (!content) return

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
        <Dialog.Backdrop className="fixed inset-0 bg-black/80 transition-all duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="bg-background text-foreground fixed left-1/2 top-1/2 -mt-8 w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 md:w-[50vw]">
          <div className="space-y-4">
            <div className={cn("overflow-hidden rounded-lg border shadow-sm")}>
              <div className="bg-secondary/50 flex items-center justify-between border-b px-4 py-2">
                <div className="flex h-8 items-center overflow-x-auto">
                  <span className="bg-muted rounded px-2 py-0.5 text-xs font-medium">
                    {name}.tsx
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button onClick={onCopy} variant="ghost" size="icon">
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </Button>
                  <Dialog.Close
                    render={(props) => (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="[&>svg]:size-5"
                        {...props}
                      >
                        <XIcon />
                      </Button>
                    )}
                  />
                </div>
              </div>
              {!code && (
                <div className="flex h-[300px] items-center justify-center">
                  <Loader2Icon className="size-6 animate-spin" />
                </div>
              )}
              <div
                className="scrollbar-custom [&>pre]:!bg-background text-xs [&>pre>code]:!bg-transparent [&>pre]:!m-0 [&>pre]:max-h-[300px] [&>pre]:overflow-auto [&>pre]:p-4"
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
