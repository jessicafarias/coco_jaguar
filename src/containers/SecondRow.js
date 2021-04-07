import Section from '../components/Section';
import ParrillaList from '../constants/ParrillaList';
import PastasList from '../constants/PastasList';

const SecondRow = () => (
  <div className="p-2">
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="A LA PARRILLA" list={ParrillaList} />
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="PASTAS" list={PastasList} />
      </div>
    </div>
  </div>
);

export default SecondRow;
