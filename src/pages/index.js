import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import WhatsTheBuzz from '../sections/whats-the-buzz';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import OurStory from '../sections/our-story';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Our Footcare Project" />
          <Banner />
          <WhatsTheBuzz />
          <br></br>
          <br></br>
          <Feature />
          <CoreFeature />
          <WorkFlow />
          <br></br>
          <OurStory />
          <TestimonialCard />
        </Layout>
    </ThemeProvider>
  );
}
