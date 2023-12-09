import Custm1 from '../../Assits/customer1.jpg'
import Custm2 from '../../Assits/customer2.jpg'
import Custm3 from '../../Assits/customer3.jpg'
import Custm4 from '../../Assits/customer4.jpg'



const customers = [
    {
        fullName: 'Maria Sanchez',
        image: Custm1,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Antony Clifton',
        image: Custm2,
        rating: [1, 1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Tamika Jackson',
        image: Custm3,
        rating: [1, 1, 1, 1, 0.5],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        fullName: 'Brandon Ming',
        image: Custm4,
        rating: [1, 1, 1, 1],
        says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
];



const ratingLevels = {
    '0.5': <i className="fa-solid fa-star-half"></i>,
    '1': <i className="fa-solid fa-star"></i>,
};

const TestimonialCard = ({ customer }) => {
    return (
        <article className="testimonial-card">
            <img src={customer.image} alt={customer.fullName} className="customer-image" />
            <div className="customer-info">
                <h4>{customer.fullName}</h4>
                <div className="rating">
                    {customer.rating.map((ratingPoint, index) => (
                        <span key={index} className="star-icon">
                            {ratingLevels[ratingPoint]}
                        </span>
                    ))}
                </div>
            </div>
            <blockquote className="customer-quote">
                <p>"{customer.says}"</p>
            </blockquote>
        </article>
    );
};




function Customer() {
    return (
        <section className="testimonial-section">
            <h2 style={{ color: "white" }}>What people say about us!</h2>
            <div className="testimonial-cards">
                {customers.map((customer, index) => (
                    <TestimonialCard key={index} customer={customer} />
                ))}
            </div>
        </section>
    );
}


export default Customer;