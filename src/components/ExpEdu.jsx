import React, { useEffect } from "react";
import AOS from "aos";
function ExpEdu() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration: 1s
  }, []);

  return (
    <main className="main">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Education & Experience</h2>
          <p></p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              {/* <h3 className="resume-title">Sumary</h3> */}

              {/* <div className="resume-item pb-0">
                <h4>Brandon Johnson</h4>
                <p>
                  <em>
                    Innovative and deadline-driven Graphic Designer with 3+
                    years of experience designing and developing user-centered
                    digital/print marketing material from initial concept to
                    final, polished deliverable.
                  </em>
                </p>
                <ul>
                  <li>Portland par 127,Orlando, FL</li>
                  <li>(123) 456-7891</li>
                  <li>alice.barkley@example.com</li>
                </ul>
              </div> */}

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Technology</h4>
                <h5>2020-2024</h5>
                <h5>CPI - 8.31</h5>
                <p>
                  <em>Indian Institute of Technology (IIT), Gandhinagar</em>{" "}
                </p>
              </div>

              <div className="resume-item">
                <h4>HSC CBSE</h4>
                <h5>2020</h5>
                <h5>CPI-95.6%</h5>
                <p>
                  <em>LBS Convent School, Kota</em>
                </p>
              </div>

              <div className="resume-item">
                <h4>SSC CBSE</h4>
                <h5>2018</h5>
                <h5>CPI-93.6%</h5>
                <p>
                  <em>Jyoti Sr. Sec. School, Rewa</em>
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Decision Analytics Associate</h4>
                <h5>July 2024 - Present</h5>
                <p>
                  <em>ZS Associates, Gurgaon </em>
                </p>
                <ul>
                  <li>
                    Drove end-to-end commercial analytics for{" "}
                    <strong>
                      Pfizer’s COVID-19 vaccine portfolio, leveraging
                      descriptive, diagnostic, and prescriptive analyses
                    </strong>{" "}
                    to inform strategic decisions across sales, marketing and
                    contracting functions.
                  </li>
                  <li>
                    Developed{" "}
                    <strong>
                      Standard Data Layers (SDLs) for patient-level and drug
                      distribution data,
                    </strong>{" "}
                    cutting delivery timelines by 70%.
                  </li>
                  <li>
                    Created a{" "}
                    <strong>one-click automated reporting solution </strong> for
                    public data sources using Dataiku DSS and ODBC, enhancing
                    data accessibility and usability.
                  </li>
                  <li>
                    Delivered actionable insights to cross-functional
                    stakeholders and presented key financial metrics to support
                    quarterly business reviews.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Trainee Market Analyst</h4>
                <h5>May 2023- July 2023</h5>
                <p>
                  <em>Axxela Research & Analytics, Bangalore</em>
                </p>
                <ul>
                  <li>
                    Proficiently executed{" "}
                    <strong>SOFR 3-month contracts,</strong> a critical
                    benchmark interest rate for US dollar-denominated
                    derivatives, demonstrating a deep understanding of financial
                    markets.
                  </li>
                  <li>
                    Applied technical analysis and absorbed vast amounts of
                    data, market events, and case studies to discern market
                    sentiment, driving successful trades in the International
                    Capital Markets.
                  </li>
                  <li>
                    ◦ Demonstrated strong trading acumen by achieving the{" "}
                    <strong>2nd highest P&L performance</strong> among 70+
                    interns across Axxela’s Bengaluru, Mumbai, and Kolkata
                    offices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExpEdu;
