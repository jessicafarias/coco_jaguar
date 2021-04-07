import Section from '../components/Section';
import PreparadosList from '../constants/PreparadosList';
import RefrescosList from '../constants/RefrescosList';

const Refrescos = () => (
  <div className="p-2">
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="REFRESCOS" list={RefrescosList} />
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="PREPARADOS" list={PreparadosList} />
      </div>
    </div>
  </div>
);

export default Refrescos;
