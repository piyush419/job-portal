import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Carousel from "../components/Carousal";
const LandingPage = () => {
  return (
    <div>
      <div className=" text-white  text-center py-5 border-b-2 ">
        <div className="font-bold text-5xl font-serif pt-10 pb-5">
          Get Your Dream Job <br />
          <span className="pt-4 text-black inline-block">And Get Hired</span>
        </div>
        <p className="py-5 text-xl">
          Explore thousands of job listing or find a perfect candidates
        </p>
        <div className="p-10">
          <Link to="/my-job">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-12">
              Find Job
            </button>
          </Link>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-12">
            Post a Job
          </button>
        </div>
      </div>
      <Carousel />
      <Banner />
    </div>
  );
};

export default LandingPage;
