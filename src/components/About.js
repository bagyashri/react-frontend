import {React, useState} from 'react'

export default function About() {
    const [description, setDescription] = useState("");
    
   

  return (
    <div>
         {/* <form onSubmit={handleSubmit} className='mt-5 font-body'> */}
                        <div className='mt-5 font-body'>
                          
                                            
                         
                           
                            <div className="mb-2 md:mb-6">
                                    <label htmlFor="description" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="name"
                                     value={description}
                                     onChange={(e) => {
                                        setDescription(e.target.value);
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
                    {/* </form>  */}
      
    </div>
  )
}
