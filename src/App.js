import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
function App() {

  const [userForm, setUserForm] = useState({
    userName: '',
    password: ''
  })

  const [label, setLabel] = useState("")

  const onValidation= () =>{
    if(userForm.userName == "" || userForm.password==""){
      setLabel('Please enter your full username and password...')
    }else{
      setLabel("Form Submitted")
    }
  }

  return (

    
    <div className="App">
      <Form>
   
        <h2>Login Page</h2>
        <span className="lbl" >{label}</span>
      <Input value={userForm.userName} placeholder={"Username"} onChange={(e) => {
       // setUserForm({userName:e.target.value, password:userForm.password})
        setUserForm({... userForm, userName: e.target.value})
      }} />

    <Input type="password" value={userForm.password} placeholder={"Password"} onChange={(e) => {
         // setUserForm({password:e.target.value, userName:userForm.userName})
         setUserForm({... userForm, password: e.target.value})
      }} />

      <Button text={"Login"} onClick={() => {
        onValidation()
      }}></Button>
      </Form>
    </div>
  );
}

export default App;
