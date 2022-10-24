import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
function App() {

  const[text,setText] = useState("Sezgin")

  return (

    
    <div className="App">
      <Form>
        <h2>Login Page</h2>
      <Input value={text} placeholder={"Metin Giriniz"} onChange={(e) => {
          setText(e.target.value)
      }} />

<Input value={text} placeholder={"Metin Giriniz"} onChange={(e) => {
          setText(e.target.value)
      }} />

      <Button text={"Giriş Yap"} onClick={console.log('Tıklandı')}></Button>
      </Form>
    </div>
  );
}

export default App;
