import React from "react";
import "../stylesheets/team.scss";

const Team = () => {
  // Array containing information for each team member
  const teamMembers = [
    {
      name: "Dr. Sukanta Roy",
      position:
        "Faculty In-charge (FIC), Training and Placement Office <br> Chairman, Training and Placement Committee",
      phone: "+91-9035385841",
      email: "sukanta.me@nitmz.ac.in / tnp@nitmz.ac.in",
      image_name: "dr_sukanta_roy.png",
    },
    {
      name: "Dr. Ashish Singh Patel",
      position: "FIC, Alumni",
      phone: "+91-8839341501",
      email: "",
      image_name: "dr_ashish_singh.png",
    },
    {
      name: "Dr. Amit Yadav",
      position: "TPO, CE",
      phone: "+91-9755007773",
      email: "",
      image_name: "dr_amit.png",
    },
    {
      name: "Dr. Lalhruaizela",
      position: "TPO, CSE",
      phone: "+91-9487678402",
      email: "",
      image_name: "dr_zela.png",
    },
    {
      name: "Dr. K. Vanlalawmpuia",
      position: "TPO, ECE",
      phone: "+91-9774912755",
      email: "",
      image_name: "dr_puia1.png",
    },
    {
      name: "Dr. Ramesh Kumar",
      position: "TPO, EEE",
      phone: "+91-8822097049",
      email: "",
      image_name: "dr_ramesh.png",
    },
    {
      name: "Dr. Vijay Mandal",
      position: "TPO, ME",
      phone: "+91-9661164031",
      email: "",
      image_name: "dr_vijay1.png",
    },
  ];

  const studentPlacementcordinators = [
    {
      name: "Vikash Kumar",
      position: "Placement Coordinator",
      branch: "ME",
      linkedin: "",
      image_name: "vikash_kumar.png",
      designation: "Team Lead",
    },
    {
      name: "Sanjeevni Joshi",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "",
      image_name: "sanjeevani_joshi1.png",
    },
    {
      name: "Siddharth Bhatt",
      position: "Placement Coordinator",
      branch: "CSE",
      linkedin: "",
      image_name: "siddharth.png",
    },

    {
      name: "Shubham Kumar",
      position: "Placement Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "shubham_kumar.png",
    },

    {
      name: "Pratima Prit",
      position: "Placement-Coordinator",
      branch: "EEE",
      linkedin: "",
      image_name: "pratimaprit.png",
    },
    {
      name: "Shashank Shekhar",
      position: "Placement-Coordinator",
      branch: "MT CIR",
      linkedin: "",
      image_name: "Shashank_shekhar.jpg",
    },
  ];

  const studentActivityCoordinators2025 = [
    {
      name: "Khusbhu Kumari",
      position: " Activity Coordinator",
      position: "Activity Cordinator",
      branch: "CSE",
      designation: "Team-Lead",
      image_name: "avishek_gope.png",
    },
    {
      name: "Yazat Mishra",
      position: "Activity Cordinator",
      branch: "ECE",
      linkedin: "",
      image_name: "yazatmishra.png",
    },
    {
      name: "Prashant Kumar",
      position: "Activity Coordinator",
      branch: "EEE",
      linkedin: "",
      image_name: "prashant_kumar.png",
    },
    {
      name: "Vishal Singh",
      position: "Activity Coordinator",
      branch: "ME",
      linkedin: "",
      image_name: "vishal_singh.png",
    },
    {
      name: "Rahul Kumar Prajapati ",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "ayush_raj.png",
    },
    {
      name: "Kishor Malakar",
      position: "Activity Coordinator",
      branch: "MT CIR",
      linkedin: "",
      image_name: "nihal_kumar.png",
    },
  ];

  const studentActivityCoordinators2026 = [
    {
      name: "Suman Kumar Verma",
      position: "Activity Cordinator",
      branch: "ECE",
      linkedin: "",
      image_name: "yazatmishra.png",
    },
    {
      name: "Abhinav Gupta",
      linkedin: "",
      position: "Activity Cordinator",
      branch: "ME",
      image_name: "avishek_gope.png",
    },

    {
      name: "Md.Sibtain",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "",
      image_name: "md.png",
    },
    {
      name: "Rahul Kumar",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "vishal_singh.png",
    },
    {
      name: "Rohit Kumar Gupta ",
      position: "Activity Coordinator",
      branch: "EEE",
      linkedin: "",
      image_name: "Rohit_gupta.png",
    },
  ];

  const executiveMembers = [
    {
      name: "Krishan kumar",
      position: "4th Year, CE",
      phone: "+91-9035385841",
      image_name: "krishan_kumar.png",
    },
    {
      name: "Shashvat Rane",
      position: "4th Year, CSE",
      phone: "+91-8839341501",
      image_name: "sashvat_rane.png",
    },
    {
      name: "Sanskar Sharma",
      position: "4th Year, ECE",
      phone: "+91-9487678402",
      image_name: "sanskar_sharma.png",
    },
    {
      name: "Krishna Raj vatsh",
      position: "4th Year,EEE",
      phone: "+91-9774912755",
      image_name: "krishna_raj.png",
    },
    {
      name: "Prakash Jha",
      position: "4th Year, ME",
      phone: "+91-9661164031",
      image_name: "prakash_jha.png",
    },
  ];

  return (
    <div className="team-container" id="team">
      <h2 className="team-container-title">OUR TEAM</h2>
      <h4 className="team-container-sub-title">HEAD'S</h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${member.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{member.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>{member.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: `${member.position}` }}
              ></div>
              <div>Phone: {member.phone}</div>
              <div>Email: {member.email}</div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="team-container-sub-title">
        STUDENT PLACEMENT COORDINATORS
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentPlacementcordinators.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${placementcoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{placementcoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover flex justify-around align-middle  align-item-center px-4 items-center ">
              <div>
                <div className="font-bold">{placementcoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${placementcoordinator.position}`,
                  }}
                ></div>
                <div> {placementcoordinator.branch}</div>
                <div> {placementcoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={placementcoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="team-container-sub-title">
        Student Activity Cordinators (2025 Batch){" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentActivityCoordinators2025.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover flex justify-around align-middle  align-item-center px-4 items-center ">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${activityCoordinator.position}`,
                  }}
                ></div>
                <div> {activityCoordinator.branch}</div>
                <div> {activityCoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={activityCoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title">
        Student Activity Cordinators (2026 Batch){" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentActivityCoordinators2026.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover flex justify-around align-middle  align-item-center px-4 items-center ">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${activityCoordinator.position}`,
                  }}
                ></div>
                <div> {activityCoordinator.branch}</div>
                <div> {activityCoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={activityCoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title">ASSOCIATE MEMBERS</h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentPlacementcordinators.map((associate, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${associate.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{associate.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>{associate.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: `${associate.position}` }}
              ></div>
              <div>Phone: {associate.phone}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
