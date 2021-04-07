import Footer from '../components/Foother';
import Header from '../components/Header';
import '../styles/App.css';
import '../styles/css/fonts.css';
import '../styles/css/styles.css';
import FirstRow from './FirstRow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Refrescos from './Refrescos';
import SecondRow from './SecondRow';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstRow />
      <SecondRow />
      <Refrescos />
      <Footer />
    </div>
  );
}

export default App;
