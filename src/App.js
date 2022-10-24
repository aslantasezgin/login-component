import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {

  const[text,setText] = useState("Sezgin")

  return (
    <div className="App">
      {text}
      <Input value={text} placeholder={"Metin Giriniz"} onChange={(e) => {
          setText(e.target.value)
      }} />
    </div>
  );
}

export default App;
