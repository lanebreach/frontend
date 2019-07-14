import React from "react";
import "../../../styles/grid.css";
import "../../../styles/components/about.css";
// Static Images
const headerImg = require("../../../public/images/lanebreach11.jpg");
const appStoreImg = require("../../../public/images/downloadOnAppStore.png");
const githubIcon = require("../../../public/images/github_icon.png");
const c4sfIcon = require("../../../public/images/c4sf_icon.jpeg");
const twitterIcon = require("../../../public/images/twitter_icon.png");
const emailIcon = require("../../../public/images/bike_email_icon.png");

const About = () => (
  <section component="about">
    <div className="about-container">
      <div className="content-section intro-container">
        <div className="intro">
          <div className="row">
            <div className="content-header col">
              <h1>Lane Breach</h1>
              <div className="content-section">
                Lane Breach is a volunteer-driven Code for San Francisco project
                promoting the just collection and analysis of bike data.
              </div>
            </div>
            <div className="col right" id="intro-img-col">
              <img id="intro-img" src={headerImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body-content">
          <div className="content-section brand-green bold-text">
            <div className="mission">
              <div className="content-header">
                <h1>Mission</h1>
              </div>
              <div className="content">
                Our aim is to help bring the city of San Francisco closer to
                reaching its
                <a href="https://www.visionzerosf.org/"> Vision Zero</a> goal,
                which ensures all our transit users can enjoy safe and efficient
                mobility. We are doing so by augmenting the city’s
                <a href="https://data.sfgov.org/City-Infrastructure/Blocked-Bike-Lanes-and-Double-Parking/ihm3-5gmc">
                  {" "}
                  existing 311 bike lane blocking dataset.
                </a>
              </div>
            </div>
          </div>

          <div className="download content-section">
            <div className="row">
              <div className="col">
                <div className="content-section">
                  <div className="content-header">Get involved!</div>
                  <div className="content">
                    Help build a more equitable solution and stay safe wile
                    doing it! Our iOS app was hand built for bike commuters in
                    SF. Data you help collect still goes to the city - along
                    with some information about what categories of blockages are
                    happening, and what kind of lanes are being blocked.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-section center">
                  <a href="https://itunes.apple.com/us/app/lane-breach/id1447775781?mt=8">
                    <img
                      className="center"
                      id="app-store-img"
                      src={appStoreImg}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="row download-info">
                <div className="col">
                  Improved 311 report submission experience for bike lane users.
                </div>
                <div className="col">
                  Make bike lane users and surrounding motorists SAFER during
                  the submission process.
                </div>
                <div className="col">
                  Add additional data about the type of bike lane obstruction.
                </div>
              </div>
            </div>
          </div>

          <div className="content-section brand-green bold-text">
            <div className="more-info">
              <div className="row">
                <div className="col">
                  <div className="content-header">More Information</div>
                  <div className="content">
                    Want to get involved in the project? Are we missing
                    something big? As an open source project we depend on
                    community participation!
                  </div>
                </div>
                <div className="col">
                  <div className="row more-info-links">
                    <div className="content more-info-tile">
                      <a href="https://github.com/lanebreach">
                        <img
                          src={githubIcon}
                          alt="githubIcon"
                          width="80"
                          height="80px;"
                        />
                        <p>Github</p>
                      </a>
                    </div>
                    <div className="content more-info-tile">
                      <a href="https://codeforsanfrancisco.org/projects/lane-breach/">
                        <img
                          src={c4sfIcon}
                          alt="code for sf project: lanebreach"
                          width="80"
                          height="80px"
                        />
                        <p> Weekly Hack Night</p>
                      </a>
                    </div>
                    <div className="content more-info-tile">
                      <a href="https://twitter.com/bikelanes_sf">
                        <img
                          src={twitterIcon}
                          alt="twitter: @bikelanes_sf"
                          width="80"
                          height="80px"
                        />
                        <p>Twitter</p>
                      </a>
                    </div>
                  </div>
                  <div className="content more-info-tile">
                    <a href="mailto:bikelanessf@gmail.com">
                      <img
                        src={emailIcon}
                        alt="email at bikelanessf@gmail.com"
                        width="80"
                        height="80px"
                      />
                      <p>bikelanessf@gmail.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="partners content-section">
            <div className="content-section">
              <div className="content-header">Our Partners</div>
            </div>

            <div className="row partner-links bold-text">
              <div className="col">
                <div className="content-section">
                  <a href="https://brigade.codeforamerica.org/brigades/Code-for-San-Francisco/">
                    <div className="partner-item">
                      Code For America: SF Brigade
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="content-section ">
                  <a href="https://twitter.com/EverySF311Bike">
                    <div className="partner-item">
                      Every Blocked Bike Lane Report SF
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="content-section ">
                  <a href="https://twitter.com/bikelanes_sf">
                    <div className="partner-item">Cars out of bike lanes!</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { About };
