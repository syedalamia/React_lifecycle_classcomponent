import React from 'react'
import MyComponent from './MyComponent'

const MyComponent2=()=> {

    
    const surma=()=>{
        console.log('ishu moni');
    }

    return (
        <div>
            <button onClick={surma}>Click comp2</button>
            
        </div>
    )
}
export default MyComponent2;