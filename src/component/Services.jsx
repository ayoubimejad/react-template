import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord,faCartArrowDown,faCloudArrowUp,faLanguage,faPlaneDeparture,faChartPie} from '@fortawesome/free-solid-svg-icons';
import './Services.css';
function Services() {
    return (
        <div className="services">
          <div className="main-title">
            <h1>OUR SERVICES</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
          </div>
          <div className="container">
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faFileWord} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faCartArrowDown} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faCloudArrowUp} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faLanguage} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faPlaneDeparture} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faChartPie} /></div>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
            </div>
          </div>
        </div>
    )

}
export default Services;