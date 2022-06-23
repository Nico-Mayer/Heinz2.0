import React from 'react'
import StyledText from "./StyledText";
import {motion} from 'framer-motion'

class Question extends React.Component {
    text = "";
    faq = "";
    src = "/pfeilU.png";

    constructor(props) {
        super(props);
        this.text = this.props.text;
        this.faq = this.props.faq;
        this.state = {showQuestion: false};
        this.toggleQuestion = this.toggleQuestion.bind(this);
    }

    toggleQuestion() {
        if (this.state.showQuestion) {
            this.setState({showQuestion: false})
            this.src = "/pfeilU.png";
        } else {
            this.setState({showQuestion: true})
            this.src = "/pfeilO.png";
        }
    }

    render() {
        let showQuestion = this.state.showQuestion;
        let container;
        if (showQuestion) {
            container = <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0,
                        height: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        height: "auto",
                        transition: {
                            delay: 0.05,
                        },
                    },
                }} className={"bg-heinzBlau max-w-3xl mt-0s"}><StyledText
                text={<p className={'whitespace-pre-wrap text-left text-white'}>
                    {this.text}
                </p>}/></motion.div>
        } else {
            container = <></>;
        }

        return (
            <>
                <div
                    className={
                        'flex flex-row flex-nowrap content-evenly justify-center '
                    }
                >
                    <h1 onClick={this.toggleQuestion}
                        className={"text-heinzBlau text-3xl w-full max-w-3xl mb-0 border-solid border-b-2 border-heinzBlau"}>{this.faq}</h1>
                    <img onClick={this.toggleQuestion} className={'max-h-10'} src={this.src}/>
                </div>
                {container}
            </>
        );
    }
}

export default Question