import palmeraizquierda from '../assets/images/palmera-izquierda.png';
import menutitle from '../assets/images/MENU.png';
import logo from '../assets/images/logo_blanco.png';

const Header = () => (
  <div>
    <header className="row bgc-black">
      <div className="d-flex flex-center-center m-auto">
        <img className="center-50 w-50 p-5 m-4" src={logo} alt="LOGO CORAZON" />
      </div>
    </header>
    <div>
      <div className="flex-between-center row bgc-yellow relative-space">
        <img className="img-palmer-l top-2" src={palmeraizquierda} alt="palmeraiz" />
        <img className="center w-50" src={menutitle} alt="MENU" />
        <img className="img-palmer-r top-98" src={palmeraizquierda} alt="palmeraraiz" />
      </div>
    </div>
  </div>
);

export default Header;
