"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/button"
import CodeDialog from "@/components/code-dialog"

import { EXAMPLES } from "@/constants/examples"

export default function Examples() {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <header className="py-6">
          <div className="container mx-auto">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="size-4" />
                Back
              </Button>
            </Link>
          </div>
        </header>

        <main className="flex-1">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">Examples</h1>
            <p className="text-muted-fg mt-4 max-w-2xl">
              Explore different implementations and use cases of the Vaul Base
              drawer component.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(EXAMPLES).map(([key, example]) => (
                <div
                  key={key}
                  className="border-muted bg-subtle/50 flex flex-col rounded-lg border p-6"
                >
                  <h2 className="font-semibold">{example.name}</h2>
                  <p className="text-muted-fg mb-6 mt-2">
                    {example.description}
                  </p>
                  <div className="mt-auto flex gap-4">
                    {example.render()}
                    <CodeDialog name={key as keyof typeof EXAMPLES} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
