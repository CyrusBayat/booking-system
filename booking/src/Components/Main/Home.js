import restImage from '../../Assits/restaurant0.jpg';
import Title from './Title';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='homeIntro'>
            <div className="Home grid">
                <div className='Intro'>
                    <div style={{ marginTop: "80px" }}>
                        <Title />
                    </div>

                    <p className='text'>
                        We are a family-owned Mediterranean restaurant,<br/>
                        focused on traditional recipes served with a modern twist.
                    </p>

                    <Link to="/Main" style={{margin:"40px"}}><button className="buttonClick" >Reserve a table</button></Link>

                </div>
                <div className="img-container">
                    <img
                        style={{ width: "100%" }}
                        src={restImage}
                        alt="Restaurant food"
                    />
                </div>
            </div>

        </section>
    );

};

export default Home;