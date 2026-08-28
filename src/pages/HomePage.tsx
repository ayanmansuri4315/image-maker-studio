import React from 'react';
import { Hero } from '../components/Hero';
import { TornPaperTransition } from '../components/TornPaperTransition';
import { PhotoCollage } from '../components/PhotoCollage';
import { BrownStorySection } from '../components/BrownStorySection';
import { homePhotos } from '../data/studioData';

export const HomePage: React.FC = () => {
  return (
    <div id="home-page" className="w-full bg-[#F2EDE4]">
      {/* 1. Large Cinematic Photography Hero with Script Overlay */}
      <Hero />

      {/* 2. Realistic Hand-Torn Paper Transition Overlapping the Hero */}
      <TornPaperTransition fillColor="#F2EDE4" overlap={true} />

      {/* 3. Photo Collage: "A COLLECTION OF BEAUTIFUL STORIES" (24 Real Photographs with Polaroids and Washi Tape) */}
      <PhotoCollage photos={homePhotos} />

      {/* 4. Short Warm Brown Story & Philosophy Section */}
      <BrownStorySection />
    </div>
  );
};

