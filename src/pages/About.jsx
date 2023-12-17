import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const sections = [
  {
    title: "MSU",
    content: `
      The Maharaja Sayajirao University of Baroda (MSU) has been acknowledged to be among the most outstanding higher education institutions in India. The University has adhered to a strong commitment to the sustenance and promotion of an environment that is favourable to academic excellence and development of intellectual, moral, critical and creative capacities of its students and teachers. The beautiful and majestic dome of the Faculty of Arts building – the second largest in Asia built in the Indo-Saracenic style - symbolizes the rich architectural heritage the MSU campus is endowed with. Dotted with beautiful buildings and heritage structures, and covering an area of 275 acres with six campuses (four urban and two rural), the University carries forward a glorious legacy of most eminent names among teachers and alumni. An illustrious scholastic background nurtured by renowned teachers, contemporary and interdisciplinary curriculum framework and wide range of choice-based programmes, technology-embedded pedagogy, a variety of national and international collaborations, advanced research programmes, support services for students, and healthy governance practices place MSU far ahead of its peers to emerge as a university of international repute. It is perhaps the only University in India that offers programmes from kindergarten to Ph.D. on a single campus and under a single umbrella. Residential and unitary in character, MSU has a different administrative and academic structure than most other universities in the country. The University today caters to the educational needs of more than thirty-five thousand students who are receiving education in its fourteen Faculties and in constituent colleges and institutions. They are served by about a thousand well-qualified teachers and more than one thousand five hundred administrative staff members. MSU is well-known for its research output in major knowledge areas such as science, technology, literature, social sciences, and business studies. It maintains a strong interface with industry and corporate organizations for the purpose of employment and training.
    `,
  },
  {
    title: "FTE",
    content: `
    The Faculty of Technology and Engineering as its stands today was formed along with the establishment of The Maharaja Sayajirao University in 1949, it is an outgrowth of what was popularly known as the Kala Bhavan Technical institute (KIT) established in June 1890 by late His Highness The Maharaja Sayajirao Gaekwad of Baroda State Initially the idea was to teach drawing bleaching dyeing, calic printing and carpentry, thus starting the School of Weaving in the year 1887 which subsequently expanded to a course on dyeing Prof. TK. Gajor was the first Principle of KBT who built it with passion The Faculty of Technology and Engineering is one of the most prominent faculties of its parent university, The Maharaja Sayajirao University, established more than a century ago, "TECHO" as it is popularly known, imparts not only professional technical education but also the soft skills to take on the corporate world. The non-technical event "Paramarsh has enrooted an inevitable place in the faculty's annual calendar to accomplish the latter. Historical construction, highly qualified faculty, hub of path breaking events and a fiercely competitive atmosphere makes this college the most sought after engineering college of Gujarat.
    `,
  },
  {
    title: "VISION",
    content: `
    During the first few years of the new millennium, it was observed that a lot of companies who came to college campuses to recruit fresh graduates started to lay special emphasis on communication skills, confidence, spontaneous thinking, working under pressure and other such soft skills. A lack of these skills among the students affected their recruitment prospects although they possessed sound technical knowledge and ability. This was the case not only in our college but all over Gujarat. With a common vision to overcome this flaw among students, Paramarsh was started in the year 2001 by a group of students from the Faculty of Technology & Engineering, M.S.U, Vadodara as an intra-college event. What began as a humble event consisting of only Group Discussion has now evolved and become the biggest non-technical fiesta of the entire West Zone. The word 'Paramarsh' has its roots in the Sanskrit, meaning SUPREME THOUGHT. An event organized by the budding engineers of M.S. University, Paramarsh is a non-profit organization with a sole aim of instilling in students the 7 commandments for corporate excellence Leadership', 'Team spirit', Sportsmanship, Creativity, 'the spirit of adventure', 'the art of Oration' and 'Science of Deduction'. Apart from 7 different events in the aforementioned categories, wide-arrayed workshops and interplays, enlightening social initiatives, inspiring guest-lectures, stunning band performances and spell-binding concerts; all form an integral part of Paramarsh and helps this 3-day festival live upto its tag-line: Ideas Infinite!
    `,
  },
  {
    title: "MISSION",
    content: `
    To familiarize students with today's Industrial Scenario, especially targeting the soft skills required by them for various campus interviews as well as group discussions and personal interviews that follow the written test during admissions to the prestigious institutes. To provide an interactive and learning environment. To bring together participants of diverse college backgrounds and make them understand about their individual as well as group potential. To provide knowledge about various sector through Webinars, Conclaves, Seminars, Workshops, Guest Lectures. To promote and enhance the social, economic, and environmental welfare of the society. by working towards providing the best possible solutions for sustainable developmental needs, by efficient use of resources, green energy initiatives and minimizing cost. PARAMARSH promises to be more substantial and unique than previous years.
    `,
  },
];

const About = () => {
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="w-full h-full text-purple-300 py-[10vh]  md:pb-[5vh] md:pt-0">
      <section className="wrapper1">
        <div className="top tracking-normal px-2 ">ABOUT US</div>

        <div className="bottom tracking-normal px-2" aria-hidden="true">
          ABOUT US
        </div>
      </section>

      <div className="flex justify-center w-screen items-center flex-col px-20 space-y-5 md:px-14 sm:px-5">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col w-full items-center para rounded-lg mx-5">
            <p className="font-extrabold tracking-wider abttex">
              {section.title}
            </p>
            <p className="text-justify m-10 sm:text-sm xs:m-5">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
