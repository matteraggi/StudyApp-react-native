import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowUp = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <Path
      fill="#fff"
      d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"
    />
    <Path
      fill="#fff"
      d="m7.293 11.293 1.414 1.414L11 10.414V16h2v-5.586l2.293 2.293 1.414-1.414L12 6.586l-4.707 4.707z"
    />
  </Svg>
)
export default ArrowUp
