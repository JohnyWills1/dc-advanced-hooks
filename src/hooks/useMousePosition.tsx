import React, { useState, useMemo } from "react"

function useMousePosition(
  ref
): [
  number,
  number,
  { onMouseMove: (event: React.MouseEvent) => void },
  { onMouseLeave: (event: React.MouseEvent) => void }
] {
  const [centerX, setCenterX] = useState(0)
  const [centerY, setCenterY] = useState(0)

  const bind = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent) => {
        setCenterX(
          event.nativeEvent.offsetX -
            ref.current?.getBoundingClientRect().width / 2
        )
        setCenterY(
          event.nativeEvent.offsetY -
            ref.current?.getBoundingClientRect().height / 2
        )
      },
      onMouseLeave: () => {
        setCenterX(0)
        setCenterY(0)
      },
    }),
    []
  )

  return [centerX, centerY, bind]
}

export default useMousePosition
