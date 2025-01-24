import React from "react";
import "./Resume.css";
const Resume = () => {
  return(
    <div className="container">
      <h1>Aidan Van Gessel</h1>
      <p><strong>Data Engineer at Versaware Technologies | Backend Software</strong></p>
      <p>Oxford, Michigan, United States</p>
      <div className="section1">
          <h2>Contact</h2>
          <p>Email: aidy.vg@gmail.com</p>
          <p>Phone: 248-462-8423</p>
          <p>LinkedIn: https://www.linkedin.com/in/aidan-van-gessel-19ba521b5/</p>
          <p>GitHub: https://github.com/bigdog765</p>
      </div>

      <div className="section">
          <h2>About</h2>
          <p>-2023 Graduate of Computer Science at Wayne State University. Now, working as Head Data Engineer at VersaWare, a nutritional intelligence-based startup company.</p>
          <p>-Proficient comprehension of backend frameworks and data pipeline architecture, including emerging technologies like RAG-based data, vector databases, and machine learning principles.</p>
          <p>-Adept in C++, Java, JavaScript, Python, SQL, and React.</p>
      </div>

      <div className="section">
          <h2>Experience</h2>
          <ul>
              <li><strong>VersaWare Technologies - Lead Data Engineer (Sep 2023 - Present)</strong>
                <p>Established mobile application and embedded device connections to Firebase Cloud infrastructure. Handled sever side logic to accept HTTP requests, database queries and API gateways. Managed the structure of the database schema and ensure data is being inserted, updated, deleted and transferred when needed. Incorporated emerging AI technologies into the backend system including RAG based models and vectorized searching and classNameification.</p></li>
              <li><strong>VersaWare Technologies - Data Engineer Intern (Jun 2022 - Sep 2023)</strong>
                <p>Established the foundation of VersaWare's backend database through Firebase. Organized and collected necessary cloud data from hardware devices through technologies including the Google Cloud Platform, Javascript, SQL and REST APIs.</p></li>
              <li><strong>FedEx Ground - Package Handler (Mar 2021 - Sep 2021)</strong></li>
              <li><strong>Dairy Queen - Crew Member (Apr 2020 - Apr 2021)</strong></li>
          </ul>
      </div>

      <div className="section">
          <h2>Education</h2>
          <p>Wayne State University - Bachelor of Science in Computer Science (Aug 2019 - Aug 2023)</p>
          <p>Activities: Society of Computer Developers, Club Tennis, Chess Club</p>
      </div>

      <div className="section">
          <h2>Projects</h2>
          <ul>
              <li><strong>Google Maps Digital Coupon Finder</strong> - Built for the Google Photorealistic 3D Maps Challenge.</li>
              <li><strong>WordStack</strong> - Reddit-based interactive word game developed for the Reddit Games and Puzzles Hackathon.</li>
          </ul>
      </div>

      <div className="section">
          <h2>Skills</h2>
          <p>Vector Databases, NoSQL, Startups, Leadership, Integration, Data Analysis, AI, C++, Java, React, Javascript, Typescript, Python, SQL, Machine Learning, C#</p>
      </div>

      <div className="section">
          <h2>Honors & Awards</h2>
          <p>Dean's List (Winter & Fall 2021, Winter & Fall 2022)</p>
      </div>

      <div className="section">
          <h2>Organizations</h2>
          <p>Society of Computer Developers - Member (Sep 2021 - Aug 2023)</p>
      </div>
    </div>
  );
};
  
  export default Resume;