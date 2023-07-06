import './App.css';
import Row from './components/Row';
import categorias from './Api';
import { getMovies } from './Api';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      {categorias.map((categorias) => {
        return(
      <Row 
          key={categorias.name}
          title={categorias.title}
          path={categorias.path}
          isLarge={categorias.isLarge}
      />
      );
      })}
    </div> 
  )
}

export default App;
