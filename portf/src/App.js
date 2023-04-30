import logo from './logo.svg';
import './App.css';
import Card from './Card.tsx'
import image_code from './assets/dalle-code.png'
import image_game from './assets/dalle-videogame.png'
import image_art from './assets/dalle-art.png'
import Nav from './Nav';




export default function MyApp() {
  return (
    <div className='background-sh'>
      <div className='App'>
          <div className='NavBar'>
            <Nav title="Aidan's Portfolio">
            </Nav>
          </div>
          <div className='Cards'>
            <Card 
            title='Software Development'
            imgUrl={image_code}
            body='Work that shows off the talent of my programming skills containing applications, scripts and more.'/>

            <Card 
            title='Game Development'
            imgUrl={image_game}
            body="A section dedicated to the enviromental art and game logic I've designed for various video game projects."/>

            <Card 
            title='Creative Work'
            imgUrl={image_art}
            body="An assortment of artistic creations across different forms and styles."/>
            
          </div>
      
      </div>
    </div>
    
    
  );
}
