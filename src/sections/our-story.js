/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import TextFeature from 'components/text-feature';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Our Foot-Care Project
          </Heading>
          <Text as="p" variant="heroSecondary">
            Our Foot-Care Project is a humanitarian organization meant to help people who are experiencing painful feet due to overuse walk without pain again
          </Text>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const data = {
  subTitle: 'Introduction',
  title: 'My interest in helping people walk goes back to my childhood.',
  description:
  <text>
        In 2015 after 26 years of working in the field of Orthotics and Prosthetics, I was feeling overworked and stressed. I was seeing patients to address their orthotic needs all hours of the day and night. It was a very rewarding career but I had lost the art of being happy with my work. I needed a change. I decided to call my friend and former co-worker Rick Anderson CEO, Marathon Orthotics Inc. to inquire about a new job. Marathon Orthotics is one of the largest custom foot orthotic manufacturers in the country. This change meant that I would lose patient contact and I would specialize in the fabrication of foot orthotics only. As I thought about this change I looked back and realized my career started with an interest in helping people walk by providing custom foot orthotics and it evolved into bracing the entire anatomy. I wanted to return to specializing in foot care.
        <br></br><br></br> 
        At age 56, after interviewing with Rick I was hired as the Staff Orthotist for his company. My duties included working with the technical staff and consulting with the many professional clients and customers over the phone. I enjoyed the diversity of the hard working technical staff and also speaking and getting to know all the foot care professionals across the nation. In addition, I had time to develop some foot care products. I was happy again with my work.
        <br></br><br></br>
        Our Foot-Care Project was developed two years after I retired because I wanted to continue my efforts in helping people walk. My interest in helping people walk goes back to my childhood. When our family moved in 1957, I was the first born in the new house. The house was bigger and had a fenced in back yard which was great for our growing family. I was the eighth child along with my four younger sisters making it a total of twelve. The neighbors were not sure what to think of such a big family. In recent years, my mother told me news had circulated in the neighborhood that she and my dad bought the only house with a fence so they could cage us in, like we were a herd of cattle. We did play in the fenced backyard a lot. To some it may sound like a zoo but our house was orderly, with lots of routine and discipline despite what the neighbors thought. We saved the chaos for outdoors, especially on Saturdays when my mother cried, “Go outside and play!” One of my weekly chores before I could go outside was cleaning the living room where newspapers and magazines covered the sofa end tables. One that I remember was the Mary Knoll monthly (a Catholic Missionary magazine). I was attracted to the pictures on the cover that were usually of far off places, like Africa. I paged through the magazines regularly. I was drawn to the pictures of people with obvious crippling diseases. I was curious and dreamed of going to Africa someday.

  </text>
};

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '70px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
      backgroundColor: '#D3D3D3',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      '.description': {
        pr: [0, null, 6, 7, 6],
      },
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
