import React from 'react'

export default function Sample2() {
  return (
   
          <div className='flex justify-center items-center mx-auto px-6 py-6'>    
            <div className='container w-1/2 h-3/4 bg-black'> 
          
                <div className='  bg-primary-600 flex flex-col'> 
                    <div className='flex justify-start bg-black'>
                      <span className=' heading '>
                          Sign up
                      </span> 
                    </div>

                    <button className='google text-white bg-info-650 '>                          
                           Sign up with Google
                    </button>                  
                    <button className=' apple bg-black text-white '>
                           Sign up with apple
                    </button>

                   <div className='flex'>
                    <hr className='  bg-primary-300'/>
                    <span className='bg-black '> OR </span>
                    <hr className='  bg-primary-300 '/>
                    </div>
                    <form>
                        <div>
                        <label
                            className="text-t3 px-3.5 font-body "
                            htmlFor="exampleFormControlInput1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            value=""
                            required
                            // onChange={(e) => {setEmail(e.target.value);}}
                            className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded m-0  focus:text-neutral-400 focus:bg-white focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                            id="exampleFormControlInput1"
                            placeholder="example.email@gmail.com"
                          />
                        </div>
                        
                        <div>
                        <label
                            className="text-t3 px-3.5 font-body"
                            htmlFor="exampleFormControlInput1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            value=""
                            required
                            // onChange={(e) => {setEmail(e.target.value);}}
                            className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded m-0  focus:text-neutral-400 focus:bg-white focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                            id="exampleFormControlInput1"
                            placeholder="example.email@gmail.com"
                          />
                        </div>                        
                    </form>                                     
                </div>           
            </div>
          
          </div>     
     
    
  )
}






