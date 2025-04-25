import { FC } from "react"
import clsx from "clsx"

interface BackgroundProps {
  className?: string
}

export const Background: FC<BackgroundProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 -z-10 h-full w-full bg-background",
        className
      )}
    >
      <div className="absolute inset-0 opacity-5 [background-image:linear-gradient(to_right,rgb(255,255,255)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255,255,255)_1px,transparent_1px)] [background-size:6rem_6rem] [mask-image:linear-gradient(to_bottom,black_25%,transparent_50%)]" />
    </div>
  )
}
