import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const NestedDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background text-foreground fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
          <Drawer.Handle className="top-4" />
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
            <h4 className="font-semibold">Nested Drawers</h4>
            <p>
              Nested drawers are perfect for creating hierarchical navigation or
              displaying related content in a layered interface.
            </p>
            <Drawer.NestedRoot>
              <Drawer.Trigger
                render={(props) => (
                  <Button {...props}>Open Nested Drawer</Button>
                )}
              />
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/80" />
                <Drawer.Content className="bg-background text-foreground fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
                  <Drawer.Handle className="top-4" />
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
  )
}

export default NestedDrawer
