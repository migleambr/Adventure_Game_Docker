const Instructions = () => {

    return (
        <div className="instructionContainer">
            <hr />
            <h3>Instructions: </h3>
            <ol className="OL">
                <li>Enter your name in the text box provided</li>
                <li>Click "Play" button</li>
                <li>Once you are redirected to the next page, click the "Play" button again</li>
                <li>Use the "Attack" button to defeat the monster (Battle log will show points earned)</li>
                <li>If level 1 is won, either continue to play the last two battles or use the "Leave" button</li>
                <li>If the "Leave" button is pressed, use the "Shop" button to buy other weapons with the earned gold</li>
                <li>Reach level 3 and win!</li>
            </ol>
        </div>
    )

}

export default Instructions;