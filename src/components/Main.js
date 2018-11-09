require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import axios from 'axios'

let yeomanImage = require('../images/yeoman.png');

class ChildComponent {
  render(){
    return
  }
}

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    //调用super的原因：在ES6中，在子类的constructor中必须先调用super才能引用this
    this.state = {
      date: new Date(),
      value:''
    };
    //事件处理函数如果不绑定为当前组件的话，函数中的this会为undefined
    this.handlechange=this.handlechange.bind(this);
  }
  componentDidMount(){
    console.log("componentDidMount");
    this.timer=setInterval(()=>this.trick(),1000);
    this.getData();
  }
  componentWillMount(){
    console.log("componentWillMount");
    clearInterval(this.timer)
  }
  componentWillUnmount(){
    console.log("componentWillUnmount");

  }
  trick(){
    this.setState({
      date:new Date()
    })
  }
  handlechange(e){
    console.log("这里的this为"+this);
    this.setState({
      value:e.target.value
    })
  }
  getData(){
    let params1={type:'yuantong',postid:'11111111111'}
    axios.get('api/query',{params:params1}).then((res)=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <div>当前时间为：{this.state.date.toLocaleTimeString()}</div>
          <input type="text" value={this.state.value} onChange={this.handlechange}/>{this.state.value}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
