import React from "react";
import { useNavigate } from "react-router-dom";
import "./AustraliaBlog.css";

const CanadaBlogs = () => {
  const navigate = useNavigate();
  return (
    <section className="blog-container">
      <div className="blog-hero">
        <img
          src="/assets/Img/b2.png"
          alt="Australia Student Visa Update 2026"
        />
      </div>
      {/* Blog Title */}
      <h1 className="blog-title">
        Start Your Business with 485 Visa: Launch Your Entrepreneurship Journey
        in Australia
      </h1>

      <h2>What is the Subclass 485 Visa?</h2>

      {/* Introduction */}
      <p>
        <span className="span">The Temporary Graduate Visa (Subclass 485)</span>{" "}
        allows international students who have completed eligible studies in
        Australia to{" "}
        <span className="span"> live, work, and study temporarily.</span>
      </p>

      {/* What is 485 Visa */}
      <h2  className="heading-with-icon">There are two main streams:</h2>
      <ul>
        <li>
          {" "}
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work">
           <span className="span"> Post-Higher Education Work Stream </span>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-vocational-education-work">
            <span className="span"> Post-Vocational Work Stream </span>
          </a>
        </li>
      </ul>
      <p>
        Importantly, this visa provides{" "}
        <span className="span">unrestricted work rights</span> —meaning you can
        take up full-time employment or{" "}
        <span className="span">start a business</span> in Australia.
      </p>
      <p>
        This freedom makes the 485 visa a powerful launchpad for
        entrepreneurship and side hustles.
      </p>

      {/* Why 485 is Ideal */}
      <h2>
        Why the 485 Visa is the Ideal Launchpad for a Side Hustle in Australia
      </h2>

      <h4>
        <span className="span">From Study Mode to Business Mode</span>
      </h4>

      <h4>
        While on a <span className="span">student visa (Subclass 500)</span>,
        you were limited to 48 hours of work per fortnight. But on a{" "}
        <span className="span">485 visa</span>, those restrictions are gone, you
        can dedicate your time fully to employment or business pursuits.
      </h4>

      <h4>
        <span className="span">Australia’s Entrepreneurial Environment</span>
      </h4>

      <h4>
        Australia encourages start-ups through accessible{" "}
        <span className="span">ABN registration</span> , tax support, business
        mentorships, and small-business grants. You can legally register your
        business and operate as a{" "}
        <span className="span">sole trader, partnership, or company.</span>
      </h4>

      <h4>
        <span className="span">Why a Side Hustle Makes Sense</span>
      </h4>

      <ul>
        <li>You already understand local markets and culture.</li>
        <li>A side hustle lets you test your idea with minimal risk.</li>
        <li>
          A profitable venture can later evolve into a{" "}
          <span className="span">PR pathway.</span>
        </li>
      </ul>

      {/* Steps Section */}
      <h2>Key Steps to Start a Side Hustle on Your 485 Visa</h2>

      <h3>
        {" "}
        <span className="span">Step 1 – Check Eligibility & Duration</span>
      </h3>
      <p>
        Confirm your 485 visa stream, conditions, and expiry date. Ensure you
        remain compliant with Australian immigration rules.
      </p>

      <h3>
        <span className="span">
          Step 2 - Choose and Register Your Business Structure
        </span>
      </h3>
      <ul>
        <li>
          Select from{" "}
          <span className="span">sole trader, partnership, or company.</span>
        </li>
        <li>
          Apply for <span className="span">ABN </span> and{" "}
          <span className="span">TFN</span>.
        </li>
        <li>
          Apply for required <span className="span">permits or licences </span>{" "}
          on business.gov.au.
        </li>
      </ul>

      <h3> <span className="span">Step 3 – Validate Your Idea</span></h3>
      <p>
        Use local insights, alumni networks, and community groups to test your
        product-market fit.
      </p>

      <h3> <span className="span">Step 4 – Stay Legally Compliant</span></h3>
      <p>
        Follow taxation, payroll, and superannuation regulations. Maintain
        transparent records to support any future PR or business visa
        applications.
      </p>

      <h3><span className="span">Step 5 – Plan Long-Term Growth</span></h3>
      <p>
        Your 485 visa is temporary. Build business credibility and plan ahead
        for transition to a Skilled Migration (189/190/491) visa.
      </p>

      {/* Comparison Table */}
      <h2>Student Visa vs 485 Visa vs Skilled Migration Visa</h2>

      <div className="simple-table">
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Student Visa (Subclass 500)</th>
              <th>Temporary Graduate Visa (485 Visa)</th>
              <th>Skilled Migration Visa (189/190/491)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Work Rights</td>
              <td>48 hours per fortnight (during term)</td>
              <td>Full, unlimited – work or run a business</td>
              <td>Full (Permanent)</td>
            </tr>
            <tr>
              <td>Business Eligibility</td>
              <td>
                Allowed but secondary to study; must not interfere with
                education
              </td>
              <td>
                Fully permitted – you can operate as a sole trader or director
              </td>
              <td>Business experience adds up to 15 points</td>
            </tr>
            <tr>
              <td>Visa Duration</td>
              <td>Course-length dependent</td>
              <td>
                18 months – 3 years (fixed by qualification):Diploma/Trade: 18
                monthsBachelor/Master’s (coursework): 2 yearsMaster’s
                (research)/PhD: 3 years
              </td>
              <td>Permanent</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>Study</td>
              <td>Gain work experience or launch a business</td>
              <td>Permanent residency via points test (65+ required)</td>
            </tr>
            <tr>
              <td>Common Next Step</td>
              <td>Apply for 485 Visa or PR</td>
              <td>Skilled Migration Visa</td>
              <td>Already a PR, apply for citizenship</td>
            </tr>
            <tr>
              <td>Best Suited For</td>
              <td>International Students</td>
              <td>Recent graduates building skills or business</td>
              <td>
                485 holders with occupation on SOL, 65+ points, and
                business/employment proof
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Practical Tips */}
      <h2>Practical Tips for Success During Your 485 Period</h2>
      <ul>
        <li>
          <span className="span">Register early</span> for your ABN and keep all
          business documentation ready.
        </li>
        <li>
          <span className="span">Balance time</span> between job commitments and
          your business goals.
        </li>
        <li>
          <span className="span">Start small</span> — test ideas before scaling.
        </li>
        <li>
          <span className="span">Network locally </span>through university
          incubators and small-business events in Sydney, Melbourne, and
          Brisbane.
        </li>
        <li>
          <span className="span">Plan your next visa step </span> at least six
          months before your 485 expires.
        </li>
        <li>
          <span className="span">Consult experts</span> — Aussizz Group can
          connect you with migration and business advisors.
        </li>
      </ul>

      {/* CTA Section */}
      <div>
        <h3>Let’s Get You Business-Ready!</h3>
        <p>
          Your 485 visa is more than a temporary work permit—it’s a{" "}
          <span className="span">
            launchpad for your entrepreneurial journey in Australia.
          </span>
        </p>
        <p>
          Turn your passion project into a profitable venture and set yourself
          up for long-term success.
        </p>
      </div>
      <button className="blog-btn" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </section>
  );
};

export default CanadaBlogs;
