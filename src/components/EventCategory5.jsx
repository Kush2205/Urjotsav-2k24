import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import image from "../assets/Images/Mainbg.jpg";
import image1 from '../assets/events/rocketlauncher-768x922.jpg';
import image2 from "../assets/events/Bridge Contest.png";
import image3 from "../assets/events/Autocad 2.jpg";
import image4 from "../assets/events/hyadraluic arm.jpg";
import border from "../assets/Images/Group 22.svg";
import bg from "../assets/Images/image3.png";
import images from "../jsons/images";

export default function EventCategory({
  buttons = [1, 2, 3, 4],
  dates = ["9-10 Nov", "9-10 Nov", "9-10 Nov", "9-10 Nov"],
  venues = ["RGIPT Campus", "RGIPT Campus", "RGIPT Campus", "RGIPT Campus"],
  durations = ["To be Declared", "To be Declared", "To be Declared", "To be Declared"],
  titles = ["Water Rocket", "Bridge Making Event", "Cad Challenge", "Hydraulic Arm Challenge "],
  captions = [
    ' “Soaring skyward! Our water rocket aims for the stars. Will it break records?  #RocketRush”',
    "“ Cracking the labyrinth code! Our autonomous robots sprint through the maze. Fastest route wins!  #MazeMasters”",
    " “Ink, Ideas, and Intensity: Crafting Designs Under Pressure!” Feel free to tweak it to match the vibe of your event! Good luck to all the participants!",
    "Join the Hydraulic Arm Challenge at #Urjotsav! Test your engineering, design, and problem-solving skills by building a hydraulic arm for exciting tasks."
  ],
  rulebooks = [
    "Design and build a water rocket within the specified dimensions robust enough to withstand the pressure and when launched from the launch pad achieves the maximum air time above ground level along with the specified distance. The team with maximum score achieved i.e,overall total of all the points for air time along with the specified range will be nominated as the winner.",
    "Design and build a bridge within specified dimensions by using popsicle sticks and adhesive which can withstand maximum pressure,is durable and good looking.The bridge with all these qualities will win the game.",
    "It will be an on-spot designing round. Participants will be given a problem statement at the time of the event and they have to submit their design within the specified time limit. ",
    "The Hydraulic Arm Competition challenges participants to design and construct a hydraulic-powered arm capable of performing a series of tasks. The competition tests creativity, engineering skills, and the ability to work under constraints",

  ],
  rulebookLinks = [
    "https://unstop.com/competitions/water-rocket-urjotsav-2k24-the-annual-technical-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technolog-1153066",
    "https://unstop.com/competitions/bridge-making-event-urjotsav-2k24-the-annual-technical-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-te-1153073",
    "https://unstop.com/competitions/cad-challenge-urjotsav-2k24-the-annual-technical-fest-of-rgipt-rajiv-gandhi-institute-of-petroleum-technolo-1153107",
    "https://unstop.com/competitions/hydraulic-arm-challenge-urjotsav-2k24-the-annual-technical-fest-of-rgipt-rajiv-gandhi-institute-of-petroleu-1153131"
  ],
  numbers =["7985344874", "9451465424", "7014909252", "8840974112"] ,
  emails = ["Prabhat Kushwaha", "Ayushi Dwivedi", "Kirti Kavta", "Samarth V Dwivedi"],
  prizeMoney = ["TBD", "TBD", "TBD", "TBD"],
  eventImgs = [image1, image2, image3, image4],
  knowMoreLinks = ["link1", "link2", "link3"],
  
}) {

       

  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState("Hello");
  const [bgImage, setBgImage] = useState(bg);
  const [eventImg, setEventImg] = useState(eventImgs[0]);
  const [title, setTitle] = useState(titles[0]);
  const [caption, setCaption] = useState(captions[0]);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
   const [date, setDate] = useState(dates[0]);
   const [venue, setVenue] = useState(venues[0]);
    const [duration, setDuration] = useState(durations[0]);
    const [rulebook, setRulebook] = useState(rulebooks[0]);
    const [rulebookLink, setRulebookLink] = useState(rulebookLinks[0])
    const [phone, setPhone] = useState(numbers[0]);
    const [email, setEmail] = useState(emails[0]);
    const [prize, setPrize] = useState(prizeMoney[0]);


  useEffect(()=>{
    setActiveButton('details');
    setContent(
      <>
      <div className="p-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
      <div className="">
          <h1 className=" font-Orbitron font-extralight">Date: <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px]">{date} </span></h1>
        </div>
        <div className="mt-5 font-Orbitron  font-extralight">
          Venue:  <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px] ">{venue}</span>
        </div>
        <div className="mt-5 font-Orbitron  font-extralight">
          Duration: <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px] "> {duration}</span>
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
                <div className="p-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <div className="">
                    <h1 className=" font-Orbitron font-extralight">Date: <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px]">{date} </span></h1>
                  </div>
                  <div className="mt-5 font-Orbitron  font-extralight">
                    Venue:  <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px] ">{venue}</span>
                  </div>
                  <div className="mt-5 font-Orbitron  font-extralight">
                    Duration:  <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px]"> {duration}</span>
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
                    <a href={rulebookLink} target="_blank" rel="noopener noreferrer"
                        className="bg-[#151515] border-[#5b5656] border-2 text-white font-bold rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button w-auto">
                      <span className="px-5 font-Orbitron">Know more</span>
                      <span className="underline"></span>
                    </a>
                    </div>
                  </div>
                </>
              );
              break;
            case "contact":
              setContent(<>
                <div className="p-5 font-Orbitron text-[22px] sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-y-2">
                  <div className="font-extralight mb-4 sm:mb-2 pb-2 border-b-2">Contact Us</div>
                  <div className="  font-extralight">
                    <p className="pb-1">Name: <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px]"> {email}</span> </p>
                    <p>Phone:  <span className="text-[#cbcbcb] pl-2 text-[25px] sm:text-[30px] "> {phone}</span></p>
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
    setCaption(captions[index])
    setDate(dates[index]);
    setVenue(venues[index]);
    setDuration(durations[index]);
    setPhone(numbers[index]);
    setEmail(emails[index]);
    setPrize(prizeMoney[index]);
    setRulebook(rulebooks[index]);
    setRulebookLink(rulebookLinks[index]);
    setEventImg(eventImgs[index]);

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
          <div className="order-2 lg:order-1 h-full w-full sm:justify-evenly sm:-mx-[50px] lg:-mx-0 lg:justify-center lg:w-[45%] flex flex-col lg:flex-row items-center lg:items-center justify-evenly mt-10 lg:mt-0">
            <div className="text-white w-fit mx-[10px] sm:text-left lg:hidden">
              <h1
                ref={titleRef}
                className="font-bold mb-4 text-2xl lg:text-4xl mt-5 lg:mt-10"
              >
                {title}
              </h1>
              <div className="mt-5 font-extralight">
                <p className="font-Rajdhani">{caption}</p>
              </div>

              <div className="w-full flex justify-start mt-5">
                <button className="bg-[#00000029] text-white FONT-BOLD rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button">
                  REGISTER
                  <span className="underline"></span>
                </button>
              </div>
            </div>
            <div className="relative w-[80%] sm:w-[150px] sm:h-[150px] mx-[10px] lg:w-[300px] lg:h-[300px] mt-10 lg:mt-40">
              <div
                className="sm:absolute sm:scale-[1.2] sm:inset-0 sm:bg-cover sm:bg-center sm:flex hidden"
                style={{ backgroundImage: `url(${border})` }}
              ></div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={eventImg}
                alt=""
              />
              <div className="text-white font-Orbitron mt-4 flex items-center justify-center sm:mt-10 lg:mt-20 text-center font-extralight text-3xl">
                Prize Money : <span className="text-[#cbcbcb] pl-2 text-[30px]">{prize}</span>
              </div>
              <div className="lg:w-full lg:flex lg:justify-center lg:mt-5 hidden">
                <a href={rulebookLink} target="_blank" rel="noopener noreferrer" className="bg-[#081e26b7] font-semibold text-2xl font-Rajdhani text-white FONT-BOLD rounded-md px-5 py-3 hover:-translate-y-1 hover:text-white transition-all duration-200 relative neon-button">
                  REGISTER
                  <span className="underline"></span>
                </a>
              </div>
            </div>
          </div>

<div className="order-1 lg:order-2 div2 flex flex-row lg:flex-col sm:h-fit md:h-fit lg:w-[10%] space-x-4 lg:space-x-0 lg:space-y-4 gap-y-12 items-center  lg:justify-center justify-evenly mt-20 mx-2 sm:mx-0 lg:mt-36 ml-2">
  {buttons.map((button, index) => (
    <div
      key={index}
      onClick={() => handleDiv2Click(index, button)}
      className="flex flex-col items-center space-y-2 cursor-pointer"
    >
      {/* Image container */}
      <div className="w-[60px] h-[60px] border-white border-[1px] rounded-full overflow-hidden transition-all glow-on-hover">
        <img
          className="object-cover w-full h-full"
          src={eventImgs[index]}
          alt=""
        />
      </div>
      {/* Paragraph */}
      <p className="text-[12px] text-white text-center w-full">{titles[index]}</p>
    </div>
  ))}
</div>



          <div className="order-3 lg:order-3 text-white flex flex-col justify-center w-full lg:w-[45%] h-full p-4 lg:p-0">
            <div className="w-full lg:w-[80%] flex flex-col justify-start h-full mt-10 lg:mt-24 ml-0 lg:ml-10">
              <div className="lg:w-full lg:text-left lg:block sm:hidden hidden">
                <h1
                  ref={titleRef}
                  className=" font-Orbitron font-semibold underline-title  italic mb-4 text-4xl lg:text-5xl mt-5 lg:mt-10"
                >
                  {title}
                </h1>
                <div className="mt-5 lg:mt-10 font-extralight">
                  <p className="font-Rajdhani  text-xl">{caption}</p>
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