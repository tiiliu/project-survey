import React from "react"

const Overview = (props) => {
    const { 
        nameInput, 
        emojiMood, 
        messageInput, 
        pineappleInput, 
        superpowerInput,
        handleRestart 
    } = props
    
    return (
        <section className="overview-wrapper">
            <ul>
            <li className="overview-title">Hey {nameInput},</li>
            <li className="overview-text">{pineappleInput === "Yes" 
            ? "Correctamundo! Pineapple indeed belongs to pizza! 😋" 
            : "Unfortunately, your answer on pineapple-gate was not correct, pineapple and pizza are meant to be 💛 😉 "}
            </li>
            <li className="overview-text">Your superpower of choice was {superpowerInput}! 🦸 🦹🏽 </li>
            <li className="overview-text">You're feeling {emojiMood} at the moment</li>
            <li className="overview-text">Lastly, here's a message from yourself: {messageInput}</li>
            </ul>

            <button onClick={handleRestart}>Restart</button>
        </section>

    )
}

export default Overview
