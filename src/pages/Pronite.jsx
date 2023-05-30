import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import i from "../components/MADHUR.png";
import i1 from "../components/rd.jpg";
import i2 from "../components/rit.jpg";
import i3 from "../components/mi.jpg";
import i4 from "../components/tlt.jpg";
import i5 from "../components/nikhita.jpg";
import i6 from "../components/la.jpg";
import i7 from "../components/shefali.jpg";
import i8 from "../components/tochi.jpg";
import i9 from "../components/raghu.jpg";
import i10 from "../components/para.jpg";
import i11 from "../components/adi.jpg";
import i12 from "../components/pari.jpg";
import i13 from "../components/benny.jpg";
import i14 from "../components/suraj.jpg";
import Sidebar from "../components/Sidebar";
const Pronite = () => {
  const showHandler = () => {
    setshowSidebar(!showSidebar);
  };
  const [showSidebar, setshowSidebar] = useState(false);
  return (
    <div className="bg-black text-white">
      {!showSidebar ? (
        <div className="fixed top-10 left-10 cursor-pointer">
          <CgMenuLeftAlt color="white" size="35px" onClick={showHandler} />
        </div>
      ) : (
        <Sidebar handleClick={showHandler} />
      )}
      <div className="flex flex-wrap items-center justify-center">
        <div className=" text-9xl md:text-8xl sm:text-6xl xs:text-5xl pt-[25vh] px-3 w-[100vw] text-center">
          PRONITE
          <p className="text-base px-8 pt-[10vh] text-center">
            The jubilation of experiencing your fandom artists live is
            unbeatable. Paramarsh has never failed to make the audience amazed.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Madhur Sharma</p>
          <p className="py-5">
            Madhur Sharma is an Indian Playback singer and live performer from
            Bhopal based in Mumbai. He is well known for number of popular
            songs, including " KAALI KAALI ZULFON KE" . He has emerged as the
            most popular online sensation of 2022. He has garnered more than 500
            million views and 71.1M streams across all media. His first original
            song "Yaari" was released in 2019 under "Times Music" and was a
            great hit. This song was released on the occasion of friendship day
            and have already crossed 2+ million views. Witness the immersive and
            soulful voice that will pierce your heart through the melodies
            songs.
          </p>
          <p>Register Now before the tickets run out!!</p>
          <p>Venue: Faculty of Technology and Engineering, MSU</p>
          <p>Date: 8Th January FREE ENTRY FOR ALL</p>
          <p>REGISTRATION IS MANDATORY Limited Entries only</p>
        </div>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2 hover:text-black hover:bg-white">
          REGISTER HERE
        </button>
      </div>
      <p className="text-5xl md:text-4xl p-10 text-center">PAST PRONITES :</p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-[80vw] p-10 text-justify">
          <img src={i1} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Rahul Dua</p>
          <p className="py-5">
            An established India stand-up comedian & brightest comic of the new
            generation "Rahul Dua" made 2020 mesmerized and full of laughters
            with his Performance under the banner of pronite. Rahul Dua caught
            his first big break when he appeared on 'Comicstaan', a comedy
            reality show. He is also an active YouTuber and his Videos go viral.
            His genre of comedy is observational comedy.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i2} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Ritviz</p>
          <p className="py-5">
            Let's take a trip down the memory lane of 2019 when Ritviz
            illuminated Paramarsh's stage with his presence and made the
            atmosphere worth remembering. The beloved sensation who debuted
            several years ago and conquered the hearts of youth, RITVIZ is also
            an internationally renowned electronic popstar who has everyone
            hooked up on his beats. A desi pop playlist with his popular songs
            Udd Gaye and Sage is what keeps you moving on the dance floor.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i3} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Mohammed Irfan</p>
          <p className="py-5">
            {" "}
            2018 marks remarkable stage lit performance of Mohammed Irfan. His
            soft voice truly drew the attention of romantic music listeners. He
            is also well known for being able to sing in several languages. His
            journey in the industry accelerates and he collaborated with the
            music directors like Sajid-Wajid, Himesh Reshammiya, Meet Bros, Jeet
            Ganguly and many more. 2014 has been a successful year for Irfan
            where he lent his voice for many hit songs like "Baarish" from
            Yaariyan, "Muskurane" from Citylights, "Banjaara" from Ek Villain,
            "Dard Dilo Ke" from The Xpose and "Tu Hi Tu" from Kick. The song
            "Banjaara" composed and written by Mithoon Sharma conquered hearts
            and many more. In the same year he made it to Mirchi Top 20
            Jubilee’s Awards for the song Banjaara (Ek Villian), Best Singer for
            the song Dard Dilo Ke (The Xpose) at Life Ok Awards. This is how he
            is rocking in the film industry.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i4} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">The Local Train Band</p>
          <p className="py-5">
            The Local Train, the name itself suggests it to be a concoction of
            varied Indian culture. Its not just a band, but an emotion . It was
            ranked India’s no.1 rock band by Sennheiser. Their album ‘Aalas Ka
            Pedh’ went on to become one of the highest selling independent
            albums of the year and was also featured on the list of “Most
            Streamed Albums” on Apple Music. Their marvellous performance
            blessed the stage of Paramarsh'17.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i5} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Nikhita Gandhi</p>
          <p className="py-5">
            Nikhita Gandhi, an epitome of most diversified vocalist, is an
            Indian playback singer who has worked in Indian films in four
            different languages. She has recently sung as the face of Kriti
            Sanon in Raabta for the title track ‘Raabta’. Her song ‘Ullu ka
            Pattha’(Jagga Jasoos), a duet with Arijit Singh is also a hit song.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i6} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Lagoori Band</p>
          <p className="py-5">
            Lagori makes music that reflects the face of the modern Indian
            youth. This band combines Indian classical melodies and inflections
            with Rock music, resulting in an interesting mix that is high on
            energy, being catchy and soulful at the same time. Paramarsh’16
            beholds memories of experiencing this great band performance.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i7} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Shefali Alvares</p>
          <p className="py-5">
            Shefali Alvares is a liberal melody that grabs a foothold at Jazz
            and has enchanted Bollywood with her versatile diction. Her famous
            songs include ‘Badtameez Dil’, ‘Steal the Night’, ‘Ratta Maar’,
            ‘Dhatting Nach’, and many more. Paramarsh'16 was a witness to her
            enchanting performance.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i8} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Tochi Raina</p>
          <p className="py-5">
            A notable playback singer in Hindi films, Tochi Raina's famous works
            include ‘Kabira’ from “Yeh Jawaani Hai Deewani”, ‘Iktara’ from "Wake
            up Sid", ‘Saibo’ for the Hindi movie “Shor in the City” a duet with
            Shreya Ghoshal and many others. An awesome musical night was
            experienced by Paramarsh’15 in tune with Tochi Raina.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i9} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Raghu Dixit</p>
          <p className="py-5">
            Raghu Dixit, an Indian singer, composer, producer is the front-man
            for the Raghu Dixit Project, a multi-lingual folk music band. This
            band is known for their unique combination of Indian traditional
            sounds and western medleys. This band has a modern, global sound and
            that is rooted and true to India's rich cultural
            heritage.Paramarsh’14 had the pleasure of witnessing this rich in
            culture band.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i10} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Paradigm Shift Band</p>
          <p className="py-5">
             Paradigm Shift is a Mumbai-based progressive rock band. Their music
            is an amalgamation of various genres of music, combining Indian
            classical music with contemporary Progressive Rock themes. Their
            famous compositions include ‘Khwabon Mein’, ‘Deedar’ and many more.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i11} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Aditi Singh Sharma</p>
          <p className="py-5">
            Aditi Singh Sharma is an Indian playback singer who made her singing
            debut in Bollywood with Anurag Kashyap’s Dev D. She’s famous for her
            work in movies like ‘No One Killed Jessica’, ‘Heroine’ and ‘Agent
            Vinod’. She has also worked for MTV’s Coke Studio.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i12} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Parikrama Band</p>
          <p className="py-5">
            Parikrama is a Rock and Roll band from Delhi, India. They have
            several live performances and original numbers to their name. This
            band is renowned to be the "Indian God of Rock". Most of their
            recordings are made in live performances. ‘But It Rained’ (1996) is
            their biggest hit ever!
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i13} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Benny Dayal</p>
          <p className="py-5">
            Benny Dayal, a singer who hails from the state of Kerala, is a
            member of the band S5. Given a break by A.R. Rahman, he has churned
            out many hit numbers. His famous songs include ‘Ekk Main Aur Ekk Tu’
            and ‘Daaru Desi’. He was here to present an exhilarated performance
            in Paramarsh’12.
          </p>
        </div>
        <div className="w-[80vw] p-10 text-justify">
          <img src={i14} alt="" className="w-full"/>
          <p className="text-3xl  text-center p-5">Suraj Jagan</p>
          <p className="py-5">
            Suraj Jagan is a famous Indian playback singer of Malyali origin. He
            is prominently noted for the song ‘Give Me Some Sunshine’ from the
            award-winning film 3 Idiots which received 'The Best Emerging Male
            Performer’ award. Suraj has also sung many famous songs like ‘Sadka
            Kiya’ (I hate luv storys), ‘Dil Dhadakne Do’ (Zindagi na milegi
            dobara) and many more. He has also been front man for the rock band
            'Dream Out Loud'. Paramarsh'11 danced to the electrifying beats of
            Suraj Jagan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pronite;
