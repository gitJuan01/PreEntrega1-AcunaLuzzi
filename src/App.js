import NavBar from './components/NavBar/NavBar';
import Codix from './components/TituloCodix/Codix';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css'; /* importo todos los componentes */

function App() {
  return (
    <>
      <Codix/>  {/* Componentes en orden correspondiente */}
      <NavBar/>
      <ItemListContainer/>
    </>
  );
}

export default App;
