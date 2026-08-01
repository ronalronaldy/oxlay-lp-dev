import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import FeatureSection from './sections/FeatureSection';
import AboutSection from './sections/AboutSection';
import ProductListSection from './sections/ProductListSection';
import ReviewSection from './review/ReviewSection';
import HeroSection from './hero/HeroSection';
import BrandStorySection from './brand-story/BrandStorySection';
import FooterSection from './footer/FooterSection';

const MainPage = () => {
  return (
    <>
      <HeroSection />

      <FeatureSection />

      <AboutSection />

      <ProductListSection />
      <ReviewSection />
      <BrandStorySection />
      <FooterSection />
    </>
  );
};

export default MainPage;
