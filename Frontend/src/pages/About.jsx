import React from 'react';
import mypic from '../Assets/image/mypic.jpg';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
      <div className="flex justify-center  px-20 h-[38rem] m-10 border rounded-sm">
        <div className="w-96 mt-10">
          <p className="text-2xl font-bold mb-3 px-6 text-blue-700 font-serif">About me</p>
          <img src={mypic} alt="this is not supported." className='rounded-md h-2/3 w-auto' />
        </div>
        <div className="w-1/2 py-[7rem]">
          <h className="block font-semibold text-xl font-serif">Lakpa Jangbu Sherpa</h>
          <span className="text-sm font-serif">Frontend Developer</span>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est incidunt cupiditate magnam commodi reprehenderit repellat? Ipsam unde porro distinctio vel consequatur maxime, excepturi aliquid architecto inventore aperiam magni, dolor id numquam quas perferendis delectus commodi animi ea? A distinctio sint nisi autem voluptatem consequatur delectus qui, debitis atque aut?
          </p>
          <button className="block m-3 bg-blue-500 mt-6 p-1 w-[9rem] rounded-3xl font-semibold text-white ">GET IN TOUCH!</button>
          <span className="font-mono px-3">lsherpa201@gmail.com</span>
          <div className="flex m-[1rem] gap-6 list-none">
            <li>
              <a href="https://www.facebook.com/lakpa.sherpa.56679" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='' color='blue' size={38} />
              </a>
            </li>
            <li className="">
              <FaInstagram className='' color='blue' size={38} />
            </li>
            <li className="class">
              <a href="https://www.linkedin.com/in/lakpa-sherpa-92b284259/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='' color='blue' size={38} />
              </a>
            </li>
            <li className="class">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className='' color='blue' size={38} />
              </a>
            </li>
          </div>
        </div>
      </div>
  );
};

export default About;
