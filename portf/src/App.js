import logo from './logo.svg';
import './App.css';
import Card from './Card'
import img1 from './dalle-code.png'

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div className='App'>
        <div>
          <img></img>
        </div>
        <div className='Cards'>
          <Card 
          title='Software Development'
          imgUrl={img1}
          body='Hello this is the body text.'/>
          
        </div>
    
    </div>
    
    
    
  );
}
