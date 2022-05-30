import React from "react";

function StyledText(text){
    return(
        <p className={"text-left text-white m-5 whitespace-pre-wrap"}>{text.text}</p>
    )
}

export default StyledText