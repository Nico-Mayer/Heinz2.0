import React from 'react'
import router from 'next/router'

class Tile extends React.Component {

    container = "";

    title = "";
    text="";
    imgSrc="";
    url="";

    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.text = this.props.text;
        this.imgSrc = this.props.imgSrc;
        this.url = this.props.url;

        this.container = <img className={"max-h-96 justify-self-center p-8 max-h-72"} src={this.imgSrc}/>;

        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.state = {setIsHovering: false};
    }

    handleMouseOver = () => {
        this.setState({setIsHovering: true});
        this.container = <p className={"text-xl align-self-center justify-center"}>{this.text}</p>;
    };

    handleMouseOut = () => {
        this.setState({setIsHovering: false});
        this.container = <img className={"max-h-96 justify-self-center p-8 max-h-72"} src={this.imgSrc}/>;
    };

    render() {

        return (
            <>
                <div className={"flex transition duration-400 hover:opacity-100 hover:opacity-100 hover:bg-heinzBlau w-1/2 justify-center pt-4"}
                onClick={()=>{ router.push(this.url);}}>
                    <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={"flex-column h-96"}>
                        <h1 className={"justify-self-center text-3xl"}>{this.title}</h1>
                        {this.container}
                    </div>
                </div>
            </>
        );
    }
}

export default Tile