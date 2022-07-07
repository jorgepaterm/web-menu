import './App.css';
import imageMenu1 from './image/Diapositiva1.JPG';
import imageMenu2 from './image/Diapositiva2.JPG';
import imageMenu3 from './image/Diapositiva3.JPG';

function App() {
  return (
    <div className="div-menu">
        <img className='imagen' src={imageMenu1} alt='imagen del menu 1' />
        <img className='imagen' src={imageMenu2} alt='imagen del menu 2' />
        <img className='imagen' src={imageMenu3} alt='imagen del menu 3' />
    </div>
  );
}

export default App;
