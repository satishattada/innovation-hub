import React from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import PartnersSection from './components/PartnersSection';
import RoadmapSection from './components/RoadmapSection';
import ProcessSection from './components/ProcessSection';
import ShowcaseSection from './components/ShowcaseSection';
import GetStartedSection from './components/GetStartedSection';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <OverviewSection />
      <CapabilitiesSection />
      <PartnersSection />
      <RoadmapSection />
      <ProcessSection />
      <ShowcaseSection />
      <GetStartedSection />
    </div>
  );
};

export default Home;