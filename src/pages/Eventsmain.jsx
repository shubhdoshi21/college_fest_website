import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import images from "../assets/shubh/images";
const Eventsmain = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const allData = location.state.eventsData;
  const key = location.state.key;
  const [pageKey, setPageKey] = useState(key);

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
    <div className="w-full h-full text-white text-center">
      <div className="flex items-center justify-center">
        <img
          src={data?.img}
          alt={data?.title}
          className="w-[90vw] px-[3vw] pt-[10vh]"
        />
      </div>
      {data?.title === "Faneticz" && (
        <div className="flex  text-white text-center flex-wrap py-[10vh] justify-center px-[10vw]">
          <div className="w-[40vw] px-[1vw] md:w-[90vw]">
            <img src={images.ic1} alt="View-Finder" className="px-[5vw]" />
            <p className="py-[3vh] text-xl font-semibold">View-Finder</p>
            <p className="text-justify pb-[3vh]">
              It's often said that if your imagination is out of focus, you
              can't expect your camera to take the perfect shot. Photography is
              an austere and blazing poetry of the real. Try and test out your
              photography skills at Paramarsh's adjoining event ' View Finder'.
            </p>
            <div className="text-left">
              <p>Total Fees : ₹30 /-</p>
              <p>Participation : Individual</p>
              <p className="py-[3vh]">Rules :-</p>
              <ol className="list-decimal">
                <li>
                  All submitted photos must contain the original metadata
                  information.
                </li>
                <li>
                  The photograph must be original and not copied from some other
                  photographer or social media sources.
                </li>
                <li>
                  There must be no border(s), logo(s), copyright mark(s),
                  identifying mark(s), or any other visible reference(s).
                </li>
                <li>
                  Advanced editing used to create illusions, deceptions,
                  manipulations, and the adding or removing elements within the
                  frame is prohibited.
                </li>
                <li>
                  Only basic editing like colour balance, light balance and crop
                  are allowed.
                </li>
                <li>
                  Photos submitted must be at least 640 pixels on the shorter
                  side, and no more than 2000 pixels on the longer side. Photos
                  must be in JPEG format.
                </li>
                <li>
                  Format of file name must be : (first name - middle name -
                  surname)
                </li>
                <li>The last date for submission is 1st January 2023.</li>
              </ol>
              <ul className="list-disc py-[3vh]">
                <li className="py-[1vh]">
                  How can I submit my photograph for View-Finder?
                </li>
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
                <li className="py-[1vh]">
                  Winners will be selected in the following manner:-
                </li>
                <p>
                  The best ones will be shortlisted by our team from all
                  entries.
                </p>
                <p>
                  From those shortlisted ones, the winner will be decided on the
                  basis of polls done on our official Instagram account.
                </p>
              </ul>
              <p className="pt-[3vh]">Topics :-</p>
              <ul className="list-disc">
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="text-left pt-[5vh]">
                <p>For Queries,</p>
                <p>Contact :-</p>
                <p>Shrey Limbani: +91 8320088076</p>
              </div>
              <div className="text-left py-[5vh]">
                <p>For Submiting,</p>
                <p>Email:- </p>
                <p> viewfinder.paramarsh22@gmail.com</p>
              </div>
              <div className="flex items-center flex-wrap justify-center py-[5vh]">
                <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
                  REGISTER HERE
                </button>
              </div>
            </div>
          </div>
          <div className="w-[40vw] px-[1vw] md:w-[90vw]">
            <img src={images.ic2} alt="Meme-Mania" className="px-[5vw]" />
            <p className="py-[3vh] text-xl font-semibold">Meme-Mania</p>
            <p className="text-justify pb-[3vh]">
              Sarcasm and Humor together are rare qualities but also essential
              for memes. If you can pull off both and make your meme hilarious
              then we bring you "Meme Mania", where you get a platform to show
              your creativity and win prizes.
            </p>
            <div className="text-left">
              <p>Total Fees : ₹20 /-</p>
              <p>Participation : Individual</p>
              <p className="py-[3vh]">Rules :-</p>
              <ol className="list-decimal">
                <li>One meme per participant.</li>
                <li>
                  Memes should not target any religion, community or sentiments
                  of any individual directly.
                </li>
                <li>
                  Adult content will not be entertained and would lead to direct
                  disqualification.
                </li>
                <li>
                  Format of file name must be : (first name - middle name -
                  surname).
                </li>

                <li> Only photo meme is allowed.</li>
              </ol>
              <ul className="list-disc py-[3vh]">
                <li className="py-[1vh]">
                  How can I submit my meme for Meme-Mania?
                </li>
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
                <li className="py-[1vh]">
                  Winners will be selected in the following manner:-
                </li>
                <p>
                  The best ones will be shortlisted by our team from all
                  entries.
                </p>
                <p>
                  From those shortlisted ones, the winner will be decided on the
                  basis of polls done on our official Instagram account.
                </p>
              </ul>
              <p className="pt-[3vh]">Topics :-</p>
              <ul className="list-disc">
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="text-left pt-[5vh]">
                <p>For Queries,</p>
                <p>Contact :-</p>
                <p>Jaynesh Ghori : +91 6356343419</p>
              </div>
              <div className="text-left py-[5vh]">
                <p>For Submiting,</p>
                <p>Email:- </p>
                <p> mememania.paramarsh22@gmail.com</p>
              </div>
              <div className="flex items-center flex-wrap justify-center py-[5vh]">
                <button className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80">
                  REGISTER HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {data?.title !== "Faneticz" && (
        <>
          <div className="text-4xl md:text-3xl sm:text-2xl xs:text-xl px-[10vw] py-[5vh] font-bold">
            {data?.title}
          </div>
          <div className="text-2xl md:text-xl sm:text-lg px-[10vw] md:px-[5vw] font-semibold">
            {data?.quote}
          </div>
          <div className=" text-lg sm:text-sm text-justify px-[10vw] md:px-[5vw] ">
            {data?.desc}
          </div>
          <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
            <p> Total Fees : ₹{data?.fees} /-</p>
            <p> Participation : {data?.participation}</p>
          </div>
          <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
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
            <p>Judging Criteria :</p>
            <ul className="list-disc p-5">
              <li>{data?.j1}</li>
              <li>{data?.j2}</li>
              <li>{data?.j3}</li>
              <li>{data?.j4}</li>
            </ul>
          </div>
          <div className="px-[10vw] md:px-[5vw] text-left pt-[5vh]">
            <p>For Queries,</p>
            <p>Contact :-</p>
            <p>Varshil Kotecha : +91 9428839058</p>
          </div>
        </>
      )}
      <div className="flex items-center flex-wrap p-[5vh] justify-center space-x-[10vw]">
        {data?.title !== "Eloquence" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80"
            onClick={handlePrev}
          >
            PREVIOUS
          </button>
        )}
        {data?.title !== "Adrenaline-Rush" && (
          <button
            className="text-center text-white border border-x-white border-y-slate-400 p-2  hover:bg-black/80"
            onClick={handleNext}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Eventsmain;
