import React from "react";
import '../stylesheets/webteam.scss'

const WebTeam = () => {
  const associateMembers = [
    { name: "Ayush raj", position: "Website Team Lead", image_name: "Ayush_web.jpg" },
    { name: "Sharda Kumari", position: "Coordinatior, Web Team", image_name: "sharda_web.jpg" },
    { name: "Prachi Gupta", position: "Coordinatior, Web Team", year: "3rd year, ECE", image_name: "Prachi_web.png" },
    { name: "Dharmendra Chaudhary", position: "Coordinatior, Web Team", year: "3rd year, ECE", image_name: "Dharmendra_web.jpg" },
    { name: "Aditya Srivastav", position: "Coordinatior, Web Team", year: "2nd year, ECE", image_name: "Aditya_web.jpg" },
  ]
  return (
    <div className="web-team-container">
      <h2 className='web-team-container-title'>Development Team</h2>
      <div className="web-team-canvas">
      {associateMembers.map((associate, index) => (
        <div className={`web-team-card-container position${index % 6}`} key={index}>
          <div className='web-team-card' key={index} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/webteam/${associate.image_name})` }}>
          </div>
          <div className='web-team-card-bottom'>
            <div>{associate.name}</div>
            <div dangerouslySetInnerHTML={{ __html: `${associate.position}` }}></div>
            <div>{associate.year}</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default WebTeam;
