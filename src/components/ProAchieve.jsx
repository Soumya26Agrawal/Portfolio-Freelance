import React, { useEffect } from "react";
import AOS from "aos";
function ProAchieve() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animation duration: 1s
  }, []);

  return (
    <main className="main">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Projects & Achievements</h2>
          <p></p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Projects</h3>
              <div className="resume-item">
                <h4>
                  Intraday Trading Strategy Development using MACD & Renko
                </h4>
                <h5>January 2023</h5>
                <p>
                  <em>
                    <a
                      href="https://github.com/Sh1khar7/Backtesting_MACD-RENKO"
                      target="_blank"
                    >
                      Project Link
                    </a>
                  </em>
                </p>
                <ul>
                  <li>
                    ◦ Developed and executed a cutting-edge intraday trading
                    strategy leveraging{" "}
                    <strong>MACD and Renko indicators</strong>, with a focus on
                    precision and profitability. Easily acquired vital stock
                    data through the Alpha Vantage API using the{" "}
                    <strong> alpha_vantage Python module.</strong>
                  </li>
                  <li>
                    Conducted a comprehensive assessment of the strategy’s
                    overall performance and meticulously analyzed individual
                    stock KPIs, ensuring optimal returns and risk management.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Credit Score Classification</h4>
                <h5>May 2022</h5>
                <p>
                  <em>
                    <a
                      href="https://github.com/Sh1khar7/Credit-Score-Classification"
                      target="_blank"
                    >
                      Project Link
                    </a>
                  </em>
                </p>
                <ul>
                  <li>
                    Leveraged a comprehensive dataset containing vital
                    credit-related information obtained from a financial
                    institution via Kaggle. In-depth analysis of data sets
                    features, extracting valuable insights to inform{" "}
                    <strong> data-driven decision making.</strong>
                  </li>
                  <li>
                    Utilized <strong>supervised ML techniques</strong> to
                    construct a robust credit score classification model. This
                    model effectively categorized individuals into distinct
                    credit score brackets, automating and streamlining a
                    previously labor-intensive process.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Achievements</h3>
              <div className="resume-item">
                <h4 style={{ lineHeight: 1.6 }}>
                  Secured first place in the{" "}
                  <strong> New to ZS - Case Study Competition </strong>
                  conducted for the batch of 2024
                </h4>
              </div>
              <div className="resume-item">
                <h4 style={{ lineHeight: 1.6 }}>
                  Selected for the{" "}
                  <strong>
                    National Boot Camp, Innovation Driven Entrepreneurship (IDE)
                  </strong>{" "}
                  organized by the{" "}
                  <strong>
                    IIT Gandhinagar Innovation and Entrepreneurship Center
                    (IIEC)
                  </strong>
                </h4>
              </div>
              <div className="resume-item">
                <h4 style={{ lineHeight: 1.6 }}>
                  Recipient of the <strong>Dean’s List Award</strong> for
                  academic excellence in the <strong> final semester</strong>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProAchieve;
