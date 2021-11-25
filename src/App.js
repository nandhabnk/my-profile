import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ButtonComponent from "./components/UI-Elements/ButtonComponent/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <ButtonComponent name={"test"} />
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
