import { Container } from 'react-bootstrap';
import Navbar from './components/CustomNavbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import "./App.css"

function App() {
  return (
    <Container className="App">
      <Navbar/>
      <Hero/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Skills/>
    </Container>
  );
}

export default App;
