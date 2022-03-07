import './App.css';
import Dogs from './Dogs';
import Cats from './Cats';
import ChangeCat from './ChangeCat';

const App = () => {
  return (
    <div className='container'>
      <h1>Class to Functional</h1>
      <Dogs />
      <Cats />
      <ChangeCat />
    </div>
  );
};

export default App;
