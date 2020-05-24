// Reactをインポートしてください
import React from 'react';

// Appクラスを定義してください
class App extends React.Component{
  render(){
    const text = 'Hello world'
   return (
      <h1>Hello React</h1>
      <div>{text}</div>
    );
  }
}

// Appクラスをエクスポートしてください

export default App;