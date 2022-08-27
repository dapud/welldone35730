import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navbar from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {

  const mensaje = ' bienvenidos a la clase de react'
  return (


    <>
    <Navbar/>
   <h1> Hola mundooo !!!</h1>
   <Saludo></Saludo>
   <ItemListContainer  greeting = {'reeeeeeee'}/>
   <h2 style = {{backgroundColor: '#888'}}> {mensaje} </h2>
   
   


   </>
  );
}

export default App;
