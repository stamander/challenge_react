// Reactをインポートしてください
import React from 'react';

class App extends React.Component {
  render() {
    // 定数nameを定義してください
    const name = "Hello stamander";
    
    // 定数imgUrlを定義してください
    const imgUrl = 'stamander.jpg';
    
    return (
      <div>
        {/* 定数nameを用いてにんじゃわんこと表示されるようにしてください */}
        <h1>{name}</h1>
        
        {/* 定数imgUrlを用いて画像が表示されるようにしてください */}
        <img src = {imgUrl}/>

        <h1>こんにちは</h1>
        <button onClick>ひつじ仙人</button>
        <button>にんじゃわんこ</button>
        
      </div>
    );
  }
}

export default App;
