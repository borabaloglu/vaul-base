"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Drawer } from "vaul-base"

import { Background } from "@/components/background"
import { Button } from "@/components/button"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div>
      <Background />
      <div className="flex h-screen flex-col">
        <div className="mt-20 flex flex-col items-center justify-center">
          <Logo className="size-24" />
          <h1 className="mt-8 text-4xl font-bold">Vaul Base</h1>
          <p className="text-muted-fg mt-4 w-2/3 text-center sm:w-full">
            An unstyled drawer component for React, built with Base UI.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Drawer.Root shouldScaleBackground>
            <Drawer.Trigger
              render={(props) => <Button {...props}>Open Drawer</Button>}
            />
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
                <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
                <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
                  <h4 className="font-semibold">Drawer component for React</h4>
                  <p>
                    It serves as a replacement for Dialog on mobile and tablet
                    devices.
                  </p>
                  <p>
                    It is unstyled and features gesture-driven animations.
                    Originally created by{" "}
                    <a
                      href="https://emilkowal.ski/"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Emil Kowalski
                    </a>
                    , it was adapted for Base UI by{" "}
                    <a
                      href="https://x.com/borabalogluu"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bora Baloglu
                    </a>
                    .
                  </p>
                  <p>
                    The component utilizes{" "}
                    <a
                      href="https://base-ui.com/react/components/dialog"
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Base UI&apos;s Dialog
                    </a>{" "}
                    internally.
                  </p>
                  <p>
                    <Link
                      href="/examples"
                      className="underline underline-offset-4"
                    >
                      Here are additional examples
                    </Link>{" "}
                    demonstrating the component in use.
                  </p>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
        <nav className="mt-8 flex items-center justify-center gap-4">
          <Link href="/examples">
            <Button variant="link">Examples</Button>
          </Link>
          <div className="bg-muted h-full w-px" />
          <a
            href="https://github.com/borabaloglu/vaul-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2" variant="link">
              Github
              <ExternalLink className="size-3.5" />
            </Button>
          </a>
        </nav>
      </div>
    </div>
  )
}
