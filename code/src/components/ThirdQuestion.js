import React from "react"


const ThirdQuestion = (props) => {
    const {
        pineappleInput,
        onPineappleInputChange,
        onSectionChangeBackward,
        onSectionChangeForward
    } = props
  
    return (
        <div className="question-wrapper">
            <label className="page-title" htmlFor="moodInput">
                Alright, now let's get serious. Pineapple in a pizza, yes or no?
            </label>

            <div className="radio-input-wrapper">
                <div className="radio-button-container">
                    <label htmlFor="Yes">
                        <span role="img"
                        aria-label="emojis displaying a positive opinion about pineapple in a pizza">
                        🍍+🍕 = 😍
                        </span>
                    </label>

                    <input
                    id="Yes"
                    type="radio"
                    value="Yes"
                    checked={pineappleInput=== "Yes"}
                    onChange={onPineappleInputChange}
                    />
                </div>

                <div className="radio-button-container">
                    <label htmlFor="No">
                        <span role="img"
                        aria-label="emojis displaying a negative opinion about pineapple in a pizza">
                        🍍+🍕 = 🤮
                        </span>
                        
                    </label>
                    <input
                    id="No"
                    type="radio"
                    value="No"
                    checked={pineappleInput === "No"}
                    onChange={onPineappleInputChange}
                    />
                </div>

            </div>
          
            <div className="button-wrapper">
                <button onClick={onSectionChangeBackward}>Back</button>
                <button onClick={onSectionChangeForward}>Next</button>
            </div>
        </div>
    )
}

export default ThirdQuestion
