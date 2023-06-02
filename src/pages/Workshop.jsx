import React from "react";
import i1 from "../components/grooming.jpeg";
import i2 from "../components/5g.jpg";
import i3 from "../components/stock market.jpeg";
const Workshop = () => {
  return (
    <div className="w-full h-full bg-black items-center justify-center text-white flex flex-wrap">
      <div className="text-5xl md:text-4xl sm:text-3xl flex justify-center text-center font-bold text-white py-[5vh] px-[5vw] w-full">
        WORK-SHOPS OF PARAMARSH'23
      </div>
      <div className="w-[30vw] p-10 md:w-[50vw] sm:w-[100vw]">
        <img src={i1} alt="" className="w-full" />
        <p className="text-xl text-center p-1 font-semibold">
          Corporate Grooming & Etiquettes
        </p>
        <p className="text-justify p-1">
          First impressions are important as they represent your personality and
          organization. Moreover, surveys have revealed that people intuitively
          correlate groomed personality with concepts like better, smart,
          confident or even successful. Would Harvey Specter be the strong,
          intimidating and charming man if it wasn't for his branding and
          etiquette? Personal grooming and etiquette signify your individuality
          and ethics. The exclusive opportunity brought to you by Paramarsh to
          master charisma So You can Mark your presence without uttering a
          phrase. Enroll now to stand out from an ordinary crowd by honing
          yourself in grooming & etiquette.
        </p>
      </div>
      <div className="w-[30vw] p-10 md:w-[50vw] sm:w-[100vw]">
        <img src={i2} alt="" className="w-full" />
        <p className="text-xl text-center p-1 font-semibold">
          Empowering 5G Technology in India
        </p>
        <p className="text-justify p-1">
          Isnt it annoying when your internet sucks and the buffering makes it
          difficult to watch your favourite shows? The only solution to this
          dilemma is the latest 5G Technology enrooting our lives and paving way
          for nation's digital transformation. Our Government has directed the
          path to a brighter future by laying the idea of 5G technology in every
          nook and corner. This milestone unveils huge chances for India to
          become a high-tech hub globally. Get a chance to enhance your
          knowledge about the 5G technology and knowing a world away from these
          technical degrees through our exclusive workshop which will leave your
          brain tabs open.
        </p>
      </div>
      <div className="w-[30vw] p-10 md:w-[50vw] sm:w-[100vw]">
        <img src={i3} alt="" className="w-full" />
        <p className="text-xl text-center p-1 font-semibold">
          The Stock Market and Passive Income
        </p>
        <p className="text-justify p-1">
          An individual can actualize their scope of ambitions with ethical
          knowledge of Passive Income even if they are a Beginner. Passive
          income can be generated through investing in certain financial stocks
          which will generate wealth without any need of work. We bring to you
          the most established route for investing & trading in the Stock Market
          while generating passive income through our workshop on "The Stock
          Market and Passive Income".
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center py-[5vh] w-[100vw]">
        <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
          REGISTER HERE
        </button>
      </div>
    </div>
  );
};

export default Workshop;
