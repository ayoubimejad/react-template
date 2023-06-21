import './Testimonials.css';
import image1 from '../images/testi.jpg';
import image2 from '../images/testi2.jpg';
import image3 from '../images/testi3.jpg';
import image4 from '../images/testi4.jpg';
import image5 from '../images/testi5.jpg';
import image6 from '../images/testi6.jpg';
function Testimonials(params) {
    return (
        <div className="testimonials">
            <div className="main-title">
                <h1>WHAT OUR CLIENTS SAY</h1>
            </div>
            <div className="container">
                <div className="box">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- John Doe</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- Johnathan Doe</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- John Doe</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image4} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- Johnathan Doe</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image5} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- John Doe</h4>
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image6} alt="" />
                    </div>
                    <div className="text">
                        <p>""Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.""</p>
                        <h4>- Johnathan Doe</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;