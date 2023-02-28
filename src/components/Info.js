import {React, useState} from 'react'

export default function Info(props) {
 
    const [name, setName] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    


  return (
    <>
        
              {/* <form onSubmit={handleSubmit} className='mt-5 font-body'> */}
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
                        <button type="submit"
                            className="h-10  text-[#3F9396FF]  bg-[#F3F4F6FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Change
                            </button>
                            <button type="submit"
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
                                       id="last_name" className=" bg-[#F3F4F6FF] text-[#9095A1FF]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                </div>
                            
                            </div>
                         
                           
                            <div className="mb-2 md:mb-6">
                                    <label htmlFor="description" className="block leading-[22px] mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="name"
                                     value={description}
                                     onChange={(e) => {
                                        setDescription(e.target.value);
                                      }}
                                    id="description" className=" h-20 bg-[#F3F4F6FF] text-[#9095A1FF] font-body  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 md:p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter least 8+ characters" required/>
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
                   

    
    
    </>
      
    
  )
}
