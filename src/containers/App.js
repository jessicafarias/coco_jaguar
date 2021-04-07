import Footer from '../components/Foother';
import Header from '../components/Header';
import '../styles/App.css';
import '../styles/css/fonts.css';
import '../styles/css/styles.css';
import FirstRow from './FirstRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Refrescos from './Refrescos';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstRow />
      <Refrescos />
      <Footer />
    </div>
  );
}

export default App;
