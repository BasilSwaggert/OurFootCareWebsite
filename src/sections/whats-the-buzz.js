/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
// import Performance from 'assets/whats-the-buzz/performance.svg';
// import Partnership from 'assets/whats-the-buzz/partnership.svg';
// import Subscription from 'assets/whats-the-buzz/subscription.svg';
// import Support from 'assets/whats-the-buzz/support.svg';

const data = [
  {
    id: 1,
    // imgSrc: Performance,
    altText: 'Features of the Z-Wing',
    title: 'Features of the Z-Wing',
    text:
      'The Z-Wing helps the your arch',
  },
  {
    id: 2,
    // imgSrc: Partnership,
    altText: 'Get in Contact to try it out',
    title: 'Get in Contact to try it out',
    text:
      'Reach out to us at OurFootCare@gmail.com',
  },
  {
    id: 3,
    // imgSrc: Subscription,
    altText: 'Learn about our Story',
    title: 'Learn about our Story',
    text:
      'We want to help people. That is why we have created this.',
  },
  {
    id: 4,
    // imgSrc: Support,
    altText: 'See what people have to say',
    title: 'What people are Saying',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.KeyFeature'}} id="feature">
     <Container>
       <SectionHeader
        slogan="What's the buzz about the Z-Wing?"
        title="Meet the orthotic revolution"
       />

       <Grid sx={styles.grid}>
         {data.map((item) => 
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
         )}

       </Grid>
     </Container>

   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
