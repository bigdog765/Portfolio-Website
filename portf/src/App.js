import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div className='background'>
      <h1>Aidan Van Gessel</h1>
      <h2 className='h2'>My Software Portfolio</h2>
      <MyButton />
    </div>
  );
}
