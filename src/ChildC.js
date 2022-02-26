import React from 'react'
import { fname, lname } from './App'

function ChildC() {
    return (
        <fname.Consumer>{(fname) => {
            return (
                <lname.Consumer>{(lname) => {
                    return (
                        <div>
                            <div>ChildC</div>
                            <div>My name is {fname} {lname} from ChildC</div>
                        </div>
                    )
                }}</lname.Consumer>
            )
        }}</fname.Consumer>
    )
}

export default ChildC