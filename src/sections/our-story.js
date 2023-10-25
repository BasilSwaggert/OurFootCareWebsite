/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import TextFeature from "components/text-feature";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Our Foot-Care Project
          </Heading>
          <Text as="p" variant="heroSecondary">
            Our Foot-Care Project is a humanitarian organization meant to help
            people who are experiencing painful feet due to overuse walk without
            pain again
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
  subTitle: "Introduction",
  title: "My interest in helping people walk goes back to my childhood.",
  description: (
    <text>
      In 2015 after 26 years of working in the field of Orthotics and
      Prosthetics, I was feeling overworked and stressed. I was seeing patients
      to address their orthotic needs all hours of the day and night. It was a
      very rewarding career but I had lost the art of being happy with my work.
      I needed a change. I decided to call my friend and former co-worker Rick
      Anderson CEO, Marathon Orthotics Inc. to inquire about a new job. Marathon
      Orthotics is one of the largest custom foot orthotic manufacturers in the
      country. This change meant that I would lose patient contact and I would
      specialize in the fabrication of foot orthotics only. As I thought about
      this change I looked back and realized my career started with an interest
      in helping people walk by providing custom foot orthotics and it evolved
      into bracing the entire anatomy. I wanted to return to specializing in
      foot care.
      <br></br>
      <br></br>
      At age 56, after interviewing with Rick I was hired as the Staff Orthotist
      for his company. My duties included working with the technical staff and
      consulting with the many professional clients and customers over the
      phone. I enjoyed the diversity of the hard working technical staff and
      also speaking and getting to know all the foot care professionals across
      the nation. In addition, I had time to develop some foot care products. I
      was happy again with my work.
      <br></br>
      <br></br>
      Our Foot-Care Project was developed two years after I retired because I
      wanted to continue my efforts in helping people walk. My interest in
      helping people walk goes back to my childhood. When our family moved in
      1957, I was the first born in the new house. The house was bigger and had
      a fenced in back yard which was great for our growing family. I was the
      eighth child along with my four younger sisters making it a total of
      twelve. The neighbors were not sure what to think of such a big family. In
      recent years, my mother told me news had circulated in the neighborhood
      that she and my dad bought the only house with a fence so they could cage
      us in, like we were a herd of cattle. We did play in the fenced backyard a
      lot. To some it may sound like a zoo but our house was orderly, with lots
      of routine and discipline despite what the neighbors thought. We saved the
      chaos for outdoors, especially on Saturdays when my mother cried, “Go
      outside and play!” One of my weekly chores before I could go outside was
      cleaning the living room where newspapers and magazines covered the sofa
      end tables. One that I remember was the Mary Knoll monthly (a Catholic
      Missionary magazine). I was attracted to the pictures on the cover that
      were usually of far off places, like Africa. I paged through the magazines
      regularly. I was drawn to the pictures of people with obvious crippling
      diseases. I was curious and dreamed of going to Africa someday.
      <br></br>
      <br></br>
      Below is a summary of my training and some experiences I have had along
      the way. These experiences, cases and people I have met along the way are
      the (Our) in this project. Without them there would be no project.
      <br></br>
      <br></br>
      <strong>Experience #1: If The Shoe Fits Wear It</strong>
      <br></br>
      For many years I attended night classes to earn my degree. I studied in
      the early morning hours because the rest of the day I was busy working
      full-time and being a mom. Needless to say there was no time wasted. I had
      ten years of experience working as an orthopedic shoemaker and orthotic
      technician. I was eager to move to another level which meant more
      education that had to be earned in the evenings after my day job. I wanted
      to work closely with people suffering from crippling diseases to help them
      walk.
      <br></br>
      <br></br>
      After years of studying and training on the job under supervision, I was
      ready for my certification exam. As a certified clinician I would be able
      to see patients following a doctor’s prescription. I was trained to assess
      the patient’s orthotic needs along with all the technical experience to
      design and fabricate a device. There is a science behind the evaluation of
      each patient’s orthotic needs and an art to the design and fabrication of
      their device. The following patient was going to challenge me in both. She
      had the widely unknown pathology called Charcot Deformity, caused by her
      underlying disease of Diabetes. She also had neuropathy causing loss of
      sensation in her feet. During the Charcot process, the foot sometimes
      takes on a complete change in shape called a rocker bottom. The patient
      breaks a bone near their ankle without experiencing pain. The patient then
      unknowingly walks on a broken foot doing further damage. The swelling is
      what usually brings people in to see the doctor. If not seen soon enough
      an ulcer can form making things even more difficult and can lead to
      amputation. If all goes well and the foot and ankle heal properly custom
      orthotics and shoes will be necessary.
      <br></br>
      <br></br>
      In this case, my early experience as a shoemaker and technician were an
      advantage. This was something I had not seen before, two different shaped
      feet. I was going to have to design custom shoes. One side deformed,
      called rocker bottom because it was shaped like the runner on a rocking
      chair. After lots of time evaluating and fabricating the proper shoes and
      orthotics, I finally had something that fit her and she was able to walk
      safely for the first time in months. We discussed breaking them in
      gradually as always when providing new orthotic devices.
      <br></br>
      <br></br>
      Start by increasing wear time for one hour each day. For instance, one
      hour the first day two hours the second day and so forth until you can
      wear them all day. She was instructed to do skin checks after each use
      watching for any signs of redness that didn’t go away in five minutes. If
      the redness didn’t go away in five minutes she was to stop the break in
      process until she could see me. She understood and would return to follow
      up with me in two weeks.
      <br></br>
      <br></br>
      One week had passed and she was back to follow up. She started having
      problems after the fifth day. On that day she took off her shoes after
      wearing them for five hours and she had developed a blister the size of a
      pancake on the rocker foot. I was stunned as I asked her how it happened.
      She said the first few days she didn’t walk as much as on the fifth day.
      She knew it, she had overdone it. She also suffered from a genetic weight
      disorder. Put these two things together and you have what was called a
      gravity factor plus. Note: This term was used in my profession as a
      non-offensive way to record a patient’s weight.
      <br></br>
      <br></br>I had a sinking feeling she would develop an ulcer and loose her
      foot to amputation. I was gladly wrong about that and over time she healed
      up and finally was able to walk safely. I worked with her for many years
      until she moved away. My experience with this case gave me the insight and
      valuable knowledge I would need working with this group for the rest of my
      career.
      <br></br>
      <br></br>
      <strong>Experience #2: The Long Walk</strong>
      <br></br>
      My next case was a brief encounter but it had a lasting affect. I don’t
      remember her name or her face but I do remember her feet. It was going to
      be another hot day in the 90’s. At the time I was working in the inner
      city. This was our first appointment together so I would need to do a full
      evaluation. Her prescription said orthotics for painful feet. In other
      words it was my job to reduce her pain with a device I thought suitable to
      do the job.
      <br></br>
      <br></br>
      During the evaluation I took off her shoes to look at her feet and I
      noticed a big blue pad in her shoes. Then I was able to look closely at
      the bottom of her feet and they were beet red. Never in my entire career
      had I seen feet so red! I thought maybe they were sun burned due to the
      weather. So I asked her how they got so red. She said they were like that
      all the time because she walks everywhere. She had walked five miles to
      come see me that day. On the way she stopped at a gas station and in the
      restroom she bought sanitary napkins to put in her shoes to ease the pain
      and add some cushion.
      <br></br>
      <br></br>
      Distressed by what I saw, I scrambled with the time we had left to adjust
      her shoes right there in the lab. I made some arch pads and new liners for
      her shoes out of a therapeutic material called plastazote. It’s a soft
      material that would naturally conform to her feet. She was very happy with
      the changes I had made and thanked me for the immediate pain relief. She
      said she was also fortunate to now have health insurance which she had
      been lacking for many years. She then walked out of my office and I don’t
      remember ever seeing her again.
      <br></br>
      <br></br>
      There is nothing more rewarding for me than to help relieve foot pain that
      will allow someone to walk more comfortably. The padding I placed in her
      shoes I’m certain gave her more relief than the sanitary napkins. But I
      was impressed with her (do it yourself) attempt.
      <br></br>
      <br></br>
      <strong>Experience #3: When Your Feet Hurt, You Hurt All Over</strong>
      <br></br>
      My next case is more of an observation of many cases which I will discuss
      and has led me to develop an arch pad. You most likely have heard the
      saying, (when your feet hurt you hurt all over). In the realm of
      foot-care, there is nothing discussed more frequently and I believe more
      painful than plantar fasciitis. Some might argue that but I have lived
      with tendonitis in one foot most of my adult life and the few times I’ve
      had plantar fasciitis it was very uncomfortable. The fascia is a
      compartmental tissue designed to hold your foot together. It spans the
      length of the bottom surface of your foot with its main purpose being to
      support the arch. There are many ways it can become inflamed and the heel
      is often where it hurts the most due to the attachment site of this thick
      band of tissue. Most often the cause is some form of stress on this firm
      thick band.
      <br></br>
      <br></br>
      After treating many people with custom orthotics to support the arch and
      relieve the stress on the fascia, I believe every case presents a little
      differently. But one thing is very clear, the pain is debilitating. With
      your first step in the morning when your heel strikes the ground, the pain
      can be excruciating.
      <br></br>
      <br></br>
      When my brother asked me to take a look at his feet because they were
      hurting so bad I was certain he had plantar fasciitis. He began describing
      his situation as I was examining his foot. I flexed his foot forward and
      pushed on the fascia in the middle of his arch. Then I said, “Is this
      where it hurts?” with a grin. He cried out and pulled back, “YEOWWW!” We
      laughed! Sorry brother, you really didn’t deserve that but it was fun to
      see you wince. After the attack we discussed footwear and I gave him an
      arch pad to put in his shoes. Since then I have heard no reports of pain.
      Maybe he’s afraid to talk to me. I suspect he’s feeling better.
      <br></br>
      <br></br>
      Many people are prescribed custom orthotics to treat plantar fasciitis.
      Like I said by supporting the arch you will relieve stress on the fascia
      tissue. However, many people in my experience reported pain even when
      wearing a custom device. Like the following doctor I was treating as a
      patient prescribing orthotics for his own plantar fascia pain. He had a
      lot of questions so I studied his biomechanics and I artfully designed his
      orthotics to address his professional needs and activities. When he
      returned he was better but he wanted to be pain free and he was not. I
      added more support with an arch pad I made in my lab because that is the
      only thing I could think of doing that might help at the time. He claimed
      it was an immediate improvement. He was curious and wanted to know what I
      had done. I explained how I added a thin layer through the arch on the
      underside of his custom orthotics and he said, “Oh! Like a shim, right?” I
      said, “Yeah that’s right, just like a shim.”
      <br></br>
      <br></br>
      Since then I’ve been using the idea to immobilize the arch especially if
      there is a gap between the custom orthotic arch support and inside the
      shoe. This I feel is what the above patient was experiencing. Shoes are
      built wider today than in the past leaving a gap through the arch for
      people with narrow or flexible feet. I used this method successfully for
      many years.
      <br></br>
      <br></br>
      After months of watching a co-worker hobble around in pain with every
      step, I asked if I could examine her feet. I found the above issue to be
      her problem. She had been wearing custom orthotics and doing therapy for a
      while. She was still experiencing significant heel pain throughout the
      entire day. Her shoes were too wide and her arch support was not
      adequately supporting her very flexible arch. I added an arch pad
      underneath her existing custom orthotic and she had immediate relief.
      “It’s amazing!” she cried. She was able to take a normal step without heel
      pain. I made her a new pair of custom orthotics with more arch support. To
      this day she still reports no plantar fascia pain.
      <br></br>
      <br></br>
      I’m not saying this is the plantar fasciitis cure but I do think there are
      many ways to treat plantar fasciitis. This is just another tool in the
      box. Speaking of tools, my husband who is a carpenter by trade swears he
      cured his plantar fasciitis by wearing two pairs of socks. Until recently
      he said to me, “my heel kinda hurts.” With my eyebrows raised I asked,
      “How old are those shoes you are wearing” as I peered toward the floor.
      End of discussion; I see he has some new shoes.
      <br></br>
      <br></br>
      After years of treating my own feet with custom orthotics for posterior
      tibial tendonitis, I had to move to the next level of bracing for one
      foot, called a UCB. The UCB is a custom hard plastic orthotic device that
      fits in the shoe with a very deep 5cm heel cup. I wasn’t real excited
      about wearing something of this nature inside my shoe until I put it on. I
      had immediate relief from the tendonitis. What I didn’t expect is that it
      also cured that annoying heel pain. A few weeks after wearing the UCB my
      heel pain disappeared. I can gladly report I have not had heel pain since.
      I’m sure the source of the problem was the poor alignment of my heel bone
      causing both plantar fasciitis and PTT (posterior tibialis tendonitis).
      <br></br>
      <br></br>
      <strong>Conclusion:</strong>
      <br></br>
      In 2017 everything changed again. I had a physical ailing that was
      troubling me. My right ear felt plugged, much like after a swim. I was
      having trouble hearing. I spent two years addressing this problem and
      finally was diagnosed with a brain tumor. It was large and most likely had
      been growing for over twenty years. I needed an immediate craniotomy
      surgery with resection to remove the almost 4cm Schwannoma pressing on my
      brain stem.
      <br></br>
      <br></br>
      The surgery went well. The good part was that the tumor was benign but I
      would lose my hearing on the right side. Hence, the tumor is also called
      an Acoustic Schwannoma. The surgeon was able to remove most of the tumor.
      A small portion had to be radiated with a procedure called Gamma Knife
      because it was too close to my jugular vein. The recovery was not easy and
      a return to work proved difficult. I was crushed.
      <br></br>
      <br></br>
      Retiring and collecting disability was necessary. I was 61 years old. My
      disabilities include the hearing and equilibrium loss along with weakness
      in my right arm, speech, and swallowing. It took a while to get used to
      not going to work daily. For me there certainly was a learning curve to
      being retired. After working almost my entire life, it felt like my life
      just came to a screeching halt. I missed helping people walk.
      <br></br>
      <br></br>
      One day I was watching my husband expertly remodel our badly worn bathroom
      and I wished I had a project. I got to thinking about the above
      experiences and all the years I spent learning orthopedics. There are two
      patient groups that I never saw very much during my career because there
      really wasn’t anything I could do for them. Those groups were the
      uninsured and young adults. This project is designed for you. I have
      developed a self-help kit which includes a pair of arch pads that will fit
      in most shoes and 2 sets of plastazote material for better cushioning With
      tips and tutorials my web site will guide you through do it yourself
      techniques to make you more comfortable and hopefully relieve your foot
      pain. I have found my art again, and that makes me very happy.
    </text>
  ),
};

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "70px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
      backgroundColor: "#D3D3D3",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      ".description": {
        pr: [0, null, 6, 7, 6],
      },
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
