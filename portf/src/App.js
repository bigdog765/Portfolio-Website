import logo from './logo.svg';
import './App.css';
import Card from './Card'
import img1 from './dalle-code.png'
import Nav from './Nav';



export default function MyApp() {
  return (
    <div className='background-sh'>
      <div className='App'>
          <div className='NavBar'>
            <Nav title='Aidans Portfolio'>

            </Nav>
          </div>
          <div className='Cards'>
            <Card 
            title='Software Development'
            imgUrl={img1}
            body='Hello this is the body text.'/>

            <Card 
            title='Game Development'
            imgUrl={img1}
            body='Hello this is the body text.'/>

            <Card 
            title='Creative Work'
            imgUrl={img1}
            body='Hello this is the body text.'/>
            
          </div>
      
      </div>
    </div>
    
    
  );
}
