import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



import Work from "./Work";
import Info from "./Info";
import About from "./About";
 
export default function Home() {
  const [open, setOpen] = useState(0);
  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);
  const [open4, setOpen4] = useState(0);
  
  
 
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
 
  return (
    <Fragment>
      <div className="flex flex-col items-center gap-5 text-t2 md:text-t4">
      <Accordion id="hello" open={open1 === 1} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
        <AccordionHeader onClick={() => handleOpen1(1)}>
          GENERAL INFORMATION
        </AccordionHeader>
        <AccordionBody>
        <Info/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open2 === 2} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4 ">
        <AccordionHeader onClick={() => handleOpen2(2)}>
          ABOUT
        </AccordionHeader>
        <AccordionBody>
        <About/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open3 === 3} animate={customAnimation} className="font-body  border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
        <AccordionHeader onClick={() => handleOpen3(3)}>
           WORKING EXPERIENCE
        </AccordionHeader>
        <AccordionBody>
        <Work/>
        </AccordionBody>
      </Accordion>
      <Accordion open={open4 === 4} animate={customAnimation} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
        <AccordionHeader onClick={() => handleOpen4(4)}>
          SKILLS
        </AccordionHeader>
        <AccordionBody>
       
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader onClick={() => handleOpen(5)} className="font-body border border-[#F3F4F6FF] p-5 text-t2 md:text-t3 lg:text-t4">
         EDUCATION
        </AccordionHeader>
        <AccordionBody>
        
        </AccordionBody>
      </Accordion>

      </div>
      
    </Fragment>
  );
}
// import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
 
// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`${
//         id === open ? "rotate-180" : ""
//       } h-5 w-5 transition-transform`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       strokeWidth={2}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//     </svg>
//   );
// }
 
// export default function Example() {
//   const [open, setOpen] = useState(0);
 
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
 
//   return (
//     <Fragment>
//       <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(1)}>
//           What is Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//           How to use Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//           What can I do with Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//     </Fragment>
//   );
// }