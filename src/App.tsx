import { useState } from "react"
import { motion } from "framer-motion"

export default function App() {
  const [angle, setAngle] = useState(0)
  const changeAngle = (angle: number) => () => setAngle(angle)
  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div
        className="rounded-lg w-20 h-20 bg-indigo-500"
        animate={{ rotate: angle }}
        onHoverStart={changeAngle(90)}
        onHoverEnd={changeAngle(0)}
      >
        Hello world!
      </motion.div>
      <ul>
        <li id="node-version">node: {`${window.versions.node}`}</li>
        <li id="chrome-version">chromium: {`${window.versions.chrome}`}</li>
        <li id="electron-version">electron: {`${window.versions.electron}`}</li>
      </ul>
    </div>
  )
}
