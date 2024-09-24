import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import 'antd/dist/reset.css'; 
import { BrowserRouter as Router } from "react-router-dom"
import AppContextProvider from "./context/AppContextProvider"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Router>
  <AppContextProvider>
    <App />
  </AppContextProvider>
</Router>
)

