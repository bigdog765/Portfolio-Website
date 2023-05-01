import logo from './logo.svg';
import './App.css';
import Card from './Card.tsx'
import image_code from './assets/dalle-code.png'
import image_game from './assets/dalle-videogame.png'
import image_art from './assets/dalle-art.png'
import img_wayne from './assets/wayne-logo.png'
import img_code from './assets/programming-icon.png'
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
          <div className='text-section1'>
            <div className='paragraph1'>
              Greetings! My name is <b>Aidan Van Gessel</b>, and I am a Computer Science graduate from <b>Wayne State University</b>. 
              I am deeply passionate about the art of developing unique and innovative software programs. As a <b>level-headed worker</b>, 
              I am constantly seeking opportunities to enhance my personal and career skills.
              My programming skills are primarily focused on object-oriented languages such as <b>C++</b> and <b>Java</b>. 
              Additionally, I am experienced in working with Python, SQL, JavaScript, and HTML, allowing me to take on a wide range of 
              programming tasks with confidence.
            </div>
            <div className='icon-container1'>
              <div className='wayne-icon'>
                <img src={img_wayne} className='imgcss-wayne' alt=''></img>
              </div>
              <div className='code-icon'>
                <img src={img_code} className='imgcss-code' alt=''></img>
              </div>
            </div>
          </div>
          
          <div className='paragraph2'>
            Throughout my academic and professional career, I have developed a diverse skill set that has allowed me to take on a wide range of professional projects. 
            I have worked on everything from <b>game development</b> to <b>RESTful web services</b> to <b>database management</b>, and each project has challenged me to 
            grow both personally and professionally.
          </div>

          <div className='bottom-nav'>   
            aidanvg.live
          </div>
      
      </div>
    </div>
    
    
  );
}
