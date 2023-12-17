// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import TypeWriterEffect from "react-typewriter-effect";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaQuoteLeft } from "react-icons/fa";
// import images from "../assets/shubh/images";
// import { RxCross2 } from "react-icons/rx";
// import Testimonials from "./Testimonials";
// import RespoYTVid from "./RespoYTVid";
// import { RiFootprintFill } from "react-icons/ri";
// import { TfiStatsUp } from "react-icons/tfi";
// import { FaBuilding } from "react-icons/fa";
// import { BsPeopleFill } from "react-icons/bs";
// import Patronages from "../components/Patronages";

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const counterRef = useRef(null);
//   const counterRef1 = useRef(null);
//   const counterRef2 = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && count < 32000) {
//           setCount((prevCount) => prevCount + 160);
//         }
//       });
//     });
//     if (counterRef.current) {
//       observer.observe(counterRef.current);
//     }
//     return () => {
//       if (counterRef.current) {
//         observer.unobserve(counterRef.current);
//       }
//     };
//   }, [count]);
//   useEffect(() => {
//     const observer1 = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && count1 < 200) {
//           setCount1((prevCount) => prevCount + 1);
//         }
//       });
//     });
//     if (counterRef1.current) {
//       observer1.observe(counterRef1.current);
//     }
//     return () => {
//       if (counterRef1.current) {
//         observer1.unobserve(counterRef1.current);
//       }
//     };
//   }, [count1]);
//   useEffect(() => {
//     const observer2 = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && count2 < 4000) {
//           setCount2((prevCount) => prevCount + 20);
//         }
//       });
//     });
//     if (counterRef2.current) {
//       observer2.observe(counterRef2.current);
//     }
//     return () => {
//       if (counterRef2.current) {
//         observer2.unobserve(counterRef2.current);
//       }
//     };
//   }, [count2]);

//   useEffect(() => {
//     AOS.init({
//       duration: 800, // Animation duration in milliseconds
//       offset: 0, // Offset (in pixels) from the original trigger point
//       easing: "ease-in-out", // Easing function for the animation
//       // once:true
//     });
//   }, []);
//   const [showFullMessage1, setShowFullMessage1] = useState(false);
//   const [showFullMessage2, setShowFullMessage2] = useState(false);
//   const [showFullMessage3, setShowFullMessage3] = useState(false);
//   const [showFullMessage4, setShowFullMessage4] = useState(false);
//   const msg1 = showFullMessage1
//     ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
//     : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
//   const msg2 = showFullMessage2
//     ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
//     : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
//   const msg3 = showFullMessage3
//     ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
//     : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
//   const msg4 = showFullMessage4
//     ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
//     : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";

//   const messages = [
//     {
//       id: 1,
//       msg: msg1,
//       showFullMessage: showFullMessage1,
//       setShowFullMessage: setShowFullMessage1,
//       image: images.GL,
//       name: "name1",
//       designation: "designation1",
//     },
//     {
//       id: 2,
//       msg: msg2,
//       showFullMessage: showFullMessage2,
//       setShowFullMessage: setShowFullMessage2,
//       image: images.GL,
//       name: "name2",
//       designation: "designation2",
//     },
//     {
//       id: 3,
//       msg: msg3,
//       showFullMessage: showFullMessage3,
//       setShowFullMessage: setShowFullMessage3,
//       image: images.GL,
//       name: "name3",
//       designation: "designation3",
//     },
//     {
//       id: 4,
//       msg: msg4,
//       showFullMessage: showFullMessage4,
//       setShowFullMessage: setShowFullMessage4,
//       image: images.GL,
//       name: "name4",
//       designation: "designation4",
//     },
//   ];

//   const items = [
//     {
//       id: 1,
//       icon: <RiFootprintFill color="" size="50px" className="flex" />,
//       label: "FOOTFALLS",
//       count: count,
//       ref: counterRef,
//     },
//     {
//       id: 2,
//       icon: <FaBuilding color="" size="50px" className="flex" />,
//       label: "Colleges",
//       count: count1,
//       ref: counterRef1,
//     },
//     {
//       id: 3,
//       icon: <BsPeopleFill color="" size="50px" className="flex" />,
//       label: "Visitors",
//       count: count2,
//       ref: counterRef2,
//     },
//     {
//       id: 4,
//       icon: <BsPeopleFill color="" size="50px" className="flex" />,
//       label: "Audience",
//       count: count2+2000,
//       ref: counterRef2,
//     },
//     {
//       id: 5,
//       icon: <BsPeopleFill color="" size="50px" className="flex" />,
//       label: "Paticipants",
//       count: count2-1000,
//       ref: counterRef2,
//     },
//   ];

//   return (
//     <div className="w-full h-full text-purple-300">
//       <div className="flex flex-col items-center text-purple-200">
//         <div className=" text-8xl md:text-7xl sm:text-6xl xs:text-4xl pt-[75vh] px-3">
//           <TypeWriterEffect
//             textStyle={{ fontFamily: "Red Hat Display" }}
//             startDelay={100}
//             cursorColor="black"
//             text="PARAMARSH" //𝖕𝖆𝖗𝖆𝖒𝖆𝖗𝖘𝖍
//             typeSpeed={150}
//             eraseSpeed={100}
//           />
//         </div>
//         <div className="text-6xl md:text-5xl sm:text-4xl xs:text-2xl px-2">
//           <TypeWriterEffect
//             textStyle={{ fontFamily: "Red Hat Display" }}
//             startDelay={500}
//             cursorColor="black"
//             text="!DEAS !NF!N!TE" //𝔦𝔡𝔢𝔞𝔰 𝔦𝔫𝔣𝔦𝔫𝔦𝔱𝔢
//             typeSpeed={75}
//             eraseSpeed={100}
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-center text-purple-200">
//         <div
//           className="text-5xl md:text-4xl xs:text-xl pt-[20vh] text-center my-element"
//           data-aos="fade-up"
//         >
//           The Otaku Elysian
//         </div>
//         <div className=" text-lg px-[10vw] md:px-[5vw] pt-[10vh] text-center xs:text-sm " data-aos="fade-down">
//             Set sail into a realm adorned with mesmerizing depictions, where the
//             enigmatic splendour of beloved fictional personas dances before your
//             very gaze. Embark on this incredible odyssey as we reminisce some
//             cherished moments where tears came from our hearts to our eyes as
//             Itachi delicately flicks his younger sibling on the forehead in his
//             last moments, as Luffy warmly embraces his dear brother Ace, as
//             Kurama teams up with Naruto to defeat Uchiha Madara, and when
//             Tanjiro valiantly clashes to safeguard his beloved sister. Witness
//             these exceptional characters within the meticulously woven tapestry
//             crafted by Team Paramarsh, where the magic unfolds and captivates
//             your senses.
//           </div>
//           <div className="text-lg px-[10vw] md:px-[5vw] pt-[1vh] text-center xs:text-sm"  data-aos="fade-down">
//             Blaze a trail on an exhilarating journey through the enthralling
//             tunnel, delving into the cartel of animated amazement. This year,
//             immerse yourself in the grandeur of ecstasy with "The Otaku Elysian"
//             theme and engage in camaraderie with fellow Otakus. Arigato!
//           </div>
//       </div>
//       <div className="flex items-center flex-col py-[5vh]">
//         <button className="text-center btn p-2">
//           <Link to="/about">Know More</Link>
//         </button>
//       </div>
//       <div className="flex flex-col items-center pt-32">
//         <div
//           className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"
//           data-aos="fade-up"
//         >
//           Glimpses
//         </div>
//       </div>
//       <div
//         className="flex flex-wrap items-center justify-center"
//         data-aos="zoom-in"
//       >
//         <div className="w-[560px] p-5 sm:w-full">
//           <RespoYTVid videoId="bqyl3G9LV0g" />
//         </div>
//         <div className="w-[560px] p-5 sm:w-full">
//           <RespoYTVid videoId="iiCtzpkauRw" />
//         </div>
//         <div className="w-[560px] p-5 sm:w-full">
//           <RespoYTVid videoId="aA2hsVLi3ac" />
//         </div>
//       </div>
//       <div className="flex flex-col items-center pt-32">
//         <div
//           className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"
//           data-aos="fade-up"
//         >
//           Testimonials
//         </div>
//       </div>
//       <Testimonials />
//       <div className="overflow-hidden flex-wrap pt-32">
//           <div className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"  data-aos="fade-up">
//             Patronages
//           </div>
//           {<Patronages />}
//         </div>
//       <div className="flex-row flex md:flex-col my-10">
//         <div className="flex flex-col w-1/2 md:w-full flex-wrap md:flex-row">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`py-[1vh] text-purple-200 ${
//                 message.showFullMessage
//                   ? "px-[3vw]"
//                   : "w-[50vw] sm:w-[100vw] px-[1vw] flex h-[300px] md:h-auto"
//               }`}
//             >
//               <div
//                 className={`relative overflow-hidden ${
//                   message.showFullMessage ? "" : "glow"
//                 }`}
//               >
//                 {message.showFullMessage && (
//                   <button
//                     className="bg-transparent border-0 float-right"
//                     onClick={() => message.setShowFullMessage(false)}
//                   >
//                     <RxCross2
//                       size={25}
//                       className="self-center hover:scale-125 transition duration-100"
//                     />
//                   </button>
//                 )}
//                 <div className="w-full  h-[300px] md:h-auto p-5 flex bg-black/30 rounded-xl backdrop-blur-sm relative z-10">
//                   <div className="w-full p-5 md:p-0 relative">
//                     <div
//                       className="flex flex-row md:flex-col-reverse items-center justify-center h-full"
//                       data-aos="flip-down"
//                     >
//                       <div
//                         className={`w-[60%] md:w-full shadow-md text-justify`}
//                       >
//                         <div className="font-bold md:text-center" data-aos="">
//                           {message.name}
//                         </div>
//                         <div
//                           className="font-bold pb-5 md:text-center"
//                           data-aos=""
//                         >
//                           {message.designation}
//                         </div>
//                         <FaQuoteLeft color="purple" size="15px" />
//                         <p
//                           className={`sm:text-sm ${
//                             message.showFullMessage ? "" : "truncate"
//                           }`}
//                           data-aos={`${message.showFullMessage ? "" : ""}`}
//                         >
//                           {message.msg}
//                         </p>
//                         <div>
//                         {!message.showFullMessage && (
//                           <button
//                             className="text-purple-200 underline pt-2"
//                             onClick={() => {
//                               message.setShowFullMessage(true);
//                               messages.forEach((m) => {
//                                 if (m.id !== message.id) {
//                                   m.setShowFullMessage(false);
//                                 }
//                               });
//                             }}
//                           >
//                             Read More
//                           </button>
//                         )}
//                       </div>
//                       <div className="flex items-center justify-center float-right p-2">
//                         <img
//                           src={message.image}
//                           alt=""
//                           className="w-60 rounded-2xl border-4 border-purple-400"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex w-1/2 md:w-full text-purple-200 flex-col">
//           <div className="flex flex-row p-10 h-[150px] justify-center items-center">
//             <TfiStatsUp color="" size="40px" className="flex" />
//             <p className="text-3xl w-full flex px-5">Statistics :</p>
//           </div>
//           <div className="w-full flex flex-col md:flex-row md:flex-wrap h-[1050px] md:h-[500px] xs:h-[1000px] items-center justify-center gap-2 xs:gap-0">
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="w-[55%] h-[20%] flex flex-row md:w-[31%] md:h-[48%] sm:h-[31%] sm:w-[48%] xs:h-[18%] xs:w-[75%] sm:p-1 ring-fuchsia-700 ring-2 rounded-xl bg-black/40 backdrop-blur-sm hover:-translate-y-3 transition duration-300 items-end my-2"
//                 ref={item.ref}
//               >
//                 <div className="flex flex-col items-center justify-center w-full">
//                   {item.icon}
//                   <div className="text-xl md:text-lg">{item.label}</div>
//                   <div className="items-center pb-3 justify-center w-full flex text-3xl md:text-xl">
//                     {item.count}+
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // fade: Fades the element in or out.
// // fade-up: Fades the element in and moves it upward.
// // fade-down: Fades the element in and moves it downward.
// // fade-left: Fades the element in and moves it to the left.
// // fade-right: Fades the element in and moves it to the right.
// // zoom-in: Zooms in on the element.
// // zoom-out: Zooms out from the element.
// // slide-up: Slides the element upward.
// // slide-down: Slides the element downward.
// // slide-left: Slides the element to the left.
// // slide-right: Slides the element to the right.
// // flip-up: Flips the element upward.
// // flip-down: Flips the element downward.
// // flip-left: Flips the element to the left.
// // flip-right: Flips the element to the right.
// // rotate: Rotates the element.
// // bounce: Bounces the element.

// // concepts that might be used :
// // propTypes & defaultProps


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import images from "../assets/shubh/images";
import { RxCross2 } from "react-icons/rx";
import Testimonials from "./Testimonials";
import RespoYTVid from "./RespoYTVid";
import { RiFootprintFill } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { FaBuilding } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import Patronages from "../components/Patronages";

const Home = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const counterRef = useRef(null);
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count < 32000) {
          setCount((prevCount) => prevCount + 160);
        }
      });
    });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [count]);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count1 < 200) {
          setCount1((prevCount) => prevCount + 1);
        }
      });
    });
    if (counterRef1.current) {
      observer1.observe(counterRef1.current);
    }
    return () => {
      if (counterRef1.current) {
        observer1.unobserve(counterRef1.current);
      }
    };
  }, [count1]);

  useEffect(() => {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && count2 < 4000) {
          setCount2((prevCount) => prevCount + 20);
        }
      });
    });
    if (counterRef2.current) {
      observer2.observe(counterRef2.current);
    }
    return () => {
      if (counterRef2.current) {
        observer2.unobserve(counterRef2.current);
      }
    };
  }, [count2]);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      offset: 0, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Easing function for the animation
      // once:true
    });
  }, []);

  const [showFullMessage1, setShowFullMessage1] = useState(false);
  const [showFullMessage2, setShowFullMessage2] = useState(false);
  const [showFullMessage3, setShowFullMessage3] = useState(false);
  const [showFullMessage4, setShowFullMessage4] = useState(false);

  const msg1 = showFullMessage1
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
  const msg2 = showFullMessage2
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
  const msg3 = showFullMessage3
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";
  const msg4 = showFullMessage4
    ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim metus orci, quis gravida nunc iaculis non. Vestibulum malesuada nisl vitae mauris faucibus, ac interdum elit bibendum."
    : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim atque sint veniam sunt ratione voluptate, sit, illum id qui dignissimos vero.";

  const messages = [
    {
      id: 1,
      msg: msg1,
      showFullMessage: showFullMessage1,
      setShowFullMessage: setShowFullMessage1,
      image: images.GL,
      name: "name1",
      designation: "designation1",
    },
    {
      id: 2,
      msg: msg2,
      showFullMessage: showFullMessage2,
      setShowFullMessage: setShowFullMessage2,
      image: images.GL,
      name: "name2",
      designation: "designation2",
    },
    {
      id: 3,
      msg: msg3,
      showFullMessage: showFullMessage3,
      setShowFullMessage: setShowFullMessage3,
      image: images.GL,
      name: "name3",
      designation: "designation3",
    },
    {
      id: 4,
      msg: msg4,
      showFullMessage: showFullMessage4,
      setShowFullMessage: setShowFullMessage4,
      image: images.GL,
      name: "name4",
      designation: "designation4",
    },
  ];

  const items = [
    {
      id: 1,
      icon: <RiFootprintFill color="" size="50px" className="flex" />,
      label: "FOOTFALLS",
      count: count,
      ref: counterRef,
    },
    {
      id: 2,
      icon: <FaBuilding color="" size="50px" className="flex" />,
      label: "Colleges",
      count: count1,
      ref: counterRef1,
    },
    {
      id: 3,
      icon: <BsPeopleFill color="" size="50px" className="flex" />,
      label: "Visitors",
      count: count2,
      ref: counterRef2,
    },
    {
      id: 4,
      icon: <BsPeopleFill color="" size="50px" className="flex" />,
      label: "Audience",
      count: count2 + 2000,
      ref: counterRef2,
    },
    {
      id: 5,
      icon: <BsPeopleFill color="" size="50px" className="flex" />,
      label: "Participants",
      count: count2 - 1000,
      ref: counterRef2,
    },
  ];

  return (
    <div className="w-full h-full text-purple-300">
      <div className="flex flex-col items-center text-purple-200">
        <div className=" text-8xl md:text-7xl sm:text-6xl xs:text-4xl pt-[75vh] px-3">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={100}
            cursorColor="black"
            text="PARAMARSH" //𝖕𝖆𝖗𝖆𝖒𝖆𝖗𝖘𝖍
            typeSpeed={150}
            eraseSpeed={100}
          />
        </div>
        <div className="text-6xl md:text-5xl sm:text-4xl xs:text-2xl px-2">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Red Hat Display" }}
            startDelay={500}
            cursorColor="black"
            text="!DEAS !NF!N!TE" //𝔦𝔡𝔢𝔞𝔰 𝔦𝔫𝔣𝔦𝔫𝔦𝔱𝔢
            typeSpeed={75}
            eraseSpeed={100}
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-purple-200">
        <div
          className="text-5xl md:text-4xl xs:text-xl pt-[20vh] text-center my-element"
          data-aos="fade-up"
        >
          The Otaku Elysian
        </div>
        <div
          className="text-lg px-[10vw] md:px-[5vw] pt-[10vh] text-center xs:text-sm "
          data-aos="fade-down"
        >
          Set sail into a realm adorned with mesmerizing depictions, where the
          enigmatic splendor of beloved fictional personas dances before your
          very gaze. Embark on this incredible odyssey as we reminisce some
          cherished moments where tears came from our hearts to our eyes as
          Itachi delicately flicks his younger sibling on the forehead in his
          last moments, as Luffy warmly embraces his dear brother Ace, as
          Kurama teams up with Naruto to defeat Uchiha Madara, and when
          Tanjiro valiantly clashes to safeguard his beloved sister. Witness
          these exceptional characters within the meticulously woven tapestry
          crafted by Team Paramarsh, where the magic unfolds and captivates
          your senses.
        </div>
        <div
          className="text-lg px-[10vw] md:px-[5vw] pt-[1vh] text-center xs:text-sm"
          data-aos="fade-down"
        >
          Blaze a trail on an exhilarating journey through the enthralling
          tunnel, delving into the cartel of animated amazement. This year,
          immerse yourself in the grandeur of ecstasy with "The Otaku Elysian"
          theme and engage in camaraderie with fellow Otakus. Arigato!
        </div>
      </div>
      <div className="flex items-center flex-col py-[5vh]">
        <button className="text-center btn p-2">
          <Link to="/about">Know More</Link>
        </button>
      </div>
      <div className="flex flex-col items-center pt-32">
        <div
          className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"
          data-aos="fade-up"
        >
          Glimpses
        </div>
      </div>
      <div
        className="flex flex-wrap items-center justify-center"
        data-aos="zoom-in"
      >
        <div className="w-[560px] p-5 sm:w-full">
          <RespoYTVid videoId="bqyl3G9LV0g" />
        </div>
        <div className="w-[560px] p-5 sm:w-full">
          <RespoYTVid videoId="iiCtzpkauRw" />
        </div>
        <div className="w-[560px] p-5 sm:w-full">
          <RespoYTVid videoId="aA2hsVLi3ac" />
        </div>
      </div>
      <div className="flex flex-col items-center pt-32">
        <div
          className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"
          data-aos="fade-up"
        >
          Testimonials
        </div>
      </div>
      <Testimonials />
      <div className="overflow-hidden flex-wrap pt-32">
        <div
          className="flex text-purple-300 font-bold text-5xl sm:text-3xl justify-center mb-10"
          data-aos="fade-up"
        >
          Patronages
        </div>
        {<Patronages />}
      </div>
      <div className="flex-row flex md:flex-col my-10">
        <div className="flex flex-col w-1/2 md:w-full flex-wrap md:flex-row">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`py-2 text-purple-200 ${
                message.showFullMessage
                  ? "px-3"
                  : "w-[50vw] sm:w-[100vw] px-1 flex h-[300px] md:h-auto"
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  message.showFullMessage ? "" : "glow"
                }`}
              >
                {message.showFullMessage && (
                  <button
                    className="bg-transparent float-right"
                    onClick={() => message.setShowFullMessage(false)}
                  >
                    <RxCross2
                      size={25}
                      className="self-center hover:scale-125 transition duration-100"
                    />
                  </button>
                )}
                <div className="w-full h-[300px] md:h-auto p-5 flex bg-black/30 rounded-xl backdrop-blur-sm relative z-10">
                  <div className="w-full p-2 md:p-0 relative">
                    <div
                      className="flex flex-row md:flex-col-reverse items-center justify-center h-full"
                      data-aos="flip-down"
                    >
                      <div
                        className={`w-[60%] md:w-full shadow-md text-justify`}
                      >
                        <p className="font-bold md:text-center" data-aos="">
                          {message.name}
                        </p>
                        <p
                          className="font-bold pb-5 md:text-center"
                          data-aos=""
                        >
                          {message.designation}
                        </p>
                        <FaQuoteLeft color="purple" size="15px" />
                        <p
                          className={`sm:text-sm  ${
                            message.showFullMessage ? "" : "truncate"
                          }`}
                          data-aos={`${message.showFullMessage ? "" : ""}`}
                        >
                          {message.msg}
                        </p>
                        <p>
                          {!message.showFullMessage && (
                            <button
                              className="text-purple-200 text-sm underline pt-2"
                              onClick={() => {
                                message.setShowFullMessage(true);
                                messages.forEach((m) => {
                                  if (m.id !== message.id) {
                                    m.setShowFullMessage(false);
                                  }
                                });
                              }}
                            >
                              Read More
                            </button>
                          )}
                        </p>
                      </div>
                        <div className="  flex items-center justify-center float-right p-1">
                          <img
                            src={message.image}
                            alt=""
                            className="w-60 rounded-2xl border-4 border-purple-400"
                          />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-1/2 md:w-full text-purple-200 flex-col">
          <div className="flex flex-row p-10 h-[150px] justify-center items-center">
            <TfiStatsUp color="" size="40px" className="flex" />
            <p className="text-3xl w-full flex px-5">Statistics :</p>
          </div>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap h-[1050px] md:h-[500px] xs:h-[1000px] items-center justify-center gap-2 xs:gap-0">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-[55%] h-[20%] flex flex-row md:w-[31%] md:h-[48%] sm:h-[31%] sm:w-[48%] xs:h-[18%] xs:w-[75%] sm:p-1 ring-fuchsia-700 ring-2 rounded-xl bg-black/40 backdrop-blur-sm hover:-translate-y-3 transition duration-300 items-end my-2"
                ref={item.ref}
              >
                <div className="flex flex-col items-center justify-center w-full">
                  {item.icon}
                  <div className="text-xl md:text-lg">{item.label}</div>
                  <div className="items-center pb-3 justify-center w-full flex text-3xl md:text-xl">
                    {item.count}+
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
