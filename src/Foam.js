import React from 'react'
  
export default class Foam extends React.Component{

    constructor(props) {
        super(props);
        
        this.state = {
          name: 'Haris',
          
      }

}
onHandleChange(event){
        this.setState({
                name:event.target.value
        });
}

render(){

    return (
        <div>
            <h1>Two Way Binding Concept </h1>
            <input type="text" value={this.state.name} onChange={(event)=> this.onHandleChange(event)}/>
        </div>
    )
}

}



