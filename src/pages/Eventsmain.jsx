import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import images from "../assets/shubh/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Eventsmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.eventsData;
  const key = location.state.key;
  const [pageKey, setPageKey] = useState(key);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  AOS.init({
    duration: 500, 
    offset: 100, 
    easing: "ease-in-out", 
  });
  useEffect(() => {
    setData(allData[pageKey]);
  }, [allData]);

  const handleNext = () => {
    if (pageKey === allData.length - 1) {
      setData(allData[0]);
      setPageKey(0);
    } else {
      setData(allData[pageKey + 1]);
      setPageKey(pageKey + 1);
    }
  };
  const handlePrev = () => {
    if (pageKey === 0) {
      setData(allData[allData.length - 1]);
      setPageKey(allData.length - 1);
    } else {
      setData(allData[pageKey - 1]);
      setPageKey(pageKey - 1);
    }
  };
  return (
    <div
      className="w-full h-full text-purple-300 text-center px-[10vw] py-[5vh] sm:p-0"
      onLoad={handleScrollToTop}
    >
      <div className="overflow-hidden">
        <div className="relative border-b-2 border-purple-500">
          <img
            src={data?.img}
            alt={data?.title}
            className="w-full h-[700px] sm:h-auto"
            data-aos="fade-down"
          />
          <p className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-black/0 to-black"></p>
          <p
            className="absolute bottom-14 xs:bottom-11 left-0 text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[3vw] font-bold "
            data-aos=""
          >
            {data?.title}
          </p>
          {data?.title !== "Faneticz" && (
            <p
              className="absolute bottom-5 left-0 text-2xl md:text-xl sm:text-base px-[3vw] font-semibold"
              data-aos=""
            >
              {" "}
              Participation : {data?.participation}
            </p>
          )}
          {data?.title !== "Faneticz" && (
            <button
              className="absolute bottom-5 right-5 text-center py-5 px-8 cursor-pointer btn sm:py-2 sm:px-5 xs:px-2"
              data-aos="fade-left"
            >
              Register
            </button>
          )}
        </div>

        {data?.title === "Faneticz" && (
          <div className="flex  text-center flex-wrap justify-center bg-black/30">
            <div className="w-1/2 px-[1vw] md:w-full">
              <img
                src={images.ic1}
                alt="View-Finder"
                className="bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 my-5"
                data-aos="fade-right"
              />
              <p
                className="text-xl font-semibold bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 mb-5"
                data-aos="fade-right"
              >
                View-Finder
              </p>
              <p
                className="text-justify h-[180px] md:h-auto bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 mb-5"
                data-aos="fade-right"
              >
                It's often said that if your imagination is out of focus, you
                can't expect your camera to take the perfect shot. Photography
                is an austere and blazing poetry of the real. Try and test out
                your photography skills at Paramarsh's adjoining event ' View
                Finder'.
              </p>
              <div
                className="text-left bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-8"
                data-aos="fade-right"
              >
                <p>Total Fees : ₹30 /-</p>
                <p>Participation : Individual</p>
                <p className="py-5">Rules :-</p>
                <ol className="list-decimal h-[525px] md:h-auto">
                  <li>
                    All submitted photos must contain the original metadata
                    information.
                  </li>
                  <li>
                    The photograph must be original and not copied from some
                    other photographer or social media sources.
                  </li>
                  <li>
                    There must be no border(s), logo(s), copyright mark(s),
                    identifying mark(s), or any other visible reference(s).
                  </li>
                  <li>
                    Advanced editing used to create illusions, deceptions,
                    manipulations, and the adding or removing elements within
                    the frame is prohibited.
                  </li>
                  <li>
                    Only basic editing like colour balance, light balance and
                    crop are allowed.
                  </li>
                  <li>
                    Photos submitted must be at least 640 pixels on the shorter
                    side, and no more than 2000 pixels on the longer side.
                    Photos must be in JPEG format.
                  </li>
                  <li>
                    Format of file name must be : (first name - middle name -
                    surname)
                  </li>
                  <li>The last date for submission is 1st January 2023.</li>
                </ol>
                <ul className="list-disc py-5">
                  <li className="md:py-3 h-[50px] md:h-auto">
                    How can I submit my photograph for View-Finder?
                  </li>
                  <div className="h-[225px] md:h-auto">
                    <p>
                      You have to submit your photo on
                      viewfinder.paramarsh22@gmail.com{" "}
                    </p>
                    <p>Format of Email :-</p>
                    <p>
                      Subject : first name - middle name - surname (same as file
                      name), Mobile number
                    </p>
                    <p>From the "insert file" section you have to add,</p>
                    <p>
                      Your photograph for competition (only one photograph is
                      allowed)
                    </p>
                    <p>Your registration ticket for the VIEW-FINDER.</p>
                  </div>
                  <li className="py-3">
                    Winners will be selected in the following manner:-
                  </li>
                  <p>
                    The best ones will be shortlisted by our team from all
                    entries.
                  </p>
                  <p>
                    From those shortlisted ones, the winner will be decided on
                    the basis of polls done on our official Instagram account.
                  </p>
                </ul>
                <p className="pt-5">Topics :-</p>
                <ul className="list-disc">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="text-left pt-5" data-aos="fade-right">
                  <p>For Queries,</p>
                  <p>Contact :-</p>
                  <p>Shrey Limbani: +91 8320088076</p>
                </div>
                <div className="text-left py-5" data-aos="fade-right">
                  <p>For Submiting,</p>
                  <p>Email:- </p>
                  <p> viewfinder.paramarsh22@gmail.com</p>
                </div>
                <div
                  className="flex items-center flex-wrap justify-center py-5"
                  data-aos="fade-right"
                >
                  <button className="text-center p-2 btn">
                    REGISTER HERE
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-[1vw] md:w-full md:pt-10">
              <img
                src={images.ic2}
                alt="Meme-Mania"
                className="bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 my-5"
                data-aos="fade-left"
              />
              <p
                className="text-xl font-semibold bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 mb-5"
                data-aos="fade-left"
              >
                Meme-Mania
              </p>
              <p
                className="text-justify bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5 mb-5  h-[180px] md:h-auto"
                data-aos="fade-left"
              >
                Sarcasm and Humor together are rare qualities but also essential
                for memes. If you can pull off both and make your meme hilarious
                then we bring you "Meme Mania", where you get a platform to show
                your creativity and win prizes.
              </p>
              <div
                className="text-left bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-8"
                data-aos="fade-left"
              >
                <p>Total Fees : ₹20 /-</p>
                <p>Participation : Individual</p>
                <p className="py-5">Rules :-</p>
                <ol className="list-decimal h-[525px] md:h-auto">
                  <li>One meme per participant.</li>
                  <li>
                    Memes should not target any religion, community or
                    sentiments of any individual directly.
                  </li>
                  <li>
                    Adult content will not be entertained and would lead to
                    direct disqualification.
                  </li>
                  <li>
                    Format of file name must be : (first name - middle name -
                    surname).
                  </li>

                  <li> Only photo meme is allowed.</li>
                </ol>
                <ul className="list-disc py-5">
                  <li className="md:py-3 h-[50px] md:h-auto">
                    How can I submit my meme for Meme-Mania?
                  </li>
                  <div className="h-[225px] md:h-auto">
                    <p>
                      You have to submit your photo on
                      mememania.paramarsh22@gmail.com
                    </p>
                    <p>Format of Email :-</p>
                    <p>
                      Subject : first name - middle name - surname (same as file
                      name), Mobile number
                    </p>
                    <p>From the "insert file" section you have to add,</p>
                    <p>Your meme for competition (only one meme is allowed)</p>
                    <p>Your registration ticket for the MEME-MANIA.</p>
                  </div>
                  <li className="py-3">
                    Winners will be selected in the following manner:-
                  </li>
                  <p>
                    The best ones will be shortlisted by our team from all
                    entries.
                  </p>
                  <p>
                    From those shortlisted ones, the winner will be decided on
                    the basis of polls done on our official Instagram account.
                  </p>
                </ul>
                <p className="pt-5">Topics :-</p>
                <ul className="list-disc">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div className="text-left pt-5" data-aos="fade-left">
                  <p>For Queries,</p>
                  <p>Contact :-</p>
                  <p>Jaynesh Ghori : +91 6356343419</p>
                </div>
                <div className="text-left py-5" data-aos="fade-left">
                  <p>For Submiting,</p>
                  <p>Email:- </p>
                  <p> mememania.paramarsh22@gmail.com</p>
                </div>
                <div
                  className="flex items-center flex-wrap justify-center py-5"
                  data-aos="fade-left"
                >
                  <button className="text-center p-2 btn">
                    REGISTER HERE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {data?.title !== "Faneticz" && (
          <div className="bg-black/30 m-1">
            <div
              className="text-2xl md:text-xl sm:text-lg p-5 pt-10 mb-5 font-semibold bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl"
              data-aos="fade-right"
            >
              {data?.quote}
              <div
                className=" text-lg sm:text-sm text-justify pt-5"
                data-aos="fade-left"
              >
                {data?.desc}
              </div>
            </div>
            <div
              className="mt-5 text-center bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
              data-aos="fade-right"
            >
              <p> Total Fees : ₹{data?.fees} /-</p>
            </div>
            <div
              className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
              data-aos="fade-left"
            >
              <p> Rules :</p>
              <ol className="list-none p-5">
                <li>{data?.r1}</li>
                <li>{data?.r2}</li>
                <li>{data?.r3}</li>
                <li>{data?.r4}</li>
                <li>{data?.r5}</li>
                <li>{data?.r6}</li>
                <li>{data?.r7}</li>
              </ol>
            </div>
            <div
              className=" text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
              data-aos="fade-right"
            >
              <p>Judging Criteria :</p>
              <ul className="list-disc p-5">
                <li>{data?.j1}</li>
                <li>{data?.j2}</li>
                <li>{data?.j3}</li>
                <li>{data?.j4}</li>
              </ul>
            </div>
            <div
              className="text-left mt-5 bg-black/30 backdrop-blur-sm shadow-md shadow-purple-300 rounded-2xl p-5"
              data-aos="fade-left"
            >
              <p>For Queries,</p>
              <p>Contact :-</p>
              <p>Varshil Kotecha : +91 9428839058</p>
            </div>
          </div>
        )}
        <div className="flex items-center flex-wrap p-[5vh] justify-center space-x-[10vw]">
          {data?.title !== "Eloquence" && (
            <button
              className="text-center p-2 btn"
              onClick={handlePrev}
              data-aos="zoom-in"
            >
              PREVIOUS
            </button>
          )}
          {data?.title !== "Adrenaline-Rush" && (
            <button
              className="text-center p-2 btn"
              onClick={handleNext}
              data-aos="zoom-in"
            >
              NEXT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eventsmain;
