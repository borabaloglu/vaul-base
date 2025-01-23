import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

export const EXAMPLES = {
  basic: {
    name: "Basic",
    description: "A simple demonstration of the core drawer functionality.",
    render: () => (
      <Drawer.Root>
        <Drawer.Trigger
          render={(props) => <Button {...props}>Open Drawer</Button>}
        />
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/70" />
          <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
            <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
            <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
              <h4 className="font-semibold">Welcome to the Drawer</h4>
              <p>
                This drawer slides up smoothly from the bottom of your screen.
              </p>
              <p>
                Try interacting with it - you can drag it up and down with your
                finger or mouse. The natural gestures make it feel right at home
                on mobile devices.
              </p>
              <p>
                When you&apos;re done, just swipe down or click outside to
                dismiss it. Simple and intuitive!
              </p>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    ),
    content: `<Drawer.Root>\n\t<Drawer.Trigger render={(props) => <Button {...props}>Open Drawer</Button>} />\n\t<Drawer.Portal>\n\t\t<Drawer.Overlay className="fixed inset-0 bg-black/70" />\n\t\t<Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">\n\t\t\t<Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />\n\t\t\t<div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">\n\t\t\t\t<h4 className="font-semibold">Welcome to the Drawer</h4>\n\t\t\t\t<p>This drawer slides up smoothly from the bottom of your screen.</p>\n\t\t\t\t<p>Try interacting with it - you can drag it up and down with your finger or mouse. The natural gestures make it feel right at home on mobile devices.</p>\n\t\t\t\t<p>When you're done, just swipe down or click outside to dismiss it. Simple and intuitive!</p>\n\t\t\t</div>\n\t\t</Drawer.Content>\n\t</Drawer.Portal>\n</Drawer.Root>`,
  },
  nested: {
    name: "Nested",
    description:
      "An example showing layered, hierarchical drawers that can be opened within each other.",
    render: () => (
      <Drawer.Root>
        <Drawer.Trigger
          render={(props) => <Button {...props}>Open Drawer</Button>}
        />
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/70" />
          <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
            <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
            <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
              <h4 className="font-semibold">Nested Drawers</h4>
              <p>
                Nested drawers are perfect for creating hierarchical navigation
                or displaying related content in a layered interface.
              </p>
              <Drawer.NestedRoot>
                <Drawer.Trigger
                  render={(props) => (
                    <Button variant="ghost" {...props}>
                      Open Nested Drawer
                    </Button>
                  )}
                />
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/70" />
                  <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
                    <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
                    <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
                      <p>
                        To create a nested drawer, simply place a{" "}
                        <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                          Drawer.NestedRoot
                        </code>{" "}
                        component inside another drawer&apos;s content area.
                      </p>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.NestedRoot>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    ),
    content: `<Drawer.Root>\n\t<Drawer.Trigger render={(props) => <Button {...props}>Open Drawer</Button>} />\n\t<Drawer.Portal>\n\t\t<Drawer.Overlay className="fixed inset-0 bg-black/70" />\n\t\t<Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">\n\t\t\t<Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />\n\t\t\t<div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">\n\t\t\t\t<h4 className="font-semibold">Nested Drawers</h4>\n\t\t\t\t<p>Nested drawers are perfect for creating hierarchical navigation or displaying related content in a layered interface.</p>\n\t\t\t\t<Drawer.NestedRoot>\n\t\t\t\t\t<Drawer.Trigger render={(props) => <Button variant="ghost" {...props}>Open Nested Drawer</Button>} />\n\t\t\t\t\t<Drawer.Portal>\n\t\t\t\t\t\t<Drawer.Overlay className="fixed inset-0 bg-black/70" />\n\t\t\t\t\t\t<Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">\n\t\t\t\t\t\t\t<Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />\n\t\t\t\t\t\t\t<div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">\n\t\t\t\t\t\t\t\t<p>To create a nested drawer, simply place a{" "}<code className="bg-muted rounded px-1.5 py-0.5 text-sm">Drawer.NestedRoot</code>{" "}component inside another drawer's content area.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</Drawer.Content>\n\t\t\t\t\t</Drawer.Portal>\n\t\t\t\t</Drawer.NestedRoot>\n\t\t\t</div>\n\t\t</Drawer.Content>\n\t</Drawer.Portal>\n</Drawer.Root>`,
  },
  directions: {
    name: "Directions",
    description: "Drawers can be opened from different sides of the screen.",
    render: () => (
      <Drawer.Root direction="right">
        <Drawer.Trigger
          render={(props) => <Button {...props}>Open From Right</Button>}
        />
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/70" />
          <Drawer.Content className="bg-bg text-fg border-muted fixed right-0 top-0 flex h-full w-[90vw] flex-row rounded-l-lg border p-6 sm:w-[70vw] lg:w-[50vw]">
            <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
              <p>
                You are not limited to open the drawer from bottom, you can use{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  top
                </code>
                ,{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  bottom
                </code>
                ,{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  left
                </code>
                , or{" "}
                <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                  right
                </code>{" "}
                directions.
              </p>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    ),
    content: `<Drawer.Root direction="right">\n\t<Drawer.Trigger render={(props) => <Button {...props}>Open From Right</Button>} />\n\t<Drawer.Portal>\n\t\t<Drawer.Overlay className="fixed inset-0 bg-black/70" />\n\t\t<Drawer.Content className="bg-bg text-fg border-muted fixed right-0 top-0 flex h-full w-[90vw] flex-row rounded-l-lg border p-6 sm:w-[70vw] lg:w-[50vw]">\n\t\t\t<div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">\n\t\t\t\t<p>You are not limited to open the drawer from bottom, you can use{" "}<code className="bg-muted rounded px-1.5 py-0.5 text-sm">top</code>, {" "}<code className="bg-muted rounded px-1.5 py-0.5 text-sm">bottom</code>, {" "}<code className="bg-muted rounded px-1.5 py-0.5 text-sm">left</code>, or{" "}<code className="bg-muted rounded px-1.5 py-0.5 text-sm">right</code>{" "}directions.</p>\n\t\t\t</div>\n\t\t</Drawer.Content>\n\t</Drawer.Portal>\n</Drawer.Root>`,
  },
}
