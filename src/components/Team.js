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
      image_name: "dr_vijay2.png",
    },
  ];

  const studentCoordinators = [
    {
      name: "Nitin Mishra",
      position: "Team Lead, Coordinator",
      phone: "+91-8271367165",
      image_name: "nishant_nitin_mishra.png",
    },
    {
      name: "Mukul Pathak",
      position: "Coordinator, CE",
      phone: "Coordinator, CE",
      image_name: "mukul_pathak.png",
    },
    {
      name: "Abhishek",
      position: "Coordinator, CSE",
      phone: "+91-9264270247",
      image_name: "avishek_gope.png",
    },
    {
      name: "Ayush Raj",
      position: "Coordinator, ECE",
      phone: "+91-7254905694",
      image_name: "ayush_raj.png",
    },
    {
      name: "Nihal Kumar",
      position: "Coordinator, EEE",
      phone: "+91-7379082567",
      image_name: "nihal_kumar.png",
    },
    {
      name: "Palli Chanikya",
      position: "Coordinator, ME",
      phone: "+91-8520934874",
      image_name: "chanikya.png",
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

  const associateMembers = [
    {
      name: "Rahul Kumar Prajapati",
      position: "3rd Year, CE",
      phone: "+91-6009926880",
      image_name: "rahul_prajapati.png",
    },
    {
      name: "Siddharth Bhatt",
      position: "3rd Year, CSE",
      phone: "+91-8104399697",
      image_name: "siddharth_bhatt.png",
    },
    {
      name: "Sanjeevni Joshi",
      position: "3rd Year, ECE",
      phone: "+91- 8414069740",
      image_name: "sanjeevani_joshi.png",
    },
    {
      name: "Girish Chawda",
      position: "3rd Year, EE",
      phone: "+91-6260882502",
      image_name: "girish_chawda.png",
    },
    {
      name: "Vikash Kumar",
      position: "3rd Year, ME",
      phone: "+91-9508279514",
      image_name: "vikash_kumar.png",
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
              {/* <div>Email: {member.email}</div> */}
            </div>
          </div>
        ))}
      </div>
      <h4 className="team-container-sub-title">
        CORE TEAM STUDENT COORDINATORS
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentCoordinators.map((coordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${coordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{coordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>{coordinator.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: `${coordinator.position}` }}
              ></div>
              <div>Phone: {coordinator.phone}</div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="team-container-sub-title">EXECUTIVE MEMBERS</h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {executiveMembers.map((executive, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${executive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{executive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>{executive.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: `${executive.position}` }}
              ></div>
              <div>Phone: {executive.phone}</div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title">ASSOCIATE MEMBERS</h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {associateMembers.map((associate, index) => (
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
