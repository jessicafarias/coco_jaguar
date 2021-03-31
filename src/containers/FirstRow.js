import Section from "../components/Section";
import DesayunosList from '../constants/DesayunosList';
import EntradasList from '../constants/EntradasList';

const FirstRow =() => {
  return (
    <div className="row">
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="ENTRADAS" list={EntradasList} />
      </div>
      <div className="col-12 col-sm-12 col-lg-6">
        <Section title="DESAYUNOS" list={DesayunosList}/>
      </div>
    </div>
  );
}

export default FirstRow;