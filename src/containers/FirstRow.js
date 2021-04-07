import Section from '../components/Section';
import DesayunosList from '../constants/DesayunosList';
import EntradasList from '../constants/EntradasList';
import PastasList from '../constants/PastasList';
import TacosList from '../constants/TacosList';

const FirstRow = () => (
  <div className="p-2">
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="DESAYUNOS" list={DesayunosList} />
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="ENTRADAS" list={EntradasList} />
        <Section title="TACOS" list={TacosList} />
        <Section title="PASTAS" list={PastasList} />
      </div>
    </div>
  </div>
);

export default FirstRow;
