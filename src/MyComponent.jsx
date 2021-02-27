import React, { Component } from 'react'

class MyComponent extends Component {
constructor(props){
super(props);
this.state={counter : 100}


}


componentDidMount(){
    console.log('componentDidMount')
}

componentDidUpdate(){
    console.log('componetdidupdate')
}



componentWillUnmount(){
    console.log('component will unmount')
}

    render() {
        console.log('rendering')
        return (
            <div>
                <p>{this.state.counter}</p>
                <p>{this.props.data.nav}</p>
            </div>
        )
    }
}
export default MyComponent;