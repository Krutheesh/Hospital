import React, { useState, useRef } from "react";
import hospital from "../assets/hospital.png";
import { Slide, Roll, JackInTheBox, Fade } from "react-awesome-reveal";
// import emailjs from '@emailjs/browser';
import toast, { Toaster } from "react-hot-toast";
import { MdEmail, MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import handshake from "../assets/handshake.jpg";
import Slotfix from "../components/Slotfix";
import { ColorRing } from "react-loader-spinner";
import "../App.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const icons = [
    {
      content:
        "RIVER NIMS HOSPITALS Ramagiri Road, Opp. SPT Market Nalgonda, Telangana - 508 002",
      icon: <MdLocationOn />,
    },
    {
      content: "91212 12541 / 42 / 43",
      icon: <MdPhoneInTalk />,
    },
    {
      content: "info@rivernimshospitals.com",
      icon: <MdEmail />,
    },
  ];
  const url =
    "https://script.google.com/macros/s/AKfycbw2c4heFITQNVruBEwkA210li_klrKSToLLJ03C4GYwSa6qvJCFyo8kzNQFxNOipRRY/exec";
  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formRef);
    
    try {
      const response = await fetch(url, {
        method: "POST",
        body: new FormData(e.target),
      });
      console.log(response);
      toast.success("Query sent successfully");
      setLoading(false);
    } catch (err) {
      console.log(err.message, err.code);
      toast.error(err.message);
    }
    setLoading(false);
    e.target.reset();
  };
  return (
    <section>
      <Slotfix />
      <div className="relative flex justify-start items-center mt-[5rem] md:mt-0 ">
        <img
          src={handshake}
          alt="handshake"
          className="w-[100vw] h-[30vh] object-cover opacity-50"
        />
        <p className="font-semibold text-[1.6rem]  absolute px-[8rem] ">
          CONTACT US
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-[4rem] md:space-y-0 items-center py-[4rem] px-[2rem] md:px-[8rem]">
        <div className="md:w-[50%]">
          <img
            src={hospital}
            alt="img"
            className="h-[25rem] w-full object-cover "
          />
        </div>
        <div className="md:w-[50%] w-[100%] ">
          <Fade>
            <div className="flex justify-center items-center">
              <span className="bg-red-600 w-[80%] text-white inline-block font-bold p-2 my-[1rem]  text-center rounded-xl">
                
                Ask Us a Query :
              </span>
            </div>
            <form
             method="POST"
              ref={formRef}
              onSubmit={formHandler}
             
              className="flex flex-col md:px-0 md:w-[80%]  mx-auto "
            >
              <input
                className="mb-4 py-1 px-4 outline-none rounded border-2 w-[100%]"
                type="email"
                placeholder="Enter Your E-mail"
                name="Email"
                id=""
                required
              />
              <input
                className="mb-4 py-1 px-4 outline-none rounded border-2 w-[100%]"
                type="phone"
                placeholder="Enter Your phone number"
                name="Mobile"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number with 7-9 and remaing 9 digit with 0-9"
                id=""
                required
              />
              <input
                className="mb-4 py-1 px-4 outline-none rounded border-2  w-[100%]"
                type="text"
                placeholder="Subject"
                name="Subject"
                id=""
                required
              />
              <textarea
                className="py-4 px-4 rounded outline-none border-2  w-[100%]"
                name="Message"
                id="message"
                placeholder="Your Message"
                cols="30"
                rows="3"
                required
              ></textarea>
              {loading ? (
                <div className="flex justify-center items-center">
                  <ColorRing
                    visible={true}
                    height="50"
                    width="50"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#DC2626",
                      "#DC2626",
                      "#DC2626",
                      "#DC2626",
                      "#DC2626",
                    ]}
                  />
                </div>
              ) : (
                <button
                  className="mt-5 rounded-xl outline-none bg-red-600 px-6 py-2  mx-auto  text-lg font-semibold text-white"
                  type="submit"
                  
                >
                  Submit
                </button>
              )}

              <Toaster />
            </form>
          </Fade>
        </div>
      </div>

      <div className="md:w-[60%] space-y-2 px-[2rem] md:px-[8rem]">
        {icons &&
          icons.map((ele, ind) => (
            <div key={ind} className="flex space-x-5">
              <div className="text-[1.5rem] text-red-600"> {ele.icon}</div>
              <div>{ele.content} </div>
            </div>
          ))}
      </div>
      <div className="pt-[5rem] hidden md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.2780839558773!2d79.26654767344534!3d17.05904511218441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb290702c9cf69%3A0x8518812feb4eedcf!2sRIVER%20NIMS%20HOSPITAL(NALGONDA%20INSTITUTE%20OF%20MEDICAL%20SCIENCES%20)!5e0!3m2!1sen!2sin!4v1695194356262!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
