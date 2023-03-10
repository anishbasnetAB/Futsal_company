import logo from "./logo.svg";
import "./App.css";
import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      {/* <Possibility /> */}
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
