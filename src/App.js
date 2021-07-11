import './App.css';
import Navbar from './components/Navbar/Navbar';
/* import ItemListContainer from './components/ItemList/ItemListContainer'; */
import Counter from "./components/Counter/ItemCount";


function App() {
  const darBienvenida = ()=> alert('Bienvenidos a la tienda');
  return (
    <>
    <div className="App">
      <Navbar 
        nombreDeLaTienda="LoCompras" 
        subtitulo="...lo mejor de la WEB" 
        darBienvenida={darBienvenida}
      />
      {/* <ItemListContainer texto = "En este espacio irá el catálogo!!!" /> */}
      <Counter initial={1} stock={7}/>
    </div>
    </>
  );
}

export default App;
