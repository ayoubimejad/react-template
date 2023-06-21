import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import imageAbout from '../images/about.jpg'
function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="image">
                    <img src={imageAbout} alt="..." />
                </div>
                <div className="content">
                    <div className="main-title">ABOUT US</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Why Choose Us?</h3>
                    <div className="container-box">
                        <div className="box">
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                        </div>
                        <div className="box">
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                            <p><FontAwesomeIcon icon={faCheck} /> Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;