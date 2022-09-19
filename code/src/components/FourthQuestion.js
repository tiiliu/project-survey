import React from "react"

const FourthQuestion = (props) => {
    const {
        superpowerInput,
        onSuperpowerInputChange,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props

    return (
        <div className="question-wrapper">
            <label className="page-title" htmlFor="stressInput">
                Let's talk about superpowers, which kind would you choose to have?
            </label>
           
            <div className="select-container">
                <select value={superpowerInput} onChange={onSuperpowerInputChange}> 
                    <option className="select-main" value="" disabled selected>Select option:</option>
                    <option value="the power to always plug the USB in correctly the first time">
                    The power to always plug the USB in correctly the first time
                    </option>
                    <option value="the power to write flawless code">
                    The power to write flawless code
                    </option>
                    <option value="the power to speak any language">
                    The power to speak any language
                    </option>
                    <option value="the ability to always win at rock paper scissors">
                    The ability to always win at rock paper scissors
                    </option>
                </select>
            </div>

            <div className="button-wrapper">
                <button onClick={onSectionChangeBackward}>Back</button>
                <button onClick={onSectionChangeForward}>Next</button>
            </div>
        </div>
    )
}

export default FourthQuestion
