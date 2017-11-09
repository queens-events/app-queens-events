import React, { Component } from 'react'
import '../../style/DropDown.css'

class DropDown extends Component {

    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)} className="dropDownBtn">
                    {this.props.dropText}
                </button>
                {!this.state.isHidden && <DropDownChild list={this.props.listItems} />}
            </div>
        )
    }
}

class DropDownChild extends Component {

    

    

    render() {
    return (

        <ul className="dropDownList">
            {this.props.list.map(function (listValue) {
                return <li className="dropDownItem" key={listValue}>{listValue}</li>
            })}
        </ul>
        )
    }
}

export default DropDown