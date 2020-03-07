import React from "react"
import ReactDOM from "react-dom"
import App from "../App"
import CommentBox from "../CommentBox"


// comments 

it("shows a comment box", () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)

    // here we need to look inside the div and ensure that 
    // the comment box is there.
    const commentBox = "Comment Box"
    expect(div.innerHTML).toContain(commentBox)
    // this line is cleanup; we need to do this 
    // to make sure the rest of our tests run quickly
    ReactDOM.unmountComponentAtNode(div);
})