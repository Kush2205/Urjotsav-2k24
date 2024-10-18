import React, { useState } from 'react';
import ankurImg from "../assets/ankur.jpg"
import atulImg from "../assets/atul.jpg";
import khushiImg from "../assets/khushi.jpg";
import rishikaImg from "../assets/rishika.jpg";
import ayushImg from "../assets/ayush.jpg"
import arnavImg from "../assets/arnav.jpg";
import Alert from './Alert';
import useAlert from '../hooks/useAlert';
import emailjs from '@emailjs/browser'
import shubh from "../assets/shubh.jpg";
import anmol from "../assets/anmol.jpg";
import nishant from "../assets/nishant.jpg";
import rishabh from "../assets/rishabh.jpg";
import aditya from "../assets/aditya.jpg";
import anish from "../assets/anish.jpeg";
import vijit from "../assets/vijit.jpeg"
import { BackgroundBeamsDemo } from './ui/BackgroundBeamComponent/backgroundbeamdemo';


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
            <BackgroundBeamsDemo />
        </>
    );
}
