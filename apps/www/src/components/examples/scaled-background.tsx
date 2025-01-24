import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const ScaledBackgroundDrawer = () => {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70" />
        <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
          <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
          <div className="mx-auto flex h-full max-w-sm flex-col justify-center space-y-4 px-4">
            <h4 className="font-semibold">Scaled Background</h4>
            <p>
              Notice how the background content scales and transforms as you
              drag this drawer.
            </p>
            <p>
              This effect creates a sense of depth and dimension, making the
              drawer feel more integrated with your application&apos;s
              interface.
            </p>
            <p>
              The scaling is achieved by simply adding the{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                shouldScaleBackground
              </code>{" "}
              prop to the{" "}
              <code className="bg-muted rounded px-1.5 py-0.5 text-sm">
                Drawer.Root
              </code>{" "}
              component.
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default ScaledBackgroundDrawer
