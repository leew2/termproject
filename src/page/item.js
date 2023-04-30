/**
 *  Wang Lee
 *  Created 4/08/2023
 *  Altered 4/30/2023
 */
import {Component} from "react";
import './cssLib/index.css';
import logo from "./img/cspbook.png"
import logored from "./img/cspbookred.png";
import logogreen from "./img/cspbookgreen.png";

function ItemPage () {
    return (
        <>
            <div className={'body'}>
                <ItemImage />

            </div>
            {/** Image */}


            {/** Other Version */}

        </>
    )
}
export default ItemPage;

/**  Image  */
class ItemImage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: "This Item",
            image: logo
        }
    }
    changeImageBase = () =>{
        this.setState({image:logo})
    }
    changeImageRed = () =>{
        this.setState({image:logored})
    }
    changeImageGreen = () =>{
        this.setState({image:logogreen})
    }

    componentWillMount() {
        this.setState({item: "CSP Books"})
    }

    render(){
        return <>
            <div>
                <h2>{this.state.item} are Listed Below</h2>
                <img src={this.state.image} alt={"Image of The Item"}/>
            </div>
            <div>
                <ItemAlt altName={logo} /> <button onClick={this.changeImageBase} >Preview</button>
                <ItemAlt altName={logored}/> <button onClick={this.changeImageRed} >Preview</button>
                <ItemAlt altName={logogreen}/> <button onClick={this.changeImageGreen} >Preview</button>
            </div>

        </>
    }
}
module.exports = ItemImage;

/**  Other Version Of The Image  */
class ItemAlt extends ItemImage{
    render(){
        return  <img src={this.props.altName} alt={'testing'} />
    }
}