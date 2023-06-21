import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup , faComment,faBullhorn,faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
function Features(params) {
    return (
        <div className="features" >
            <div className="main-title">features</div>
            <div className="container">
                <div className="box">
                    <div className="icon"><FontAwesomeIcon icon={faUserGroup} /></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="box">
                    <div className="icon"><FontAwesomeIcon icon={faComment} /></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="box">
                    <div className="icon"><FontAwesomeIcon icon={faBullhorn} /></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
                <div className="box">
                    <div className="icon"><FontAwesomeIcon icon={faWandMagicSparkles} /></div>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
                </div>
            </div>
        </div>
    )
}
export default Features;