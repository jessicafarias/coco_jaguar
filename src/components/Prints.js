import huella from '../assets/images/huella.png'

const Prints = () => {
  return(
    <div class="pb-3">
      <div class="d-flex flex-between-center precio row precio">
        <p class="col-12">
        <span class="jaguar">Ꜿ 
        </span>Chilaquiles rojos o verdes</p>
      </div>
      <div class="d-flex flex-between-center precio row precio">
        <p class="col-6 pr-1">
          <img src={huella} alt="huella"/>Pollo $120
        </p>
        <p class="col-6 p-0">
          <img src={huella} alt="huella"/>Arrachera $135</p>
      </div>
    </div>
  );
}

export default Prints;