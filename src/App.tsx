import React from "react"
import "./App.css"

function App(): React.ReactElement {
    const message = "Hello! React!"
    return (
        <div className="App">
            <p>{message}</p>
        </div>
    )
}

export default App

