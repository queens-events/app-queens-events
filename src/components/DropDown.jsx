import React, { Component } from 'react'
import '../../style/DropDown.css'

class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            displayText: this.props.dropText,
            onChange: this.props.onChange
        }

        
    }

    toggleHidden() {
        this.setState({
            hidden: !this.state.hidden     
        })
    }

    displayList() {

        return (

            <ul className="dropDownList">
                {this.props.listItems.map((listValue) =>
                    <li className="dropDownItem" key={listValue} onClick={() => this.updateText(listValue)}>
                        <div onClick={this.props.onChange.bind(this)}>
                            {listValue}
                        </div>
                    </li>
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
                    {this.state.displayText}
                    
                </button>

                {!this.state.hidden && this.displayList()}
            </div>
        )
    }
}



export default DropDown