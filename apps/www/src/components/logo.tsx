import { SVGProps } from "react"

const Logo = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      width="256"
      height="256"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="8.5"
        y="0.5"
        width="239"
        height="239"
        rx="15.5"
        fill="#18181B"
        stroke="#F4F4F5"
      />
      <rect
        x="8"
        width="240"
        height="240"
        rx="16"
        fill="black"
        fillOpacity="0.5"
      />
      <rect y="56" width="256" height="200" rx="16" fill="#F4F4F5" />
      <rect x="106" y="72" width="44" height="6" rx="3" fill="#18181B" />
    </svg>
  )
}

export default Logo
