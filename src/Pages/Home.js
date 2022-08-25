import React from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Slider from '../Components/Home/Slider';
// import Footer from '../Components/Common/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;