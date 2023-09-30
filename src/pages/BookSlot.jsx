import React from "react";
import { useState, useRef } from "react";
import { ColorRing } from "react-loader-spinner";
import "../App.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
function BookSlot() {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const url =
    "https://script.google.com/macros/s/AKfycbzK11KvYCSL84BrzMPcRhjesN9g4YLht1ZwnkGWo73dEzJkPylwsW4nU5gjTJk8ffXjfw/exec";
  const formHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !date || !gender || !speciality) {
      toast.error("missing fields");
      return;
    }
    const newDate = new Date(date);

    if (newDate.getTime() < Date.now()) {
      toast.error("past date not valid");
      return;
    }
    setLoading(true);
    console.log(formRef);
    const body = new FormData(formRef.current);
    console.log(body);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: new FormData(formRef.current),
      });
      console.log(response);
      toast.success("Appointment booked successfully");
     
    } catch (err) {
      console.log(err.message, err.code);
      toast.error(err.message);
    }
    setLoading(false);
    e.target.reset();
    setDate("");
    setEmail("");
    setGender("");
    setDescription("");
    setMobile("");
    setSpeciality("");
    setName("");
  };
  const options = [
    "Cardiology",
    "Neurology",
    "Anaesthesiology",
    "Gastroenterology",
    "Nephrology",
    "Oncology",
    "Physiotherapy",
    "Pulmonology",
    "Radiology",
    "Urology",
  ];

  return (
    <div>
      <div>
        <h1 className="text-[1.6rem] text-center textColor font-bold py-[1rem]">
          Book an Appointment{" "}
        </h1>
      </div>
      <div className="flex items-center justify-center px-12 py-5">
        <div className="mx-auto md:w-[70%]  bg-white">
          <form method="POST" ref={formRef} onSubmit={formHandler}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="Mobile"
                    placeholder="Enter your Mobile No"
                    value={mobile}
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number with 7-9 and remaing 9 digit with 0-9"
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Preffered Date
                  </label>
                  <input
                    type="Date"
                    name="Preffered Date"
                    id="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Gender
                  </label>
                  <select
                    value={gender}
                    name="Gender"
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  >
                    <option value="" disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Select Speciality
                  </label>
                  <select
                    value={speciality}
                    name="Speciality"
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
                  >
                    <option value="" disabled selected>
                      Select Speciality
                    </option>
                    {options &&
                      options.map((ele, ind) => (
                        <option key={ind}>{ele}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Description
              </label>
              <textarea
                value={description}
                name="Description"
                onChange={(e) => setDescription(e.target.value)}
                id=""
                cols="10"
                rows="3"
                className="w-[100%]  rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#284580] focus:shadow-md"
              ></textarea>
            </div>
            <div>
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
                      "#284580",
                      "#284580",
                      "#284580",
                      "#284580",
                      "#284580",
                    ]}
                  />{" "}
                </div>
              ) : (
                <button className="hover:shadow-form w-full rounded-md mainColor py-2 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    
      <Toaster />
    </div>
  );
}

export default BookSlot;
