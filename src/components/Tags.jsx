import React, { Component } from 'react'
import Dropdown from './Dropdown.jsx'
import '../../style/Tags.css'


//Use DropDown functionality to import list and update text, but I've read that extending components is bad practice'
class Tags extends Dropdown {

    constructor(props) {
        super(props)




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



export default Tags