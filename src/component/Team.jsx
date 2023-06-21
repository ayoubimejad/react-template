import './Team.css';
import image1 from '../images/team1.jpg';
import image2 from '../images/team2.jpg';
import image3 from '../images/team3.jpg';
import image4 from '../images/team4.jpg';
function Team() {
    return (
        <div className="team">
            <div className="main-title">
                <h1>MEET THE TEAM</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="container">
                <div className="box">
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                    <h4>John Doe</h4>
                    <p>Director</p>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                    <h4>Mike Doe</h4>
                    <p>Senior Designer</p>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                    <h4>Jane Doe</h4>
                    <p>Senior Designer</p>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={image4} alt="" />
                    </div>
                    <h4>Karen Doe</h4>
                    <p>Project Manager</p>
                </div>
            </div>
        </div>
    )
}
export default Team;