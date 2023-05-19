import React from 'react'
import './services.css'
import {RxDotFilled} from 'react-icons/rx'

const Services = () => {
  return (
    <section id='services'>
      <h5>Companies I have worked for</h5>
      <h2>Professional Experience</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Techbulls Softtech</h3>
            <small>Sept 2022 - Present</small>
          </div>

          <ul className="service_list">
            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Part of BillDesk's Autopay Platform team, building event-driven services responsible for fetching and generating invoice for specific merchants, automating payments with mandates, refunding in-case of multiple payments and notifying the consumers about their transactions with email and Gupshup messaging service.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Implemented RESTful APIs maintaining security measures, and collaborated with partner teams to integrate APIs for payment.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Implemented Refund Service, debugged problems & fixed bugs in various environment like QA, UAT & PROD.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Implemented Swagger API across all services.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Analysed Vulnerability Assessment and Penetration test (VAPT) and performance test results. Based on which enriched and optimised the code which enhanced API security.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Managed a team of 3 developers, providing guidance and support in their tasks and ensuring timely delivery of the project.</p>
            </li>
          </ul>
        </article>
        {/* END OF Techbulls */}

        <article className="service">
          <div className="service_head">
            <h3>Edubrite Systems</h3>
            <small>Jul 2021 - Aug 2022</small>
          </div>

          <ul className="service_list">
            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Built customized web pages using Velocity, Javascript aligning with the Learning Management System (LMS) product</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Worked on a few in house features to enhance the LMS product using technologies like Java, JSP, JSTL Tags, Custom Tags, jQuery and MySQL.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Led the team on making the learning management system accessible for a reputed IT firm.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Worked on integrating a client’s API into the LMS.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Implemented custom and slds components by Salesforce for building customized websites.</p>
            </li>

          </ul>
        </article>
        {/* END OF Edubrite Systems */}

        <article className="service">
          <div className="service_head">
            <h3>Persistent Systems</h3>
            <small>Nov 2020 - Jun 2021</small>
          </div>

          <ul className="service_list">
            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Designed a new PowerApps Canvas Driven app.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Implemented Solutions using multiple data sources (SharePoint, Excel, OneDrive).</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Developed Power Automate Flows and an Asset Management App which eliminates all the paper-work and handles all the approvals on MS Teams.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon"/>
              <p>Retrieved data from APIs in PowerApps.</p>
            </li>

          </ul>
        </article>
        {/* END OF Persistent */}
      </div>
    </section>
  )
}

export default Services