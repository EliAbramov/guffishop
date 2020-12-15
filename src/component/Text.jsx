import React from 'react'
import {Consumer} from './ContextAPI'

export default function Text() {
    return (
        <div>

            <Consumer>
                {(stu)=>{ return <p>My name is {stu.name}, my age is {stu.age}</p>}}
            </Consumer>



            
        </div>
    )
}
