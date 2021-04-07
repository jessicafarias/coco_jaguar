import PropTypes from 'prop-types';

const Meal = ({ product }) => (
  <div className="pb-3">
    <div className="d-flex flex-between-center precio row precio">
      <p className="col-10">
        <span className="jaguar">Ꜿ </span>
        {product.description}
      </p>
      <p className="p-1">
        $
        {product.price}
      </p>
    </div>
  </div>
);

Meal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Meal;
