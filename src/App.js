import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navbar from './components/Navbar';
import  ItemListContainer  from './components/ItemListContainer';

function App() {

  const mensaje = ' Bienvenidos golfistas'
  return (


    <>

    <h1 className="TituloPrincipal"> Welldone Golf !!!</h1>
   {/*  <h5 style={{ backgroundColor: "green"}}> Todo para el golfista</h5> */}
    <Navbar/>
   
   <Saludo></Saludo>
   <ItemListContainer  greeting = {'reeeeeeee'}/>
   <h2 style = {{backgroundColor: '#888'}}> {mensaje} </h2>
   
   </>
  );
}

export default App;
