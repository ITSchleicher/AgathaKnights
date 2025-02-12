import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'; // Ensure the CSS file is imported

function App() {
  return (
    <div className="app-container">
      <Nav />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;

