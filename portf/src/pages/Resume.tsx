import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="container">
      <h1>Aidan Van Gessel</h1>
      <p>
        <strong>Data Engineer @ Versaware Technologies | Backend Software</strong>
      </p>
      <p>Oxford, Michigan</p>

      <div className="section contact">
        <h2>Contact</h2>
        <p>Email: aidy.vg@gmail.com</p>
        <p>Phone: 248-462-8423</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/aidan-van-gessel-19ba521b5/">
            linkedin.com/in/aidan-van-gessel-19ba521b5
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/bigdog765">github.com/bigdog765</a>
        </p>
      </div>

      <div className="section about">
        <h2>About</h2>
        <ul>
          <li>
            2023 Graduate of Computer Science at Wayne State University. Now working as
            Head Data Engineer at Versaware, a nutritional intelligence-based startup.
          </li>
          <li>
            Proficient in backend frameworks and data pipeline architecture, including
            emerging technologies like RAG-based data, vector databases, and machine learning
            principles.
          </li>
          <li>
            Hands-on experience with the Qt for MCU developer environment, organizing the data
            architecture of an embedded device from the low-level up to the cloud.
          </li>
          <li>
            Extensive knowledge of Javascript/Typescript, Express, Python, LangChain, GCP, Firebase,
            and NoSQL along with vector databases.
          </li>
        </ul>
      </div>

      <div className="section experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>
              Versaware Technologies - Lead Data Engineer (Sep 2023 - Present)
            </strong>
            <p>
              <em>Southfield, MI</em>
            </p>
            <p>
              Established mobile application and embedded device connections to Firebase Cloud
              infrastructure. Handled server-side logic to accept HTTP requests, database queries,
              and API gateways. Managed the database schema to ensure data is inserted, updated,
              deleted, and transferred when needed. Incorporated emerging AI technologies including
              RAG-based models and vectorized searching and classification. <br></br>Processed food
              nutritional data from the USDA database by sanitizing and structuring it for integration
              into our proprietary database. Developed an AI-driven recipe generation tool by
              leveraging accurate nutritional data and extensive software testing.
            </p>
          </li>
          <li>
            <strong>
              Versaware Technologies - Database Engineer Intern (Jun 2022 - Sep 2023)
            </strong>
            <p>
              <em>Southfield, MI</em>
            </p>
            <p>
              Established the foundation of Versaware's backend database through Firebase.
              Organized and collected necessary cloud data from hardware devices using the Google Cloud
              Platform, Javascript, SQL, and REST APIs.
            </p>
          </li>
          <li>
            <strong>FedEx Ground - Package Handler (Mar 2021 - Sep 2021)</strong>
            <p>
              <em>Lake Orion, MI</em>
            </p>
            <p>Loaded and unloaded packages while maintaining safety standards.</p>
          </li>
          <li>
            <strong>Dairy Queen - Crew Member (Apr 2020 - Apr 2021)</strong>
          </li>
        </ul>
      </div>

      <div className="section education">
        <h2>Education</h2>
        <p>
          <strong>Wayne State University</strong> - Bachelor of Science in Computer Science (Aug
          2019 - Aug 2023)
        </p>
        <p>
          <em>Detroit, MI | GPA: 3.76</em>
        </p>
        <p>
          Activities: Society of Computer Developers, Club Tennis, Chess Club, Hackathons
        </p>
      </div>

      <div className="section skills">
        <h2>Skills</h2>
        <p>
          Javascript/Typescript, Express, Python, LangChain, GCP, Vector Databases, NoSQL, Startups,
          Leadership, Integration, Data Analysis, C++, C#, C, WebGL, Unity, Blender, Vulkan
        </p>
      </div>

      <div className="section honors">
        <h2>Honors &amp; Awards</h2>
        <p>
          Dean's List (Winter &amp; Fall 2021, Winter &amp; Fall 2022, Winter 2023) - Wayne State
          Engineering
        </p>
      </div>

      <div className="section organizations">
        <h2>Organizations</h2>
        <p>
          <strong>Society of Computer Developers</strong> - Member (Sep 2021 - Aug 2023)
        </p>
        <p>
          Participated in hackathons to enhance coding skills, attended meetings to learn new coding
          frameworks, and engaged in seminars on emerging technologies.
        </p>
        <p>
          <strong>Oakland Church</strong> - Volunteering (Rochester, MI)
        </p>
        <p>
          Assisted in distributing, transporting, and organizing food, clothing, and water for
          individuals in need on the streets of Detroit through the Bread of Life group.
        </p>
      </div>
    </div>
  );
};

export default Resume;
