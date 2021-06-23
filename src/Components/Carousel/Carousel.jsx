import React from 'react';
import './Carousel.css';
import Image1 from '../../Images/img1.jpg'
import Image2 from '../../Images/img2.jpg'
import Image3 from '../../Images/img3.jpg'
const Carousel = () => {
    return (
        <div className="Container">
            <div className="row">
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src={Image1} alt="Alan" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div className="item">
                            <img src={Image2} alt="Foad" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                        <div className="item">
                            <img src={Image3} alt="Rahul" />
                            <div className="carousel-caption">
                                ...
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Carousel;