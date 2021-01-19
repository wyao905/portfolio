import './App.css';
import HeaderBar from './components/headerBar'
import About from './components/about'
import ContentContainer from './components/contentContainer'

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <About />
      <ContentContainer />
    </div>
  );
}

export default App;
