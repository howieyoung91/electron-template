import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { NextUIProvider } from "@nextui-org/react"
import "./assets/styles/index.scss"
import "tailwindcss/tailwind.css"

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(
  <NextUIProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NextUIProvider>
)
