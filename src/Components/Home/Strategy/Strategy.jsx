import React from 'react';
import './Strategy.css';

export const Strategy = () => {
  return (
    <div className="container container-padding">
        <div className="strategy-list ">
          <h3>Collaborative Success: A Strategy Tailored to Your Needs</h3>
          <ul>
          <li>
              <span className="checkmark"><i class="bi bi-check-lg"></i> </span>
              <p className="strategyp"><b>Assessment Phase:</b> Together, we analyze your current landscape, identify challenges, opportunities, and key risks.</p>

            </li>
            <li>
              <span className="checkmark"><i class="bi bi-check-lg"></i> </span>
              <p className="strategyp"><b>Strategic Execution:</b> Together, we utilize your existing assets, define the necessary scope, and craft a detailed, actionable plan.</p>
            </li>
            <li>
              <span className="checkmark"><i class="bi bi-check-lg"></i> </span>
              <p className="strategyp"><b>Building Foundations:</b> Together, we implement the strategy, addressing critical business needs and setting up the technical and organizational foundations for success.</p>
            </li>
            <li>
              <span className="checkmark"><i class="bi bi-check-lg"></i> </span>
              <p className="strategyp"><b>Ongoing Adaptation:</b> Together, we assess progress regularly, adjusting the plan as necessary to keep pace with evolving business and technical conditions.</p>
            </li>
            <li>
              <span className="checkmark"><i class="bi bi-check-lg"></i> </span>
              <p className="strategyp"><b>Milestone-Driven Completion:</b> Together, we narrow the focus with each milestone, ensuring we reach our shared objectives.</p>
          </li>
          </ul>
        </div>
        </div>
  );
};
