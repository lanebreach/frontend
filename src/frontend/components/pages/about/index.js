import React from 'react';
import '../../../styles/grid.css';
import '../../../styles/components/about.css';
// import img from 'src/frontend/public/bicyclist.jpg';

const About = () => (
    <section component="about">
        <div className="about-container">
            <div className="intro row">
                <div className="content-header col">
                    <h1>
                        Lane Breach.
                    </h1>
                    <div className="content-section">
                        <a href="https://codeforsanfrancisco.org/projects/lane-breach/">Lane Breach</a> is a volunteer driven   
                        <a href="https://codeforsanfrancisco.org/projects/lane-breach/"> codeforsanfrancisco </a> 
                        project supported by <a href="https://www.codeforamerica.org/">codeforamerica</a>. 
                    </div>
                </div>
                <div className="col" id="header-img">

                </div>
            </div>
            <div className="body">
                <div className="body-content">
                    <div className="mission content-section" >
                        <div className="content-header">
                            <h1>Mission</h1>
                        </div>
                        <div className="content">
                        Our aim is to help bring the city of San Francisco closer to reaching its 
                        <a href="https://www.visionzerosf.org/"> Vision Zero</a> goal, 
                        which ensures all our transit users can enjoy safe and efficient mobility. 
                        We are doing so by augmenting the city’s 
                        <a href="https://data.sfgov.org/City-Infrastructure/Blocked-Bike-Lanes-and-Double-Parking/ihm3-5gmc"> existing 311 bike lane blocking dataset.</a>    
                        </div>

                    </div>

                    <div className="download">
                        <div className="row">
                            <div className="col">
                                <div className="content-section">
                                    <div className="content-header">
                                        Download our app
                                    </div>
                                    <div className="content">
                                        Encourage safety across all of our transit system users whether it be bikes, 
                                        cars, buses, pedestrians, trucks, or any other mode of transit.
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row content-section">
                                    Iphone
                                </div>
                            </div>
                            <div className="col">
                                <div className="row content-section">
                                    Android
                                </div>
                            </div>
                        </div>

                        <div className="content-section">
                            <div className="row">
                                <div className="col">
                                    Improved 311 report submission experience for bike lane users.
                                </div>
                                <div className="col">
                                    Make bike lane users and surrounding motorists SAFER during the submission process.
                                </div>
                                <div className="col">
                                    Add additional data about the type of bike lane obstruction.
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="more-info">
                        <div className="row">

                            <div className="content-section col">
                                <div className="content-header">
                                    More Information
                                </div>
                                <div className="content">
                                    Want to get involved in the project or provide feedback? 
                                    As an open source project we encourage community participation!
                                </div>
                            </div>

                            <div className="content-section col">
                                <div className="row">
                                    <div className="col">
                                        Github
                                    </div>
                                    <div className="col">
                                        Weekly Hack Night
                                    </div>
                                    <div className="col">
                                        Twitter
                                    </div>
                                </div>
                                <div className="content">
                                    Email us directly @ bikelanessf@gmail.com!
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="partners">
                        <div className="content-section">
                            <div className="content-header">
                                Our Partners
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="content-section">
                                    Code For America: SF Brigade
                                </div>
                            </div>
                            <div className="col">
                                <div className="content-section">
                                    <a href="https://twitter.com/EverySF311Bike">Every Blocked Bike Lane Report SF</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="content-section">
                                    <a href="https://twitter.com/bikelanes_sf">Cars out of bike lanes!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </section>
)

export { About }; 

