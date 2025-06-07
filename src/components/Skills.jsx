// import React, { useEffect } from "react";
// import AOS from "aos";
// function Skills() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // animation duration: 1s
//   }, []);

//   return (
//     <main className="main">
//       <section id="skills" className="skills section light-background">
//         <div className="container section-title" data-aos="fade-up">
//           <h2>Skills</h2>
//           <p></p>
//         </div>

//         <div className="container" data-aos="fade-up" data-aos-delay="100">
//           <div className="row skills-content skills-animation">
//             <div className="col-lg-6">
//               <div className="progress">
//                 <h3 className="">Languages</h3>
//               </div>
//               <div className="progress">
//                 <span className="skill">
//                   <span className="">HTML</span>
//                 </span>
//                 {/* <div className="progress-bar-wrap">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="100"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//               </div>

//               <div className="progress">
//                 <span className="skill">
//                   <span>CSS</span>
//                 </span>
//                 {/* <div className="progress-bar-wrap">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="90"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//               </div>

//               <div className="progress">
//                 <span className="skill">
//                   <span>JavaScript</span>
//                 </span>
//                 {/* <div className="progress-bar-wrap">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="75"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//               </div>
//               <div className="progress">
//                 <span className="skill">
//                   <span>SQL</span>
//                 </span>
//                 {/* <div className="progress-bar-wrap">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="75"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//               </div>
//             </div>

//             <div className="col-lg-6">
//               <div className="progress">
//                 <h3>Tools</h3>
//               </div>
//               {[
//                 "Advanced Excel",
//                 "Tableau",
//                 "ETL",
//                 "Dataiku DSS",
//                 "MS PowerPoint",
//                 "VS Code",
//                 "Google Colab",
//                 "GitHub",
//                 "Autodesk Inventor",
//                 "MATLAB",
//               ].map((skill, index) => {
//                 return (
//                   <div className="progress" key={index}>
//                     <span className="skill">
//                       <span>{skill}</span>
//                     </span>
//                     {/* <div className="progress-bar-wrap">
//                   <div
//                     className="progress-bar"
//                     role="progressbar"
//                     aria-valuenow="80"
//                     aria-valuemin="0"
//                     aria-valuemax="100"
//                   ></div>
//                 </div> */}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Skills;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2
            className=" mb-3"
            style={{ fontWeight: "bold", color: "#2c3e50" }}
          >
            Skills
          </h2>
          <p className="" style={{ color: "#555", fontSize: "1rem" }}>
            Here's a quick glance at the languages and tools I work with.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="progress mb-4">
                <h3 style={{ fontSize: "1.4rem", color: "#34495e" }}>
                  Languages
                </h3>
              </div>

              {["HTML", "CSS", "JavaScript", "SQL"].map((lang, index) => (
                <div
                  className="progress p-2 rounded mb-2 shadow-sm"
                  key={index}
                  style={{
                    background: "#f9f9f9",
                    borderLeft: "4px solid #3498db",
                  }}
                >
                  <span
                    className="skill"
                    style={{ fontSize: "1.1rem", fontWeight: "500" }}
                  >
                    {lang}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="progress mb-4">
                <h3 style={{ fontSize: "1.4rem", color: "#34495e" }}>Tools</h3>
              </div>

              {[
                "Advanced Excel",
                "Tableau",
                "ETL",
                "Dataiku DSS",
                "MS PowerPoint",
                "VS Code",
                "Google Colab",
                "GitHub",
                "Autodesk Inventor",
                "MATLAB",
              ].map((skill, index) => (
                <div
                  className="progress p-2 rounded mb-2 shadow-sm"
                  key={index}
                  style={{
                    background: "#f9f9f9",
                    borderLeft: "4px solid #e67e22",
                  }}
                >
                  <span
                    className="skill"
                    style={{ fontSize: "1.1rem", fontWeight: "500" }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
