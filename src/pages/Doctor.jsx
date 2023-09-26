import React, { useEffect } from "react";
import f1 from "../assets/f1.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import UserProfile from "./UserProfile";
import { customUseContext } from "../context/Context";
import Cardiology from "../components/specialities/Cardiology";
import Slotfix from "../components/Slotfix";
function Doctor() {
  const { doctors, changeDoctors, setChangeDoctors } = customUseContext();

  const options = [
    "All Department",
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
  const optionHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "All Department") {
      setChangeDoctors(doctors);
    } else {
      console.log(changeDoctors);
      const h = doctors.filter((ele) => ele.department === e.target.value);
      console.log(h);

      setChangeDoctors(h);
    }
  };
  useEffect(() => {
    setChangeDoctors(doctors);
  }, []);
  return (
    <div className="">
      <Slotfix />
      <Fade>
        <div className="flex text-white py-[2rem] px-[2rem] md:px-[6rem] font-semibold justify-between items-center mainColor">
          <Fade>
            <span className="text-[1.6rem] md:text-[2rem]">OUR DOCTORS</span>
            <Link to="/">
              <span className=" hover:border-b-2">Home</span>
            </Link>
          </Fade>
        </div>
      </Fade>

      <div className="px-[2rem] md:px-[8rem] py-[2rem]">
        <div className="py-[2rem] md:mx-[2rem] ">
          <select
            onChange={optionHandler}
            className="py-1 px-2 mainColor rounded-md text-white font-semibold"
          >
            {options &&
              options.map((ele, ind) => (
                <option key={ind} className="border-2 bg-white textColor">
                  {ele}
                </option>
              ))}
          </select>
        </div>
        {changeDoctors.length !== 0 ? (
          <div className="grid grid-cols-4 gap-3 py-[1rem]  ">
            {changeDoctors.map((ele, ind) => (
              <div
                key={ele.id}
                className=" flex flex-col  items-center object-cover"
              >
                <div>
                  <img src={ele.photo} className=" w-[100%] " alt="founder" />
                </div>
                <div className="w-[100%] md:w-[90%]">
                  <div className="mx-auto py-[0.5rem] text-[0.4rem] md:text-[0.8rem] md:w-[75%]  w-[100%]  md:p-1 ">
                    <p className="text-red-600 font-semibold">{ele.name}</p>
                    <p className="text-[0.3rem] md:text-[0.7rem]">
                      {ele.designation}
                    </p>
                    <p className="text-[0.4rem] md:text-[0.8rem]">{ele.role}</p>
                    <div className=" inline-block ">
                      <Link to={`/:${ele.id}`}>
                        <div className="text-[0.4rem]  px-2 py-1 md:text-[0.7rem] my-[1rem] flex justify-between items-center textColor font-semibold   border-2 rounded-xl hover:bg-[#284580] hover:text-white">
                          <span> VIEW PROFILE</span>{" "}
                          <FaAngleRight className="md:text-[1rem] text-red-600 " />{" "}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="font-semibold text-[2rem] text-center mx-auto w-[100%]">
            {" "}
            Doctors not Found{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Doctor;
