import Footer from '../components/Foother';
import Header from '../components/Header';
import '../styles/App.css';
import '../styles/css/fonts.css';
import '../styles/css/styles.css';
import FirstRow from './FirstRow';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstRow />
      <Footer />
    </div>
  );
}

export default App;
