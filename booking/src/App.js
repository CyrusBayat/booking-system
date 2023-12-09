import './App.css';
import Footer from './Components/Footer/Footer';
import HomeMain from './Components/Main/HomeMain';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import PageNotReady from './Components/PageNotReady';
import { Routes, Route } from 'react-router-dom'



function App() {

    return (
        <div >

            <header>
            </header>

            <nav>
                <Navbar />
            </nav>

            <main>
                <Routes>
                    <Route path='/' element={<HomeMain />} />
                    <Route path='/Main' element={<Main />} />
                    <Route path='/PageNotReady' element={<PageNotReady />} />

                </Routes>
            </main>
            

            <footer><Footer /></footer>


        </div>
    );
}

export default App;
