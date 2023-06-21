import Image1 from '../images/01-large.jpg';
import Image2 from '../images/02-large.jpg';
import Image3 from '../images/09-large.jpg';
import Image4 from '../images/03-large.jpg';
import Image5 from '../images/04-large.jpg';
import Image6 from '../images/05-large.jpg';
import Image7 from '../images/06-large.jpg';
import Image8 from '../images/07-large.jpg';
import Image9 from '../images/08-large.jpg';
import './Gallery.css';
function Gallery(params) {
    return (
        <div className="gallery">
            <div className="main-title">
                <h1>GALLERY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="container">
                <div className="box">
                    <div className="image">
                        <a href="#">PROJECT TITLE</a>
                        <img src={Image1} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <a href="#">PROJECT TITLE</a>
                        <img src={Image2} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image3} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image4} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image5} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image6} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image7} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image8} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                    <a href="#">PROJECT TITLE</a>
                        <img src={Image9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;