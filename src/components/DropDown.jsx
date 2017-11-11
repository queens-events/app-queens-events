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
                {this.props.listItems.map((listValue) =>
                    <li className="dropDownItem" key={listValue} onClick={() => this.updateText(listValue)} > {listValue}</li>
                )}

            </ul>
            )
    }

    updateText(listVal) {
        this.setState({
            displayText: listVal
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)} className="dropDownBtn">
                    {console.log(this.state.displayText)}
                    {this.state.displayText}
                </button>

                {!this.state.isHidden && this.displayList()}
            </div>
        )
    }
}



export default DropDown