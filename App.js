import React from "react"
import Picture from "./components/Picture"
import Name from "./components/Name"
import Buttons from "./components/Buttons"
import Profile from "./components/Profile"
import Media from "./components/Media"


export default function App() {
    return (
        <div className="card">
        <Picture />
        <Name />
        <Buttons />
        <Profile />
        <Media />
        </div>
    )
}