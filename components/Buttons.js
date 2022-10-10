import React from "react"

export default function Buttons() {
    return (
        <div className="buttons">
            <a href="mailto:mrkbooms@gmail.com">
                <button className="email">
                    <i className="fa-solid fa-envelope"></i> E-mail</button></a>
            <a href="https://www.linkedin.com/in/kevin-booms/"> 
                <button className="linked-in">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn</button></a>        
        </div>
    )
}