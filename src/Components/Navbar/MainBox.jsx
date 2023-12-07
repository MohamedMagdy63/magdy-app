import React from 'react';
import  './MainBox.css';
const MainBox = () => {
    return (
        <>
        <div  className="container">
            <h1>Magdy Mohamed Ahmed </h1>
            <h3>Phone : +966566308451 </h3>
            <button className='MailBox'> <a href="mailto:magdia07@gmail.com">Contact via Email</a></button>
            <div className='description'>
            Dedicated to forging strategic alliances with progressive organizations committed to driving growth and innovation. Eager to leverage 27 years of unwavering commitment and expertise in overseeing and executing diverse civil construction projects within K.S.A. Demonstrated proficiency in navigating complex design criteria, spearheading field execution, and excelling in comprehensive project supervision and estimation.
            <br /><br />
            Equipped with a comprehensive skill set encompassing meticulous preparation of crucial documents such as Bill of Quantities and Scope work. Profoundly adept in orchestrating seamless internal and external herds capping initiatives, orchestrating intricate façade cladding projects, and overseeing the meticulous execution of external texture paint work.
            <br /><br />
            Seeking an environment that not only harnesses my technical acumen but also fosters continuous learning, allowing for the fusion of knowledge and experience for the mutual benefit of the organization and personal growth.
            </div>
            
        </div>
        <br /><br />
        <div className="aboutMe">
            <h1>About Me </h1>
            <div class="education">
            <ul>
                <li>
                <span class="title">High Diploma:</span>
                <span class="data">
                    <div>High Technical Institute</div>
                    <div>From  Mataria</div>
                    <div> Graduation Project Helwan Hospital</div>
                    <div>At year 1990</div>
                    <div>With grade Excellent (90%)</div>
                </span>
                </li>
            </ul>
            </div>
            <div class="personal-info">
            <ul>
                <li>
                <span class="title">Name:</span>
                <span class="data">Magdy Mohammed Eid</span>
                </li>
                <li>
                <span class="title">Date of Birth:</span>
                <span class="data">5th April 1968</span>
                </li>
                <li>
                <span class="title">Marital Status:</span>
                <span class="data">Married</span>
                </li>
                <li>
                <span class="title">Nationality:</span>
                <span class="data">Egyptian</span>
                </li>
                <li>
                <span class="title">Languages Known:</span>
                <span class="data">English & Arabic</span>
                </li>
                <li>
                <span class="title">Religion:</span>
                <span class="data">Islam</span>
                </li>
            </ul>
            </div>
            <div className="skills-container">
            {/* Individual skill sections */}
            <div className="skill-section">
                <h2>Teamwork Ability</h2>
                <p>
                Demonstrated capability to collaborate effectively within a team, fostering a harmonious and productive work environment. Accomplishments include successfully completing group projects and contributing positively to team objectives.
                </p>
            </div>

            <div className="skill-section">
                <h2>Leadership & Decision-Making</h2>
                <p>
                Proven leadership skills showcased by taking charge in critical situations and making informed decisions. Capable of guiding a team toward goals while ensuring efficient problem-solving and decision-making processes.
                </p>
            </div>

            {/* Repeat this structure for other skills */}
            <div className="work-experience-container">
                <h2>Work Experience</h2>
                
            </div>
            <div className="experience-details">
                    <h3>Senior Supervisor</h3>
                    <p>
                    <strong>Company:</strong> Al-luti w Tmdiuo & Construction
                    <br />
                    <strong>Location:</strong> Kingdom of Saudi Arabia
                    <br />
                    <strong>Project:</strong> AL Rajhi Bank HQ Fit Out Work
                    <br />
                    <strong>Project Description:</strong> Main Building with 1400 m² for 4 basement floors, Ground and 36 floors & 4 Cores
                    <br />
                    <strong>Our Scope:</strong> Finishing & Fit Out Work for BL, GF, Level 1 (Auditorium floor), Level 2 (Restaurant floor), Level 3 (Prayer hall Floor), Level 13 (Transfer floor), Level 26 (GYM floor), Level 35, 36 (VIP floor)
                    <br />
                    <strong>Value:</strong> 60 Million Riyals
                    <br />
                    <strong>Period:</strong> October 2017 - Present
                    </p>
                </div>
            <div className="experience-details">
                <h3>Senior Civil Supervisor</h3>
                <p>
                <strong>Company:</strong> Absul Puul Contracting
                <br />
                <strong>Location:</strong> Dammam, Aramco projects
                <br />
                <strong>Project:</strong> 4756 Al Shoail Residence Tahliyah Street Four-star hotel
                <br />
                <strong>Project Description:</strong> The project is a hotel consisting of 12 floors, including 2 basements, ground floor, Restaurant Area, and 8 Typical Floors
                <br />
                <strong>Scope of Work:</strong> 
                <ul>
                    <li>All Finishing work including Internal Work (screed, Epoxy, Mechanical Plaster, Tiles for walls and floors, Painting)</li>
                    <li>External work such as All Front Elevation, landscape, Hardscape Work, and coordination between all work</li>
                </ul>
                <strong>Project Value:</strong> 300 Million Riyals
                <br />
                <strong>Period:</strong> October 2016 - October 2017
                </p>
            </div>
            <div className="experience-details">
                <h3>Senior Civil Supervisor</h3>
                <p>
                <strong>Company:</strong> Absal Paul Contracting
                <br />
                <strong>Location:</strong> Dammam, Aramco projects
                <br />
                <strong>Project:</strong> Damac Tower - 7-Star Hotel Opposite King Dome Tower, Riyadh
                <br />
                <strong>Project Description:</strong> Fit-out works for Tower B, Paramount Hotel Apartments, and lift lobbies corridors from the 5th to the 34th floor. Scope of works includes design development from concept and procurement of high-quality finished items.
                <br />
                <strong>My work included:</strong> All interior finishes from the 25th floor to 30th, including screed, tiles for walls and floors, marble, gypsum board, kitchen installations, and all decorations.
                <br />
                <strong>Project Value:</strong> 500 Million Riyals
                <br />
                <strong>Period:</strong> October 2015 - October 2016
                </p>
            </div>
            <div className="experience-details">
                <h3>Senior Civil Supervisor</h3>
                <p>
                <strong>Company:</strong> Al-lati w Tmdiuo & Contracting
                <br />
                <strong>Job Title:</strong> Senior Civil Supervisor
                <br />
                <strong>Project:</strong> King Abdul-Aziz Center for National Dialogue
                <br />
                <strong>Project Description:</strong> The project comprises three towers, each with eight floors and three underground floors for parking and building services. It includes a conference hall, administrative offices in the center tower, and investment offices in the other towers with an oversized conference hall. Also, three levels of underground parking accommodating 480 cars.
                <br />
                <strong>My Tasks Included:</strong> External work involving all elevations spanning 13,000 sqm using Mechanical Riyadh Stone, as well as internal cladding and wall and floor work covering 17,000 sqm.
                <br />
                <strong>Value:</strong> 500 Million Riyals
                <br />
                <strong>Period:</strong> December 2011 - April 2013
                </p>
            </div>
            <div className="experience-details">
                <h3>Senior Civil Supervisor</h3>
                <p>
                <strong>Company:</strong> Al-lati w Tmdiuo & Contracting
                <br />
                <strong>Job Title:</strong> Senior Civil Supervisor
                <br />
                <strong>Project:</strong> Construction of Riyadh Hilton Hotel & Residence
                <br />
                <strong>Project Description:</strong> Construction of a fully furnished five-star hotel and full-service apartments located in Riyadh, the country's capital. It comprises a 20-story building with 645 guest rooms and suites, and a 14-story building with 221 full-service apartments. The project includes standard hotel amenities, underground parking, four restaurants (including a roof garden and cafeteria), a business center, health club with an indoor swimming pool, and a 1750-seat ballroom. The total built-up area is 220,000 square meters.
                <br />
                <strong>My Tasks Included:</strong> All external work, including cladding granite (40,000 sqm), and overseeing the recreation center.
                <br />
                <strong>Value:</strong> 2.00 Billion Riyals
                <br />
                <strong>Period:</strong> February 2010 - April 2013
                </p>
            </div>
            <div className="previous-roles-container">
                <h2>Previous Roles</h2>
                <ul>
                <li>
                    <strong>(1990-1991)</strong> Foreman at Bohayrat Company in Grand Mole (Cairo).
                </li>
                <li>
                    <strong>(1991-1994)</strong> Foreman at Salwa Company in Al-Maady tower (Cairo).
                </li>
                <li>
                    <strong>(1994-2000)</strong> Foreman at Manel1Shehata Company for maintenance and Construction of Hospital.
                </li>
                <li>
                    <strong>(2000-2005)</strong> General Foreman at Horiaty Company for Construction, Riyadh, Saudi Arabia.
                </li>
                <li>
                    <strong>(2005-2010)</strong> Executive In-Charge at Dream Stone Company (Cairo).
                </li>
                <li>
                    <strong>Foreman</strong> for work at El-Etreby Office for consultant.
                </li>
                </ul>
            </div>
            
            <div className="additional-experience-container">
            <h2>Additional Experience</h2>
            <ul>
                <li>Construction Work:
                <ul>
                    <li>Blockwork, plastering, screeding, etc.</li>
                </ul>
                </li>
                <li>Internal & External Finishing:
                <ul>
                    <li>Landscape and water feature work.</li>
                </ul>
                </li>
                <li>Cladding Work:
                <ul>
                    <li>Glass, granite, stone, marble, gypsum, and flooring work.</li>
                </ul>
                </li>
                <li>Quantities Calculation and Time Schedules.</li>
                <li>Reading Drawings.</li>
                <li>Surveying Apparatus Work.</li>
                <li>In-Charge Responsibilities:
                <ul>
                    <li>Overseeing all cladding works at the National Dialogue Center (internal & external).</li>
                </ul>
                </li>
                <li>Coordination Tasks:
                <ul>
                    <li>Facilitating coordination between cladding, aluminum, and glass works.</li>
                </ul>
                </li>
                <li>Material Management:
                <ul>
                    <li>Receiving all materials and preparing mock-ups.</li>
                </ul>
                </li>
                <li>Quality Control:
                <ul>
                    <li>Inspecting all materials before receiving them on-site.</li>
                </ul>
                </li>
            </ul>
            </div>
            {/* Include Footer */}
            <div className="footer">
                Copy rights to Eng: M.Magdy
            </div>
            </div>
            
        </div>
        </>
    );
}

export default MainBox;
