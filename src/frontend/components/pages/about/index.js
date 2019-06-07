import React from "react";
import "../../../styles/grid.css";
import "../../../styles/components/about.css";

const About = () => (
  <section component="about">
    <div className="about-container">
      <div className="content-section">
        <div className="intro">
          <div className="row">
            <div className="content-header col">
              <h1>Lane Breach.</h1>
              <div className="content-section">
                <a href="https://codeforsanfrancisco.org/projects/lane-breach/">
                  Lane Breach
                </a>{" "}
                is a volunteer driven
                <a href="https://codeforsanfrancisco.org/projects/lane-breach/">
                  {" "}
                  codeforsanfrancisco{" "}
                </a>
                project supported by{" "}
                <a href="https://www.codeforamerica.org/">codeforamerica</a>.
              </div>
            </div>
            <div className="col">
              <div id="header-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body-content">
          <div className="content-section brand-green">
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
                  <div className="content-header">Download our app</div>
                  <div className="content">
                    Encourage safety across all of our transit system users
                    whether it be bikes, cars, buses, pedestrians, trucks, or
                    any other mode of transit.
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content-section">
                  <a href="https://itunes.apple.com/us/app/lane-breach/id1447775781?mt=8">
                    <p className="center">Iphone</p>
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

          <div className="content-section brand-green">
            <div className="more-info">
              <div className="row">
                <div className="col">
                  <div className="content-header">More Information</div>
                  <div className="content">
                    Want to get involved in the project or provide feedback? As
                    an open source project we encourage community participation!
                  </div>
                </div>

                <div className="col">
                  <div className="row more-info-links">
                    <div className="col">
                      <a href="https://github.com/lanebreach">
                        <div>Github</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://codeforsanfrancisco.org/projects/lane-breach/">
                        <div>Weekly Hack Night</div>
                      </a>
                    </div>
                    <div className="col">
                      <a href="https://twitter.com/bikelanes_sf">
                        <div>Twitter</div>
                      </a>
                    </div>
                  </div>
                  <div className="content more-info-email">
                    Email us directly @{" "}
                    <a href="mailto:bikelanessf@gmail.com">
                      bikelanessf@gmail.com!
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

            <div className="row partner-links">
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
