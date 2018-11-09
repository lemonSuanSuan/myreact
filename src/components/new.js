import React from 'react';

class NewComponent extends React.Component {
  constructor(){
    super(props);
    this.state = {value:null};
  }
  render(){
    return(
      <div className="new">
        <input type="text" name="" value={this.state.value}>this.state.value
      </div>
    );
  }
}
export default NewComponent;
