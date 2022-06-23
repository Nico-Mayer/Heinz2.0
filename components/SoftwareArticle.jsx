import React from "react";
import SubHeader from "./SubHeader";
import StyledText from "./StyledText";

function SoftwareArticle(articleInfo) {
    return (<>
            <SubHeader title={articleInfo.title}/>
            <StyledText text={articleInfo.text}/>
            <StyledText text={articleInfo.linkDescription}/>
            <a href={articleInfo.link}><p
                className={"border-solid border-2 border-white p-3 bg-heinzOrange text-heinzGrau hover:bg-white"}>{articleInfo.title}</p>
            </a>
        </>
    )
}

export default SoftwareArticle