import { useState } from "react"
import clsx from "clsx"
import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

const snapPoints = ["240px", "400px", 1]

const SnapPointsDrawer = () => {
  const [snapPoint, setSnapPoint] = useState<string | number | null>(
    snapPoints[0]
  )

  return (
    <Drawer.Root
      snapPoints={snapPoints}
      activeSnapPoint={snapPoint}
      setActiveSnapPoint={setSnapPoint}
    >
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70" />
        <Drawer.Content className="border-muted bg-bg text-fg fixed inset-x-0 bottom-0 flex h-full max-h-[90%] flex-col rounded-t-lg border">
          <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
          <div
            className={clsx(
              "mx-auto mt-10 flex h-full max-w-sm flex-col space-y-8 px-4",
              snapPoint === 1 ? "overflow-y-auto" : "overflow-y-hidden"
            )}
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Snap Points</h4>
                <div className="text-muted-fg text-sm">
                  {typeof snapPoint === "number" ? "100%" : snapPoint}
                </div>
              </div>
              <p className="text-muted-fg">
                This drawer has three snap points: 240px, 400px, and full
                height. Drag the drawer to see it snap to these positions.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="font-medium">What are Snap Points?</h2>
              <p className="text-muted-fg">
                Snap points let users drag a drawer to set positions, enhancing
                the user experience with consistent drawer heights. This drawer
                can snap to 240px, 400px, and full height.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="font-medium">
                Achievement Unlocked: Full Height!
              </h2>
              <p className="text-muted-fg">
                You&apos;ve discovered all three levels! From the subtle peek at
                240px, through the comfortable view at 400px, all the way to
                this majestic full-height mode.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default SnapPointsDrawer
