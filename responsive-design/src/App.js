import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h2>Start New App</h2>
          <button id="smallMenu">Menu ☰</button>
          <div id="smallMenuLinks">
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </nav>
        
      </header>
      <main>
        <div className="grayScaleImg">
          <h3>GRAYSCALE</h3>
          <p>A free, responsive, one page Gavin <br />theme created by Gavin</p>
          <button id="getStartedBtn">Get Started</button>
        </div>

        <div className="gradientBlack">
          <h4>Built with my brain v1.0</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..</p>
        </div>

        <div>
          <div className="shoreline">
          <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/jekyll-island-driftwood-in-black-and-white-greg-mimbs.jpg" alt="Black and white shoreline"/>
          <div>
            <h6>Shoreline</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          
        </div>

        <div className="wrapper">
          <div className="misty">
            <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-01.jpg" alt="misty mountains"/>
            <div>
              <h6>Misty</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            
          </div>

          <div className="mountains">
            <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-02.jpg" alt="misty mountains the second"/>
            <div>
              <h6>Mountains</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            
          </div>
        </div>
        
        </div>
        <footer>
          <div id="newsLetter">
            <img src="https://www.iconpacks.net/icons/2/free-paper-plane-icon-2563-thumb.png" alt="Paper plane" />
            <h1>Subscribe to receive updates!</h1>
            <input placeholder="ENTER AN EMAIL ADDRESS..."/>
            <button id="getStartedBtn">Subscribe</button>
          </div>
          <div id="contact">
            <div id="cards">
              <p><strong>ADDRESS</strong></p>
              <div className="bar"></div>
              <p>4923 Market Street, Orlando FL</p>
            </div>
            <div id="cards">
              <p><strong>EMAIL</strong></p> 
              <div className="bar"></div>
              <p>hello@yourdomain.com</p>
            </div>
            <div id="cards">
              <p><strong>PHONE</strong></p> 
              <div className="bar"></div>
              <p>+1 (555) 902-8832</p>
            </div>
          </div>
          <p>Copyright © Your Website 2021</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
