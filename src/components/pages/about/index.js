import React from 'react';
import '../../../styles/grid.css';
import '../../../styles/components/about.css';

const About = () => (
    <section component="about">
        <div className="about-container">
            <div className="intro">
                <div className="content-header">
                    <h1>
                        Lane Breach.
                    </h1>
                </div>
                <div className="content-section tagline">
                        <a href="https://codeforsanfrancisco.org/projects/lane-breach/">Lane Breach</a> is a volunteer driven   
                        <a href="https://codeforsanfrancisco.org/projects/lane-breach/"> codeforsanfrancisco </a> 
                        project supported by <a href="https://www.codeforamerica.org/">codeforamerica</a>. 
                </div>

                <div className="content-section">
                    Our aim is to help bring the city of San Francisco closer to reaching its <a href="https://www.visionzerosf.org/">Vision Zero</a> goal, 
                    which ensures all our transit users can enjoy safe and efficient mobility. 
                    We are doing so by augmenting the city’s <a href="https://data.sfgov.org/City-Infrastructure/Blocked-Bike-Lanes-and-Double-Parking/ihm3-5gmc">existing 311 bike lane blocking dataset.</a>
                </div>

            </div>
            <div className="body">
                <div className="body-content">

                    <div className="row content-section">
                        <div className="content-header col">
                            An improved 311 report submission experience for bike lane users.
                        </div>

                        <div className="content-header col">
                            Help keep bike lane users and surrounding motorists SAFER during the submission process.
                        </div>

                        <div className="content-header col">
                            Add additional data about the type of bike lane obstruction.
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            Reduce submission time greatly end encourage more submissions.
                        </div>
                        <div >
                            <a href="https://www.youtube.com/watch?v=xAnYuHkcbxw">Current process (2 minutes)</a>
                        </div>
                        <div >
                            <a href="https://itunes.apple.com/us/app/lane-breach/id1447775781">New process (15 sec)</a>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            An improved 311 data <a href="https://www.lanebreach.org/">visualization experience</a>
                        </div>
                        <div >
                            <a href="https://data.sfgov.org/City-Infrastructure/Blocked-Bike-Lanes-and-Double-Parking/ihm3-5gmc">Current tool</a>
                        </div>
                        <div >
                            <a href="https://www.lanebreach.org/">New tool</a>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            We hope our work: 
                        </div>
                        <div className="row">
                            <div className="col">
                                Encourages safety across all of our transit system users whether it be bikes, cars, buses, 
                                pedestrians, trucks, or any other mode of transit.
                            </div>
                            <div className="col">
                                Enables all stakeholders whether it be elected leaders, city planners, 
                                bicycle advocacy groups, private companies, or any other interested party 
                                to make more informed decisions for a safer transit system.
                            </div>
                            <div className="col">
                                Promotes learning, discussion, and action.
                            </div>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            Why We Do This
                        </div>
                        <div className="col">
                            <a href="https://medium.com/@ptraughber/a-list-of-people-killed-while-riding-a-bicycle-in-san-francisco-1456bbd017d9">
                                A list of people killed while riding a bicycle in San Francisco.
                            </a>
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            More Information / Get involved
                        </div>
                        <div className="col">
                            <a href="https://github.com/lanebreach">Github</a>
                        </div>
                        <div className="col">
                            <a href="https://codeforsanfrancisco.org/">Weekly Hack Night</a>
                        </div>
                        <div className="col">
                            <a href="https://twitter.com/bikelanes_sf">Twitter</a>
                        </div>
                        <div className="col">
                            Email us directly @ bikelanessf@gmail.com!
                        </div>
                    </div>

                    <div className="content-section">
                        <div className="content-header">
                            Our Partners
                        </div>
                        <div className="col">
                            Code For America: SF Brigade
                        </div>
                        <div className="col">
                            <a href="https://twitter.com/EverySF311Bike">Every Blocked Bike Lane Report SF</a>
                        </div>
                        <div className="col">
                            <a href="https://twitter.com/bikelanes_sf">Cars out of bike lanes!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
)

export { About }; 

