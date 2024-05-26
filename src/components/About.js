import React from "react";
import "../stylesheets/About.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <div className="message">
            <h2 className="ml-380px">From Director's Desk</h2>
            <div className="row">
              <div
                className="col-lg-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <div className="member-img">
                    <img
                      className="w-[250px] h-auto"
                      src="assets/img/tnp_team/Director.webp"
                      alt="Director's Photo"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Prof. S. Sundar</h4>
                    <span>Director NIT Mizoram</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-6">
                <p style={{ textAlign: "justify" }}>
                  <i className="fa-solid fa-quote-left"></i> Greetings from the
                  Training & Placement (T&P) Office, National Institute of
                  Technology Mizoram (NIT Mizoram), an Institution of National
                  Importance under the Ministry of Education, Govt. of India!
                  Besides catering to other logistics, the T&P Office provides
                  infrastructural facilities to conduct group discussions,
                  tests, and interviews. The office makes every effort each day
                  to bridge the gap between the dreams and capabilities of our
                  students through training programs to enhance the soft skills
                  and overall personality of students in association with
                  industry. NIT Mizoram began its journey in 2009 to achieve
                  global renown in research and education. Since 2009, the
                  Institute has progressed rapidly. Presently, there are about
                  850 students studying in various disciplines of Engineering,
                  Sciences, Humanities and Social Sciences. The Institute is
                  working untiringly to impart quality education that keeps pace
                  with the latest advances in research and development
                  activities.At present NIT Mizoram is situated in a temporary
                  campus at Aizawl. With the support of the state govt, we are
                  expecting the completion of the partially completed permanent
                  campus at Lengpui, Mizoram within the next two years with best
                  of the facilities for the excellent academic ambience.{" "}
                </p>
                <p>
                  Let's make this academic year memorable. Best Wishes...{" "}
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
            </div>

            <h2 style={{ paddingTop: "35px", marginRight: "80px" }}>
              MESSAGE FROM TPO
            </h2>
            <div className="row">
              <div className="col-lg-9 col-md-6">
                <p style={{ textAlign: "justify" }}>
                  <i className="fa-solid fa-quote-left"></i> Dear Students,
                  Welcome to the new academic year at NIT Mizoram. Our institute
                  is committed to fostering innovation and learning. We're proud
                  of our strong academic programs and our students' impressive
                  academic achievements. Our placement cell is dedicated to
                  ensuring your success beyond the classroom. As we move
                  forward, we'll continue striving for excellence.The T&P
                  Office, NIT Mizoram, facilitates the placement process of
                  students passing out from the Institute, besides collaborating
                  with leading organizations and institutes to set up student
                  internship and training programs. The office liaises with
                  various industrial establishments, corporate houses, etc.,
                  which conduct campus interviews and select graduate and
                  post-graduate students from all disciplines. I am confident
                  that our students will prove themselves and contribute
                  immensely toward pursuing the organization’s ambitions with a
                  ray of hope that our indigenous and global industries will
                  offer internships and jobs to our students at our campus.
                  Further, this relationship will go beyond other engagements
                  and mutual benefits. I sincerely appreciate our industry
                  partners who have recognized the depth of our rich and diverse
                  talent pool and accorded valuable opportunities. More
                  information about the institute and various courses offered to
                  the students is available in the placement brochure. Please
                  feel free to contact the T&P Office, NIT Mizoram, in case of
                  any queries at tnp@nitmz.ac.in. I look forward to a fruitful
                  and mutually beneficial relationship with your esteemed
                  organization.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="member">
                  <div
                    className="member-img"
                    style={{ border: "2px solid #ccc", padding: "10px" }}
                  >
                    <img
                      className="w-[250px] h-auto"
                      src="assets/img/tnp_team/image1.webp"
                      alt="TPO'S PHOTO"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Sukanta Roy</h4>
                    <span>
                      Faculty In-charge (FIC), Training and Placement Office
                      Chairman
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
