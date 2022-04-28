import {Component} from "react";

class NavigationBar extends Component {
    render() {
        return <div className="h-min w-full inline-grid grid-cols-7 justify-center">

            <img className={"w-16 h-16"} src={"/heinz_logo_blau.png"}/>
            <div></div>
            <div></div>
            <div className={"w-20 h-16 items-center justify-center"}>
                <div className={"border-l-2 pl-1"}>Allgemein</div>
            </div>
            <div className={"w-20 h-16 items-center justify-center"}>
                <div className={"border-l-2 pl-1"}>Projekt</div>
            </div>
            <div className={"w-20 h-16 items-center justify-center"}>
                <div className={"border-l-2 pl-1"}>How To</div>
            </div>
            <div className={"w-20 h-16 items-center justify-center"}>
                <div className={"border-l-2 pl-1"}>FAQ</div>
            </div>
        </div>
    };
}

export default NavigationBar