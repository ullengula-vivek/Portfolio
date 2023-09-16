import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './script.js';


function App() {

  return (
    <div>
      <Header/>
      <script src='script.js'></script>
      <Routes>
      <Route path="/api/contact" element={<ContactForm/>} />
      <Route path="/" element={<Welcome/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
