import { cn } from "@/lib/utils"

interface VerticalProgressProps {
  value: number 
  maxvalue: number
  className?: string
  indicatorColor?: string
}

const VerticalProgress = ({ maxvalue,value, className, indicatorColor }: VerticalProgressProps) => {
  return (
    <div 
    className={cn("relative h-full  w-full bg-secondary rounded-full overflow-hidden", className)}
    style={{height: `${maxvalue}px`}}
    >
      <div
        className={cn("absolute bottom-0 w-full transition-all duration-500 ease-in-out", indicatorColor)}
        style={{ height: `${value}px` }}
      />
    </div>
  )
}

export { VerticalProgress }