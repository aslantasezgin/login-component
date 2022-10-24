import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';
import Button from './components/Button/Button';

function App() {

  const[text,setText] = useState("Sezgin")

  return (
    <div className="App">
      <Input value={text} placeholder={"Metin Giriniz"} onChange={(e) => {
          setText(e.target.value)
      }} />
      <Button text={"Giriş Yap"} onClick={console.log('Tıklandı')}></Button>
    </div>
  );
}

export default App;
