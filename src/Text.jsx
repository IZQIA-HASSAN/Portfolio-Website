import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { BrowserRouter , Route , Router  } from "react-router-dom";
import { Link } from "react-router-dom";

const Text = () => {
  const skillRef = useRef(null);

  const skills = [
    "Web Development",
    "Backend Development",
    "AI & ML",
    "Data Science",
    "Data Analysis",
  ];

  useEffect(() => {
    let index = 0;

    const animateSkill = () => {
      skillRef.current.textContent = skills[index];

      gsap.fromTo(
        skillRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      gsap.to(skillRef.current, {
        opacity: 0,
        y: -40,
        delay: 1.5,
        duration: 0.6,
        onComplete: () => {
          index = (index + 1) % skills.length;
          animateSkill();
        },
      });
    };

    animateSkill();
  }, []);

  return (
    <div className="w-1/2 max-lg:w-full px-6 mt-15 max-lg:text-center">
      <h1 className="text-5xl max-md:text-3xl text-white font-bold">
        Hi there this is Fawas anayat...
      </h1>

      <h2 className="text-3xl max-md:text-xl mt-10 text-gray-200 font-extralight">
        Digitalizing the world with my skills
      </h2>

      <h1 className="mt-12 text-6xl max-md:text-4xl font-bold text-white">
        I am skilled at:
      </h1>

      <div className="mt-6 h-16">
        <p
          ref={skillRef}
          className="text-7xl max-md:text-5xl max-sm:text-4xl text-yellow-400 font-medium"
        ></p>
      </div>

      <div className="mt-20 max-lg:flex max-lg:justify-center">
        <Link to='./Contact'>
        <button className="cursor-pointer text-white bg-black w-40 h-10 flex justify-center items-center rounded-md">
          Work with me
        </button>
        </Link>
      </div>
      
    </div>
  );
};

export default Text;