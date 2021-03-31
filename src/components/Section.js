import Meal from "./Meal";
import Prints from "./Prints";

const Section = ({title, list}) => {

  return(
    <div>
        <p className="sub-title mt-4">{title}</p>
        <div className="texto">
        {list.map(dish => (
          <Meal
            key={dish.id}
            product={dish}
          />
        ))}
        <Prints />
        </div>
      </div>
  )
}

export default Section;