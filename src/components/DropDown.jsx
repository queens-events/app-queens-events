import React, { Component } from 'react'
import '../../style/DropDown.css'

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isHidden: true,
            displayText: this.props.dropText
        }

        
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden     
        })
    }

    displayList() {
        return (

            <ul className="dropDownList">
                {/*{this.props.listItems.map(function (listValue) {
                    return <li className="dropDownItem" key={listValue} onClick={console.log("Clicked")}><div onClick={console.log("click2")}>{listValue}</div></li>
                })}*/}

                <li className="dropDownItem" key={this.props.listItems[0]} onClick={console.log("hi")}>{this.props.listItems[0]}</li>
            </ul>
            )
    }

    updateText() {
        this.setState({
            displayText: "hye"
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)} className="dropDownBtn">
                    {console.log(this.state.displayText)}
                    {this.state.displayText}
                </button>

                <ul className="dropDownList">
                    {this.props.listItems.map((listValue) =>
                        <li className="dropDownItem" key={listValue} onClick={this.updateText.bind(this)} > { listValue }</li>
                    )}
                  
                </ul>
            </div>
        )
    }
}



export default DropDown