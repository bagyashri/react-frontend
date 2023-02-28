import{ React, Fragment, useState} from 'react';
// import Screen from './Screen';
import Work from "./Work";

import About from "./About";

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from './Nav';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";






export default function User() {


  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
 const[description, setDescription]=useState("")
  const [open, setOpen] = useState(0);
  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);
  const [open4, setOpen4] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  const [cname, setCname] = useState("");
  const [ctype, setType] = useState("");
  const [ctitle, setCtitle] = useState("");
 const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const [cdescription, setCdescription] = useState("");


const handleStartDateChange = (event) => {
  setStartDate(event.target.value);
};

const handleEndDateChange = (event) => {
  setEndDate(event.target.value);
};

  const handleDelete = (e) => {
// logic to delete the work experience
   };

  const handleClick = (link) => {
    setActiveLink(link);
  };
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleOpen1 = (value) => {
    setOpen1(open1 === value ? 0 : value);
  };
  const handleOpen2 = (value) => {
    setOpen2(open2 === value ? 0 : value);
  };
  const handleOpen3 = (value) => {
    setOpen3(open3 === value ? 0 : value);
  };
  const handleOpen4 = (value) => {
    setOpen4(open4 === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name, title, cname, ctitle, ctype, cdescription,startDate,endDate});
    //postLoginDetails();
    // navigate("/home");
 };

    
  return (
    <>
    <Nav className="fixed"/>
    <div>
      
      <div>
         

      <div className='md:mx-20 md:mt-10'>   
      <div className='flex gap-10 p-5'>
            <div className="hidden fixed sm:block sidebar w-64 md:ml-10 ">
            <FontAwesomeIcon icon={faArrowRight} className="relative text-t3 p-2"/>
          <span className="relative text-t8 font-semibold  w-full p-2"> Edit profile </span>
          <ul className="flex flex-col gap-5 p-4">
            <a href="#hello" className={`mb-2 ${activeLink === 'hello' ? 'text-red-500' : ''}`} onClick={() => handleClick('hello')}>
              General Info
            </a>
            <a href="#about" className={`mb-2 ${activeLink === 'about' ? 'text-red-500' : ''}`} onClick={() => handleClick('about')}>
              About
            </a>
            <a href="#work" className={`mb-2 ${activeLink === 'work' ? 'text-red-500' : ''}`} onClick={() => handleClick('work')}>
              Work Experience
            </a>
            <a href="#skills" className={`mb-2 ${activeLink === 'skills' ? 'text-red-500' : ''}`} onClick={() => handleClick('skills')}>
              Skills
            </a>
          </ul>
      
{/*             
            <ul className="flex flex-col gap-5 p-4">
                <a href="#hello" className="mb-2">General Info</a>
                <a href="#about" className="mb-2">About</a>
                <a href="#work" className="mb-2">Work Experience</a>
                <a href="#work" className="mb-2">Skills</a>
              </ul> */}
            <div className='flex my-20 w-64 p-4 flex-col gap-2 items-center bg-[#F6FAF2FF]'>
              <img
                // src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                src="./images/user.png"
                alt=""
                className="p-4 h-40"
              />
              <span className='text-[#82C45AFF] text-center'>tips to build outstanding profile</span>
              <span className=' text-center'>lorem lapsum container </span>
              <button type="button"
                              className="h-10 text-gray bg-[#82C45AFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              learn more
                              </button>

            </div>
        </div>
        
       

        
        
     
        <form  className="relative md:ml-80">
          <div className='relative flex justify-end ml-24 mb-2 gap-2 '>
        <div className=' mb-2 mr-2'>
                            <button type="button"
                            className=" border border-[#9095A1FF] text-[#9095A1FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                           Cancel
                            </button>
          </div>
        <div className=' mb-2 mr-2'>
                            <button type="button"
                            onClick={handleSubmit}
                            className=" border border-gray-300 text-white bg-[#3F9396FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                            </button>
          </div>
          </div>
   
          <Fragment>
            <div className="flex flex-col items-center gap-5 text-t2 md:text-t4">
            <Accordion  open={open1 === 1} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
              <AccordionHeader id="hello" onClick={() => handleOpen1(1)}>
                GENERAL INFORMATION
              </AccordionHeader>
              <AccordionBody>
              
              <div className='mt-5 font-body'>
                            <div className='flex justify-start gap-3'>
                                <div className='flex flex-col'>
                                    <h2 className='font-semibold'>Avatar</h2>
                                    <img
                                        src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                                        alt=""
                                        className="rounded-full p-4 h-20"
                                    />
                                </div>
                           
                        <div className='flex items-center'>
                        <button type="button"
                            className="h-10  text-[#3F9396FF]  bg-[#F3F4F6FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Change
                            </button>
                            <button type="button"
                            className="h-10 text-[#9095A1FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Remove
                            </button>

                        </div>
                                             
                          

                            </div>
                        
                            {/* input  for job type and compnay name */}
                            <div className="mt-2 md:mt-2 relative grid gap-2 md:gap-6 mb-1 md:mb-2 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium dark:text-white">     Name</label>
                                    <input type="text" 
                                    value={name}
                                     onChange={(e) => {
                                        setName(e.target.value);
                                      }}
                                    id="first_name" className="bg-[#F3F4F6FF] text-[#9095A1FF] text-sm rounded-lg border-b-warning-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                                <div>
                                    <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Professional Title</label>
                                    <input type="text"
                                     value={title}
                                     onChange={(e) => {
                                        setTitle(e.target.value);
                                      }}
                                       id="title" className=" bg-[#F3F4F6FF] text-[#9095A1FF]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                            
                            </div>
                         
                           
                            <div className="mb-2 md:mb-6">
                                    <label htmlFor="description" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="name"
                                     value={description}
                                     onChange={(e) => {
                                        setDescription(e.target.value);
                                      }}
                                    id="description" className=" h-20 bg-[#F3F4F6FF] text-[#9095A1FF] font-body  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" " required/>
                            </div>
                           
                          
                         
                            
                        </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open2 === 2} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4 ">
              <AccordionHeader id="about" onClick={() => handleOpen2(2)}>
                ABOUT
              </AccordionHeader>
              <AccordionBody>
              {/* <About/> */}
              <div className='mt-5 font-body'>
                          
                                            
                         
                           
                          <div className="mb-2 md:mb-6">
                                  <label htmlFor="cdescription" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                  <input type="name"
                                   value={cdescription}
                                   onChange={(e) => {
                                      setCdescription(e.target.value);
                                    }}
                                  id="description" className=" h-20 bg-[#F3F4F6FF] text-[#9095A1FF] font-body  text-sm rounded-lg focus:ring-[#F4FAFAFF] focus:border-[#F4FAFAFF] block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                          </div>
                          <div className="flex gap-3 items-start mb-3 md:mb-6">
                                  <div className="flex  items-center h-5">
                                  <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-black rounded-none bg-gray-50   dark:bg-[#3F9396FF] dark:border-[#3F9396FF] " required/>
                                  </div>
                                  <label htmlFor="remember" className="ml-2 font-body text-sm font-medium text-black dark:text-gray-300">Open to work </label>
                              </div>
                         
                          {/* submit button */}
                          {/* <div className='flex justify-end'>
                          <button type="submit"
                          className=" border border-gray-300 text-white bg-[#3F9396FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Submit
                          </button>
                          </div> */}
                       
                          
                      </div>


              </AccordionBody>
            </Accordion>
            <Accordion open={open3 === 3} animate={customAnimation} className="font-body  border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
              <AccordionHeader id="work" onClick={() => handleOpen3(3)}>
                WORKING EXPERIENCE
              </AccordionHeader>
              <AccordionBody>
              {/* <Work/> */}

                      
            <div className='flex justify-between mt-5'>
                <h className="text-t5 text-[#56B4B8FF] ">First working experience</h>
                <buttton onclick={handleDelete} className="hover">
                <img
                // src="https://www.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg"
                src="./images/delete.png"
                alt=""
                className="p-0 h-5"
              />
                </buttton>
            </div>
            {/* <form onSubmit={handleSubmit} className='mt-5 font-body'> */}
                        <div className=''>
                          
                            {/* input  for job type and compnay name */}
                            <div className="mt-2 md:mt-2 relative grid gap-2 md:gap-6 mb-1 md:mb-2 md:grid-cols-2">
                                <div>
                                    <label htmlFor="cname" className="block mb-1 text-sm font-medium dark:text-white">Company name</label>
                                    <input type="text" 
                                    value={cname}
                                     onChange={(e) => {
                                        setCname(e.target.value);
                                      }}
                                    id="first_name" className="bg-[#F3F4F6FF] text-[#9095A1FF] text-sm rounded-lg border-b-warning-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Employement type</label>
                                    <input type="text"
                                     value={ctype}
                                     onChange={(e) => {
                                        setType(e.target.value);
                                      }}
                                       id="last_name" className=" bg-[#F3F4F6FF] text-[#9095A1FF]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                            
                            </div>
                            {/* input for title and agree */}
                            <div className="mt-2 md:mt-2 relative grid gap-2 md:gap-6 mb-1 md:mb-2 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium dark:text-white">Title</label>
                                    <input type="text" 
                                    value={ctitle}
                                     onChange={(e) => {
                                        setCtitle(e.target.value);
                                      }}
                                    id="first_name" className=" bg-[#F3F4F6FF] text-[#9095A1FF] text-sm rounded-lg border-b-warning-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                                <div className="flex gap-3 items-start mt-6 md:mb-2">
                                    <div className="flex  items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-3 h-3  rounded-none bg-gray-50   dark:bg-[#3F9396FF] dark:border-[#3F9396FF] " required/>
                                    </div>
                                    <label htmlFor="remember" className="ml-2 font-body text-sm font-medium text-black dark:text-gray-300">By signing up, I agree with the  <a href="L" className="text-[#1232e9] hover:underline dark:text-brands-350">Terms of Use  </a> & <a href="L" className="text-[#1232e9] hover:underline dark:text-brands-350">Privacy Policy</a>.</label>
                                </div>
                            
                            </div>
                            {/* input for dates */}
                            <div className="mt-2 md:mt-2 relative grid gap-2 md:gap-6 mb-1 md:mb-2 md:grid-cols-2">
                                <div>
                                    <label htmlFor="start-date" className="block mb-1 text-sm font-medium dark:text-white">Start Date</label>
                                    <input
                                      type="date"
                                        id="start-date"
                                        value={startDate}
                                        onChange={handleStartDateChange}
                                        className=" bg-[#F3F4F6FF] text-[#9095A1FF]  text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div>
                                <label htmlFor="end-date">End Date:</label>
                                    <input
                                        type="date"
                                        id="end-date"
                                        value={endDate}
                                        onChange={handleEndDateChange}
                                        className=" bg-[#F3F4F6FF] text-[#9095A1FF] text-sm rounded-lg border-b-warning-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </div>
         
                            </div>
                            <div className="mb-2 md:mb-6">
                                    <label htmlFor="description" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">description</label>
                                    <input type="name"
                                     value={description}
                                     onChange={(e) => {
                                        setDescription(e.target.value);
                                      }}
                                    id="description" className=" h-20 bg-[#F3F4F6FF] text-[#9095A1FF] font-body  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter least 8+ characters" required/>
                            </div>
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                               
                            </div>
                            {/* submit button */}
                            {/* <div className='flex justify-end'>
                            <button type="submit"
                            className=" border border-gray-300 text-white bg-[#3F9396FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add job
                            </button>
                            </div> */}
                            
                        </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open4 === 4} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
              <AccordionHeader onClick={() => handleOpen4(4)}>
                SKILLS
              </AccordionHeader>
              <AccordionBody>
            kjhkhjkuyyh
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} animate={customAnimation}>
              <AccordionHeader onClick={() => handleOpen(5)} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
              EDUCATION
              </AccordionHeader>
              <AccordionBody>
              jkgujffg
              </AccordionBody>
            </Accordion>

            </div>
            
          </Fragment>
        </form>
      </div>   
    </div>
  </div> 
</div>


    </>
 
  )
}
