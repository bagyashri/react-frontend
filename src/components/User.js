import React from 'react';
import Home from './Accordions';
// import Screen from './Screen';
import SidePanel from './SidePanel'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from './Nav';




export default function User() {
    
  return (
    <>
    <div>
      
      <div>
         <Nav/>

      <div className='md:mx-20 md:mt-10'>
        <div className='flex gap-2 items-center md:ml-10'>
          <FontAwesomeIcon icon={faArrowRight} className="text-t3 p-2"/>
          <span className="text-t8 font-semibold  w-full p-2"> Edit profile </span>
        </div>
    
      <div className='flex flex-row gap-10 p-5'>
       
            <div className="hidden sm:block sidebar md:ml-10 ">
            <ul className="flex flex-col gap-5 p-4">
                <li className="mb-2">General Info</li>
                <li className="mb-2">About</li>
                <li className="mb-2">Work Experience</li>
                <li className="mb-2">Skills</li>
              </ul>
            <div className='flex my-20 p-4 flex-col gap-2 items-center bg-[#F6FAF2FF]'>
              <img
                // src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                src="./images/user.png"
                alt=""
                className="p-4 h-40"
              />
              <span className='text-[#82C45AFF]'>tips to build outstanding profile</span>
              <span>lorem lapsum container </span>
              <button type="submit"
                              className="h-10 text-gray bg-[#82C45AFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              learn more
                              </button>

            </div>
        </div>
          <Home/>
      </div>   

    </div>
  </div> 
</div>

    </>
 
  )
}
