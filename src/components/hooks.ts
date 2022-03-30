import React, {
  useContext,
  useEffect,
  useState,
  useImperativeHandle,
} from "react"
import type { MathboxSelection, NodeType, Props } from "mathbox"
import MathboxAPIContext from "./MathboxNodeContext"
import type { WithChildren } from "./types"

export const useMathboxAPI = <T extends NodeType>(
  name: T,
  props: WithChildren<Props[T]>,
  ref: React.Ref<MathboxSelection<T> | null>
) => {
  const parent = useContext(MathboxAPIContext)
  const [selection, setSelection] = useState<MathboxSelection<T> | null>(null)

  useEffect(
    () => () => {
      if (selection) {
        selection.remove()
      }
    },
    [selection]
  )

  useEffect(() => {
    const { children, ...mbProps } = props
    if (!parent) return
    if (!selection) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const thisNode: MathboxSelection<T> = parent[name](mbProps)
      setSelection(thisNode)
    } else {
      /**
       * Set all the props anew. It's MathBox's responsibility to diff out the
       * unchanged props if it wants to do that optimization.
       *
       * (In fact, Mathbox delegates that optimization to Threestrap through
       * some rather byzantine inheritance.)
       */
      selection.set(mbProps)
    }
  }, [parent, selection, setSelection, props, name])

  useImperativeHandle(ref, () => selection, [selection])

  return selection
}
