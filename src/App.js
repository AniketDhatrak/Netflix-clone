import './App.css';  
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '62b11b5d4dc1366d042fb6cd2de9571f',
};

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  );
};

export default App;