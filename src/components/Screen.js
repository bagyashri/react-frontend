import {React, useState} from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { faGoogle,faApple } from "@fortawesome/free-brands-svg-icons";

export default function Screen() {

    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        //postLoginDetails();
        // navigate("/home");
     };
  return (
    <div className='h-screen md:h-screen'>
        <div className="container h-full px-6 py-16">
            <div className=" flex h-full  items-center justify-center ">
                {/* <div className="md:w-8/12 lg:ml-12 lg:w-5/12"> */}
                <div className="md:w-8/12 lg:ml-12 lg:w-5/12">
                    <div className='px-6 py-6 '>
                    <div className='mb-16 w-full'>
                                <span className='text-4xl font-heading boder font-semibold rounded-m leading-[48px]'>
                                    Sign up
                                </span>
                            </div>

                           
                                
                                <button type="submit" className='relative gap-2 font-body mt-10 first-letter:mb-3 flex w-full items-center justify-center rounded-[6px] bg-[#2A7AEDFF] text-black  hover:text-white focus:text-white active:text-white disabled:opacity-40 px-7 pt-2 pb-2.5 text-center text-sm font-medium leading-normal transition duration-150 ease-in-out hover:bg-[#1261CFFF]  focus:bg-[#1055B6FF] focus:outline-none focus:ring-0 active:bg-[#1055B6FF]'>
                                <FontAwesomeIcon icon={faGoogle} className="w-4 h-4 fill-brands-100" />Sign up with Google
                                </button>
                                <button type="submit" className='relative gap-2 mt-5 font-body first-letter:mb-3 flex w-full items-center justify-center rounded-[6px] bg-black text-white  hover:text-white focus:text-white active:text-white disabled:opacity-40 px-7 pt-2 pb-2.5 text-center text-sm font-medium leading-normal transition duration-150 ease-in-out hover:bg-[#0c0c0d]  focus:bg-[#161616] focus:outline-none focus:ring-0 active:bg-[#1055B6FF]'>
                                <FontAwesomeIcon icon={faApple} className="w-4 h-4 fill-brands-100" /> Sign up with Apple
                                
                                </button>
                            
                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                className="mx-4 mb-0 text-center font-body font-normal dark:text-neutral-200">
                                OR
                                </p>
                            </div>
                    <form onSubmit={handleSubmit} className='font-body'>
                        <div>
                          

                            
                            <div className="mt-2 md:mt-8 relative grid gap-2 md:gap-6 mb-2 md:mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium dark:text-white">First name</label>
                                    <input type="text" 
                                    value={name}
                                     onChange={(e) => {
                                        setName(e.target.value);
                                      }}
                                    id="first_name" className="text-[#9095A1FF] border-[#9095A1FF] border text-sm rounded-lg border-b-warning-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                    <input type="text"
                                     value={lname}
                                     onChange={(e) => {
                                        setLname(e.target.value);
                                      }}
                                       id="last_name" className="text-[#9095A1FF] border-[#9095A1FF] border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                            
                            </div>
                            {/* mb-6 */}
                                <div className="mb-2 md:mb-6">
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                    <input type="email" 
                                     value={email}
                                     onChange={(e) => {
                                        setEmail(e.target.value);
                                      }}
                                    id="email" className="text-[#9095A1FF]  border-[#9095A1FF]  font-body text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required/>
                                </div> 
                                <div className="mb-2 md:mb-6">
                                    <label htmlFor="password" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password"
                                     value={password}
                                     onChange={(e) => {
                                        setPassword(e.target.value);
                                      }}
                                    id="password" className="text-[#9095A1FF] border-[#9095A1FF] font-body border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter least 8+ characters" required/>
                                </div> 
                            
                                <div className="flex gap-3 items-start mb-3 md:mb-6">
                                    <div className="flex  items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-3 h-3 border border-black rounded-none bg-gray-50   dark:bg-[#3F9396FF] dark:border-[#3F9396FF] " required/>
                                    </div>
                                    <label htmlFor="remember" className="ml-2 font-body text-sm font-medium text-black dark:text-gray-300">By signing up, I agree with the  <a href="L" className="text-[#1232e9] hover:underline dark:text-brands-350">Terms of Use  </a> & <a href="L" className="text-[#1232e9] hover:underline dark:text-brands-350">Privacy Policy</a>.</label>
                                </div>
                                <button type="submit" className=" w-full border border-gray-300 text-white bg-[#3F9396FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                                                           
                            
                            </div>
                    </form> 
                    <div className='flex mt-4 font-body text-[#9095A1FF] items-center justify-center space-y-4'>
                        <span className='flex'> Already have account? Sign in</span>
                    </div>
                    </div>               
                </div>
            </div>
        </div>
    </div>
  )
}
