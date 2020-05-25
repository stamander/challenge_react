// Reactをインポートしてください
import React from 'react';

class Lunguage extends React.Component {

  constructor(props){
    super(props);
    this.state ={count:0};
  }
  
  handleClick(name){
    this.setState({name: name});
    this.setState({count:this.state.count +1});

  }
  render() {
    // 定数nameを定義してください
    const user = {name: "Stamander",age:2};
    console.log(user.age);
    
    // 定数imgUrlを定義してください
    const imgUrl = 'stamander.jpg';


    return (
      <div>
        {/* 定数nameを用いてにんじゃわんこと表示されるようにしてください */}
      
    
        
        {/* 定数imgUrlを用いて画像が表示されるようにしてください */}
        <img className = 'Stamander' src = {imgUrl}/>

        <h1 className = 'text'>こんにちは{this.state.name}さん</h1>
        <h2>{this.state.count}</h2>
        <button onClick = {()=>{this.handleClick()}}>+</button>

        <button onClick = {()=>{this.handleClick('ひつじ仙人')}}>
          ひつじ仙人
        </button>
        <button onClick = {()=>{this.handleClick('にんじゃわんこ')}}>
          にんじゃわんこ
          </button>
        
      </div>
    );
  }
}

export default App;
