import React from 'react'
import './services.css'
import { RxDotFilled } from 'react-icons/rx'

const Services = () => {
  return (
    <section id='services'>
      <h5>Companies I have worked for</h5>
      <h2>Professional Experience</h2>
      <div className="container services_container">
      <article className="service">
          <div className="service_head">
            <h3>ACI Worldwide</h3>
            <small>Jan 2024 - Present</small>
          </div>

          <ul className="service_list">
            <li>
              <RxDotFilled className="service_list-icon" />
              <p>⁠Part of a renowned Electric Payments Processing Platform Postilion Interchanges Team.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>⁠Actively contributed to Agile Scrum teams to deliver key features, ensuring alignment with business objectives and adhering to strict project deadlines.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Contributed as part of the L3 support team by resolving critical bugs, addressing client inquiries regarding product functionality, and assisting in understanding complex product configurations to ensure smooth client operations.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Performed thorough code reviews and implemented automated testing on internal tools, consistently achieving over 90% code coverage to maintain high-quality standards.</p>
            </li>

          </ul>
        </article>
        {/* END OF ACI Worldwide */}

        <article className="service">
          <div className="service_head">
            <h3>Techbulls Softtech</h3>
            <small>Sept 2022 - Present</small>
          </div>

          <ul className="service_list">
            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Led a module for an Internal Product, aligning with OCEN Specifications to
                facilitate seamless loan disbursement to businesses and individuals.</p>
            </li>
            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Contributed to a renowned Payment Gateway Platform team. Implemented secure RESTful APIs and collaborated with partner teams for payment integration.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Developed and managed a Refund Service, addressing issues and
                resolving bugs across various environments, including QA, UAT, and
                PROD.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Executed the integration of Swagger API and coordinated the
                implementation of Apache Kafka-driven event-based service throughout
                all modules.</p>
            </li>
            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Managed a team of 3 developers, providing guidance and support in their
                tasks and ensuring timely delivery of the project.</p>
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
              <RxDotFilled className="service_list-icon" />
              <p>Built customized web pages using Velocity, Javascript aligning with the Learning Management System (LMS) product</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Worked on a few in house features to enhance the LMS product using technologies like Java, JSP, JSTL Tags, Custom Tags, jQuery and MySQL.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Led the team on making the learning management system accessible for a reputed IT firm.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Worked on the seamless integration of a client's API into the Learning Management System (LMS) to enable efficient data exchange and enhance system functionality.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
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
              <RxDotFilled className="service_list-icon" />
              <p>Designed a new PowerApps Canvas Driven app, utilizing the PowerApps platform to create a visually-driven and user-friendly application interface for enhanced user experience and functionality.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Implemented Solutions using multiple data sources (SharePoint, Excel, OneDrive).</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Developed Power Automate Flows and an Asset Management App which eliminates all the paper-work and handles all the approvals on MS Teams.</p>
            </li>

            <li>
              <RxDotFilled className="service_list-icon" />
              <p>Retrieved data from APIs within PowerApps, enabling seamless integration and access to external data sources.</p>
            </li>

          </ul>
        </article>
        {/* END OF Persistent */}
      </div>
    </section>
  )
}

export default Services