import huella from '../assets/images/huella.png';

const Prints = () => (
  <div className="pb-3">
    <div className="d-flex flex-between-center precio row precio">
      <p className="col-12">
        <span className="jaguar">
          Ꜿ
        </span>
        Chilaquiles rojos o verdes
      </p>
    </div>
    <div className="d-flex flex-between-center precio row precio">
      <p className="col-6 pr-1">
        <img src={huella} alt="huella" />
        Pollo $120
      </p>
      <p className="col-6 p-0">
        <img src={huella} alt="huella" />
        Arrachera $135
      </p>
    </div>
  </div>
);

export default Prints;
