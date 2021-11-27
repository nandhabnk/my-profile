import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
