import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const DirectionsDrawer = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open From Right</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background text-foreground fixed right-0 top-0 flex h-full w-[90vw] flex-row rounded-l-lg border p-6 sm:w-[70vw] lg:w-[50vw]">
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
  )
}

export default DirectionsDrawer
