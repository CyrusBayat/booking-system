import { Link } from 'react-router-dom';
import food1 from '../../Assits/greek-salad.jpg'
import food3 from '../../Assits/lemon-dessert.jpg'
import food2 from '../../Assits/bruschetta.jpg'

const meals = [
    {
        name: 'Greek Salad',
        image: food1,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
        our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
        croutons.`,
    },
    {
        name: 'Bruschetta',
        image: food2,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
        smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: food3,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
        ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const MealCard = ({ meal }) => {
    return (
        <article className="meal-card">
            <div className="meal-image">
                <img src={meal.image} alt={meal.name} />
            </div>
            <div className="meal-details">
                <h3>{meal.name}</h3>
                <span className="meal-price">{meal.price}</span>
            </div>
            <div className="meal-description">
                <p>{meal.description}</p>

                <div className="delivery-link">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="delivery">
                        Order a delivery <i className="fa-solid fa-truck"></i>
                    </a>
                </div>

            </div>
        </article>
    );
};





function Special() {
    return (
        <section className="special-section">
            <div className="week-specials">
                <h2 style={{ flex: 1 }}>This week's specials!</h2>


                <Link to="/PageNotReady"><button className="buttonClick" >Order Now</button></Link>

            </div>
            <div className="meal-cards">
                {meals.map((meal, index) => (
                    <MealCard key={index} meal={meal} />
                ))}
            </div>
        </section>
    );
}

export default Special;