import React from 'react';

export default function Resume() {
  return (
    <>
        <section className="header">
            <h1>Anuj Naresh Chetwani</h1>
            <p>
                Lansdale, PA
                &bull;
                <a href="mailto:anujchetwani@gmail.com">anujchetwani@gmail.com</a>
                &bull;
                +1 919-931-2129
            </p>
        </section>    
        <section className="education">
            <h2>Education</h2>
            <div className="item">
                <div className="item_heading">
                    <div className="info">
                        <h3>North Carolina State University</h3>
                        <p>Master of Science in Electrical Engineering</p>
                    </div>

                    <div className="details">
                        <div className="location">Raleigh, NC</div>
                        <div className="dates">Aug 2022 - May 2024</div>
                    </div>                                
                </div>
            </div>
        </section>


        <section className="experience">
            <h2>Experience</h2>
                <div className="item">
                    <div className="item_heading">
                        <div className="info">
                            <h3>Colorcon Inc, Software Engineer </h3>
                        </div>

                        <div className="details">
                            <div className="location">Harleysville, PA</div>
                            <div className="dates">May 2024 - Present</div>
                        </div>
                </div>
                </div>
            <ul>
                <li>Integrated observability using OpenTelemetry to monitor traces and logs from a Python based
                    flask/fastAPI web application and front-end session replay, reducing API issue detection time by
                    nearly 33%.</li>
                <li>Migrating REST APIs serving 30 user requests/minute from ADF(deprecated Oracle tool) to FastAPI
                    (Python) for 16 web applications estimating an improvement of development time by 50% and $40K
                    annually.</li>
            </ul>
        </section>

        <section className="skills">
            <h2>Skills &amp; Activities</h2>
        </section>
        <section className="projects">
            <h2>Projects &amp; Activities</h2>
        </section>
        <section className="certifications">
            <h2>Certifications</h2>
        </section>

    </>
  );
}
