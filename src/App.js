// Reactをインポートしてください
import React from 'react';

class App extends React.Component {
  render() {
    // 定数nameを定義してください
    const name = "にんじゃわんこ";
    
    // 定数imgUrlを定義してください
    const imgUrl = 'logo192.png';
    
    return (
      <div>
        {/* 定数nameを用いてにんじゃわんこと表示されるようにしてください */}
        <h1>{name}</h1>
        
        {/* 定数imgUrlを用いて画像が表示されるようにしてください */}
        <img src = {imgUrl}/>
        
      </div>
    );
  }
}

export default App;
