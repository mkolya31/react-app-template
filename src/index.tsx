import { createRoot } from "react-dom/client"
import React from "react"
import { App } from './pages'

document.body.innerHTML = '<div id="root"></div>'
const rootElement = document.querySelector("#root") as Element
const root = createRoot(rootElement);

root.render(<App />);