import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../assets/Images/Mainbg.jpg";
import border from "../assets/Images/Group 22.svg";
import bg from "../assets/Images/image.png";
import images from "../jsons/images";

export default function EventCategory({
  buttons = [1, 2, 3],
  dates = ["DATE 1", "DATE 2", "DATE 3"],
  venues = ["VENUE 1", "VENUE 2", "VENUE 3"],
  durations = ["DURATION 1", "DURATION 2", "DURATION 3"],
  detailsContent =  ["DETAILS 1", "DETAILS 2", "DETAILS 3"],
  titles = ["TITLE 1", "TITLE 2", "TITLE 3"],
  rulebooks = ["RULEBOOK 1", "RULEBOOK 2", "RULEBOOK 3"],
  numbers =["11111111", "11111111", "11111111"] ,
  emails = ["email1", "email2", "email3"],
  prizeMoney = ["1000", "2000", "3000"],
  registerLinks = ["link1", "link2", "link3"],
  knowMoreLinks = ["link1", "link2", "link3"],
  
}) {

       

  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState("Hello");
  const [bgImage, setBgImage] = useState(bg);
  const [title, setTitle] = useState(titles[0]);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
   const [date, setDate] = useState(dates[0]);
   const [venue, setVenue] = useState(venues[0]);
    const [duration, setDuration] = useState(durations[0]);
    const [rulebook, setRulebook] = useState(rulebooks[0]);
    const [phone, setPhone] = useState(numbers[0]);
    const [email, setEmail] = useState(emails[0]);
    const [prize, setPrize] = useState(prizeMoney[0]);


  useEffect(()=>{
    setActiveButton('details');
    setContent(
      <>
      <div className="p-5 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
      <div className="">
          <h1 className=" font-Orbitron font-extralight">Date: <span className="text-[#cbcbcb] pl-2 text-[30px] ">{date} </span></h1>
        </div>
        <div className="mt-5 font-Orbitron  font-extralight">
          Venue:  <span className="text-[#cbcbcb] pl-2 text-[30px] ">{venue}</span>
        </div>
        <div className="mt-5 font-Orbitron  font-extralight">
          Duration:<span className="text-[#cbcbcb] pl-2 text-[30px] "> {duration}</span>
        </div>
       
      </div>
        
      </>
    );
  },[title])  
  const handleButtonClick = (button) => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        x: 200,
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setActiveButton(button);
          switch (button) {
            case "details":
              setContent(
                <>
                <div className="p-5 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                <div className="">
                    <h1 className=" font-Orbitron font-extralight">Date: {date}</h1>
                  </div>
                  <div className="mt-5 font-Orbitron  font-extralight">
                    Venue: {venue}
                  </div>
                  <div className="mt-5 font-Orbitron  font-extralight">
                    Duration: {duration}
                  </div>
                 
                </div>
                  
                </>
              );
              break;
            case "rulebook":
              setContent(
                <>
                  <div className="flex flex-col h-72">
                    <div className="flex-1 text-md sm:text-2xl md:text-2xl lg:text-xl font-Orbitron sm:p-5 p-2 overflow-y-auto text-white">
                      <p>
                       {rulebook}
                      </p>
                    </div>
                    <div className="flex pt-5 w-full b justify-center ">
                      <button className="bg-[#151515] border-[#5b5656] border-2 text-white FONT-BOLD rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button w-auto">
                        <span className="px-5 font-Orbitron">Know more</span>
                        <span className="underline"></span>
                      </button>
                    </div>
                  </div>
                </>
              );
              break;
            case "contact":
              setContent(<>
                <div className="p-5 font-Orbitron text-2xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-y-2">
                  <div className=" font-extralight">Contact Us</div>
                  <div className="  font-extralight">
                    <p>Phone: {phone}</p>
                    <p>Email: {email} </p>
                  </div>
                </div>
               
              </>);
              break;
            
          }
        },
      });
    }
  };

  const handleDiv2Click = (index) => {
    // Update state first to reflect immediately on click
    setBgImage(images.bgimages[index+1]);
    setTitle(titles[index]);
    setDate(dates[index]);
    setVenue(venues[index]);
    setDuration(durations[index]);
    setPhone(numbers[index]);
    setEmail(emails[index]);
    setPrize(prizeMoney[index]);
    setRulebook(rulebooks[index]);

    // Ensure GSAP animations occur after state updates
    if (titleRef.current) {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.9, ease: "power1.in" }
        );
    }
};
 
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      );
    }
  }, [content]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.9, ease: "power1.in" }
      );
    }
  }, [title]);

  return (
    <>
      <div className="relative flex flex-col lg:flex-row pb-8 lg:min-h-screen w-full background">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 transition-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="relative flex flex-col lg:flex-row w-full h-full">
          <div className="order-2 lg:order-1 h-full w-full sm:justify-evenly sm:-mx-[50px] lg:-mx-0 lg:justify-center lg:w-[45%] flex lg:items-center justify-evenly mt-10 lg:mt-0">
            <div className="text-white w-fit mx-[10px] sm:text-left lg:hidden">
              <h1
                ref={titleRef}
                className="font-bold mb-4 text-2xl lg:text-6xl mt-5 lg:mt-10"
              >
                {title}
              </h1>
              <div className="mt-5 font-extralight">
                <p className="font-Rajdhani">A short description about the event.</p>
              </div>

              <div className="w-full flex justify-start mt-5">
                <button className="bg-[#00000029] text-white FONT-BOLD rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button">
                  REGISTER
                  <span className="underline"></span>
                </button>
              </div>
            </div>
            <div className="relative w-[150px] h-[150px] mx-[10px] lg:w-[300px] lg:h-[300px] mt-40">
              <div
                className="sm:absolute sm:scale-[1.2] sm:inset-0 sm:bg-cover sm:bg-center sm:flex hidden"
                style={{ backgroundImage: `url(${border})` }}
              ></div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={image}
                alt=""
              />
              <div className="text-white font-Orbitron mt-4 sm:mt-10 lg:mt-20 text-center font-extralight text-xl lg:text-3xl">
                Prize Money : {prize}
              </div>
              <div className="lg:w-full lg:flex lg:justify-center lg:mt-5 hidden">
                <button className="bg-[#00000029] font-Rajdhani text-white FONT-BOLD rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button">
                  REGISTER
                  <span className="underline"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 div2 flex flex-row lg:flex-col sm:h-fit md:h-fit lg:w-[10%] space-x-4 lg:space-x-0 lg:space-y-4 gap-y-20 items-start p-10 lg:justify-center justify-evenly mt-16 sm:mt-20 lg:mt-36 ml-2">
            {buttons.map((button, index) => (
              <div
                key={index}
                onClick={() => handleDiv2Click(index, button)}
                className={`w-[60px] h-[60px] border-white border-[px] rounded-full transition-all glow-on-hover`}
              >
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="order-3 lg:order-3 text-white flex flex-col justify-center w-full lg:w-[45%] h-full p-10 lg:p-0">
            <div className="w-full lg:w-[80%] flex flex-col justify-start h-full mt-10 lg:mt-24 ml-0 lg:ml-10">
              <div className="lg:w-full lg:text-left lg:block sm:hidden hidden">
                <h1
                  ref={titleRef}
                  className=" font-Orbitron font-semibold underline-title  italic mb-4 text-4xl lg:text-6xl mt-5 lg:mt-10"
                >
                  {title}
                </h1>
                <div className="mt-5 lg:mt-10 font-extralight">
                  <p className="font-Rajdhani  text-xl"> A short description about the event.</p>
                </div>
              </div>

              <div className="mt-10">
                <div className="flex justify-evenly w-full mb-10 font-extralight">
                  <button
                    className={`bg-[#00000029] font-Rajdhani rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative ${
                      activeButton === "details"
                        ? "underline-active neon-effect"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("details")}
                  >
                    Details
                    <span className="underline"></span>
                  </button>
                  <button
                    className={`bg-[#00000029] font-Rajdhani rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative ${
                      activeButton === "rulebook"
                        ? "underline-active neon-effect"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("rulebook")}
                  >
                    Rulebook
                    <span className="underline"></span>
                  </button>
                  <button
                    className={`bg-[#00000029] rounded-md font-Rajdhani px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative ${
                      activeButton === "contact"
                        ? "underline-active neon-effect"
                        : ""
                    }`}
                    onClick={() => handleButtonClick("contact")}
                  >
                    Contact
                    <span className="underline"></span>
                  </button>
                </div>

                <div className="min-h-[300px] bg-[#0b0b0be3] rounded-2xl opacity-90 text-white flex border-2 py-3 border-[#adb5bd] relative overflow-hidden">
                  <span ref={contentRef} className="overflow-y-auto w-full h-full">
                    {content}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
                .underline {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background-color: white;
                    transition: width 0.3s ease-in-out;
                }
                button:hover .underline {
                    width: 100%;
                }
                .underline-active .underline {
                    width: 100%;
                }
                .neon-effect {
                    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 30px rgba(0, 255, 255, 0.2), 0 0 40px rgba(0, 255, 255, 0.2);
                }
                .neon-button {
                    position: relative;
                    overflow: hidden;
                }
                .neon-button:hover {
                    box-shadow: 0 0 5px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.2), 0 0 30px rgba(0, 255, 255, 0.2), 0 0 40px rgba(0, 255, 255, 0.2);
                }
                .neon-button .underline {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background-color: white;
                    transition: width 0.3s ease-in-out;
                }
                .neon-button:hover .underline {
                    width: 100%;
                }
                .glow-on-hover:hover {
                    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
                }
                .transition-background {
                    transition: background-image 1s ease-in-out;
                }
                .overflow-hidden::-webkit-scrollbar {
                    display: none;
                }
                .overflow-hidden {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
    </>
  );
}