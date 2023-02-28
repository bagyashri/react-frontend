import {React, useState} from 'react'

export default function Work() {
    const [cname, setName] = useState("");
    const [ctype, setType] = useState("");
    const [title, setTitle] = useState("");
   const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log({ cname, ctype,startDate, endDate, description});
    //     //postLoginDetails();
    //     // navigate("/home");
    //  };
    const handleDelete = (e) => {
// logic to delete the work experience
     };


  return (
    <>

        
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
                                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium dark:text-white">Company name</label>
                                    <input type="text" 
                                    value={cname}
                                     onChange={(e) => {
                                        setName(e.target.value);
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
                                    value={title}
                                     onChange={(e) => {
                                        setTitle(e.target.value);
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
                    {/* </form>  */}

    
    
    </>
  )
}
