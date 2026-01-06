import React from 'react';

const RoadmapSection: React.FC = () => {
  return (
    <div className="roadmap-section">
      <h2 className="section-title">Innovation Roadmap 2026</h2>
      <div className="roadmap-timeline">
        <div className="timeline-item">
          <div className="timeline-marker">Q1</div>
          <div className="timeline-content">
            <h3>Foundation & Setup</h3>
            <ul>
              <li>Finalize program naming and branding</li>
              <li>Establish operating model and supporting tools</li>
              <li>Set up collaboration forums and governance</li>
            </ul>
            <div className="timeline-team">Lead: All Teams</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">Q2</div>
          <div className="timeline-content">
            <h3>Team & Infrastructure</h3>
            <ul>
              <li>Identify and onboard core incubation team</li>
              <li>Launch Innovation Repository on OneStop</li>
              <li>Deploy remote lab infrastructure</li>
            </ul>
            <div className="timeline-team">Lead: Chiru, Yogesh, Kartic</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">Q3</div>
          <div className="timeline-content">
            <h3>Scale & Onboard</h3>
            <ul>
              <li>Begin systematic tagging and categorization</li>
              <li>Onboard first wave of incubation initiatives</li>
              <li>Establish client co-creation frameworks</li>
            </ul>
            <div className="timeline-team">Lead: TBD</div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">Q4</div>
          <div className="timeline-content">
            <h3>Optimize & Expand</h3>
            <ul>
              <li>Measure impact and optimize processes</li>
              <li>Scale successful innovations to production</li>
              <li>Expand to new markets and domains</li>
            </ul>
            <div className="timeline-team">Lead: All Teams</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
