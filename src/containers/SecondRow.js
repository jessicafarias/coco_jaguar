import Section from '../components/Section';
import CevichesList from '../constants/CevichesList';
import ParrillaList from '../constants/ParrillaList';

const SecondRow = () => (
  <div className="p-2">
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="A LA PARRILLA" list={ParrillaList} />
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="CEVICHES" list={CevichesList} />
      </div>
    </div>
  </div>
);

export default SecondRow;
