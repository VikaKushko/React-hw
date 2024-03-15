import React from "react";
import Carousel from './components/Carousel.jsx'
import './App.css'



const App = () => {
    const images = [
        './src/assets/cat.jpeg',
        './src/assets/dog.jpeg',
        './src/assets/dogBlack.jpeg',
        './src/assets/pandy.jpeg',
        './src/assets/1.jpeg',
        './src/assets/2.png',
        './src/assets/2.jpeg',
        './src/assets/3.jpeg',
        './src/assets/4.jpeg',
        './src/assets/5.jpeg',
        './src/assets/6.avif',

    ];

    return (
        <div>
            <Carousel images={images} />
        </div>
    );
}

export default App;
