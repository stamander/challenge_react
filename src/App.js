// Reactをインポートしてください
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={name:'にんじゃわんこ'};
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
        <img src = {imgUrl}/>

        <h1>こんにちは{this.state.name}さん</h1>
        <button onClick = {()=>{this.setState({name:'ひつじ仙人'})}}>
          ひつじ仙人
        </button>
        <button onClick = {()=>{this.setState({name:"にんじゃわんこ"})}}>
          にんじゃわんこ
          </button>
        
      </div>
    );
  }
}

export default App;
