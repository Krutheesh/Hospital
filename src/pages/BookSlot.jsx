import React from "react";
import { useState } from "react";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";
function BookSlot() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [description, setDescription] = useState("");
  const formHandler = (e) => {
    e.preventDefault();

    const newDate = new Date(date);

    if (newDate.getTime() < Date.now()) {
      toast.error("past date not valid");
    }
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
          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyZ8CC65IGH58070AAeT8LVnQJOCFS8ilLfTl-E8uwG8yRTF0gRH22zs144hkhNUZWc/exec"
          >
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
                    name="Date"
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
              <button className="hover:shadow-form w-full rounded-md mainColor py-2 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default BookSlot;
