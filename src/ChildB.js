import React, { useContext } from 'react'
import ChildC from './ChildC'
import { fname, lname } from './App'

function ChildB() {
    const firstname = useContext(fname)
    const lastname = useContext(lname)
    return (
        <div>
            <h3>ChildB</h3>
            <div>My name is {firstname} {lastname} from ChildB</div>
            <ChildC />
        </div>
    )
}

export default ChildB