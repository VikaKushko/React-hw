import React, {useState} from "react";

const Carousel = ({images}) =>{
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () =>{
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevImage = () =>{
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return(
        <div className="slider">
            <button className="arrow prev" onClick={prevImage}>
                &lt;
            </button>
            <div className="slide-container">
                {images.map((image, index) => (
                    <div key={index} className={index === activeIndex ? 'slide active' : 'slide'}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="arrow next" onClick={nextImage}>
                &gt;
            </button>
        </div>
    );
};

export default Carousel;