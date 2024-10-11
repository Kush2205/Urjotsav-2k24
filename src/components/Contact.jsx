import React, { useState } from 'react';
import ankurImg from "../assets/ankur.jpg"
import atulImg from "../assets/atul.jpg";
import khushiImg from "../assets/khusi.jpg";
import rishikaImg from "../assets/rishika.jpg";
import ayushImg from "../assets/ayush.jpg"
import arnavImg from "../assets/arnav.jpg";
import Alert from './Alert';
import useAlert from '../hooks/useAlert';
import emailjs from '@emailjs/browser'
import shubh from "../assets/shubh.jpg";
import anmol from "../assets/anmol.jpg";
import nishant from "../assets/nishant.jpg";


export default function Contact() {
    const [form, setForm] = useState({name: '', email:'',phoneno: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Urjotsav Team",
            from_email: form.email,
            to_email: "urjotsav@rgipt.ac.in",
            phone_no: form.phoneno,
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(()=>{
          setIsLoading(false);
          showAlert({show: true, text: 'Message sent successfully!', type: 'success'});
          setTimeout(() => {
            hideAlert();
            setForm({name: '', email: '',phoneno: '', message: ''});
          }, [3000]);
    
        }).catch((error)=>{
            setIsLoading(false);
            showAlert({show: true, text: "I didn't received your message", type: 'danger'})
          console.log(error);
        })
      }

    return (
        <>
            <div className="bg-cover bg-center">
                <div className="bg-cover bg-center min-h-screen flex justify-center items-center p-8">
                {alert.show && <Alert {...alert} />}
                    <div className="container md:justify-between flex  w-full max-w-7xl mt-20 md:flex-row flex-col justify-center gap-y-[100px] md:gap-y-6 items-center md:items-start">
                        <div className="form-container w-auto md:w-1/2">
                            <h1 className="text-white text-4xl font-bold mb-8 font-Megrim">URJOTSAV</h1>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="YOUR NAME"
                                    required value={form.name} 
                                    onChange={handleChange} 
                                    className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="text"
                                    name='email'
                                    placeholder="EMAIL ADDRESS"
                                    required value={form.email} 
                                    onChange={handleChange} 
                                    className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="text"
                                    name='phoneno'
                                    placeholder="PHONE NUMBER"
                                    required value={form.phoneno} 
                                    onChange={handleChange} 
                                    className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <textarea
                                    placeholder="MESSAGE"
                                    name='message'
                                    required value={form.message} 
                                    onChange={handleChange} 
                                    className="w-full p-4 bg-white bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-36"
                                />
                                <button
                                    type="submit" disabled={isLoading}
                                    className="w-full p-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">
                                    {isLoading ? 'Sending...': 'Send Message'} 
                                </button>
                            </form>
                        </div>
                        <div className="contact-info md:w-[40%] lg:w-[35%] bg-black bg-opacity-60 rounded-lg p-8 text-white w-auto">
                            <h2 className="text-3xl font-bold mb-2 font-Megrim capitalize">contact information</h2>
                            <p className='mb-6 text-lg text-zinc-300'>mail us at: <a href='mailto:urjotsav@rgipt.ac.in' className='text-xl font-semibold text-[#fa9898]'> urjotsav@rgipt.ac.in</a></p>
                            <div className="flex mb-8 flex-row items-center justify-start gap-5 md:gap-7">
                            <p className='text-lg text-zinc-300 font-semibold'>Social Handles:</p>
                      <div className='transition-all hover:scale-110 font-Jost'>
                        <a href="https://www.linkedin.com/in/urjotsav/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                        </svg>
                       
                        </a>
                        </div>
                        <div className='transition-all hover:scale-110 font-Jost'>
                        <a href="https://www.instagram.com/urjotsav_rgipt/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512">
                        <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>  
                        </a>
                        </div>
                        <div className='transition-all hover:scale-110 font-Jost'>

                        <a href="https://www.youtube.com/@ScienceTechnicalCouncil_RGIPT">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="27" viewBox="0 0 576 512">
                        <path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                        </svg>                       
                        </a>
                        </div>
                    </div>
                            <div className='flex flex-col items-start'>

                            
                            
                            <h3 className="text-[24px] text-zinc-200 font-semibold mb-3 font-Jost uppercase">fest Coordinators</h3>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover scale-[] w-full h-full' src={ankurImg} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Ankur Kumar</p>
                                    <p className="text-lg">+91-7991902068</p>
                                </div>
                            </div>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover w-full h-full' src={khushiImg}  />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Khushi Kalra</p>
                                    <p className="text-lg">+91-9711751056</p>
                                </div>
                            </div>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover w-full h-full' src={atulImg} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Atul Panwar</p>
                                    <p className="text-lg">+91-8306579717</p>
                                </div>
                            </div>
                            <h3 className="text-[24px] text-zinc-200 font-semibold mb-3 mt-6 font-Jost uppercase">Event head</h3>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover w-full h-full' src={rishikaImg} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Rishika Srivastava</p>
                                    <p className="text-lg">+91-8009477777</p>
                                </div>
                            </div>

                            <h3 className="text-[24px] text-zinc-200 font-semibold mb-3 font-Jost uppercase">Sponsorship Heads</h3>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover scale-[] w-full h-full' src={shubh} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Shubh Raheja</p>
                                    <p className="text-lg">+91-8383006374</p>
                                </div>
                            </div>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover scale-[] w-full h-full' src={anmol} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Anmol Shrivastava</p>
                                    <p className="text-lg">+91-9301987494</p>
                                </div>
                            </div>
                            <div className="contact-card flex items-center mb-6">
                            <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover scale-[] w-full h-full' src={nishant} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Nishant Nischal</p>
                                    <p className="text-lg">+91-9334340181</p>
                                </div>
                            </div>



                            <h3 className="text-[24px] text-zinc-200 font-semibold mb-3 mt-6 font-Jost uppercase">Technical Team Head</h3>
                            <div className="contact-card flex items-center mb-6">
                                <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover w-full h-full' src={ayushImg} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Ayush Tripathi</p>
                                    <p className="text-lg">+91-8400270616</p>
                                </div>
                            </div>
                            <h3 className="text-[24px] text-zinc-200 font-semibold mb-3 mt-6 font-Jost uppercase">Designing Team Head</h3>
                            <div className="contact-card flex items-center mb-6">
                                <div className="profile-pic w-20 h-20 bg-gray-500 rounded-full mr-4 overflow-hidden">
                                    <img className='object-cover w-full h-full' src={arnavImg} />
                                </div>
                                <div>
                                    <p className="text-xl font-medium">Arnav Sao</p>
                                    <p className="text-lg">+91-7987057541</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
