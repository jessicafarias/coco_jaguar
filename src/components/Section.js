import PropTypes from 'prop-types';
import Meal from './Meal';

const Section = ({ title, list }) => (
  <div>
    <p className="sub-title mt-4">{title}</p>
    <div className="texto">
      {list.map(dish => (
        <Meal
          key={dish.id}
          product={dish}
        />
      ))}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default Section;
