import {React,useState }from 'react'
import { faGoogle,faFacebook,faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Signup1() {
  const [name, setName] = useState("");

 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ email, password, name });
      
   };
  //  md:flex-row
  return (
    <div className='h-full md:h-screen'>
      <div className=''>
        <div className='flex flex-col md:flex-row items-center '>
        <div className=' md:w-3/5 border border-black'>
          <div className='lg:m-10'>
          <form onSubmit={handleSubmit} className='w-full font-body content-center '>
            <div>

            <p className="mt-2 mb-10 font-heading text-neutral-900 t3 sm:text-t4 md:text-t6 lg:text-t8 leading-10 font-semibold text-center">
              Create an acoount
            </p>
            <div className="mb-4 relative">
              <label
                className="text-t3 px-3.5 font-body absolute"
                for="signupInput1"
              >
                Full Name
              </label>
              <input
                type="name"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded  focus:text-neutral-400 focus:bg-white focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                id="signupInput1"
                placeholder="Jon Doe"
              />
            </div>
            <div className="mb-4 relative">
              <label
                className=" text-t3 px-3.5 font-body absolute"
                for="signupInput2"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded m-0  focus:text-neutral-400 focus:bg-white focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                id="signupInput2"
                placeholder="example.email@gmail.com"
              />
            </div>
            <div className="mb-8 relative">
              <label
                className=" text-t3 px-3.5 font-body absolute"
                for="signupInput3"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded m-0  focus:text-neutral-400 focus:bg-white focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                id="signupInput3"
                placeholder="Enter atleast min 8+ characters"
              />
            </div>

              <button type="submit" className=" w-full border border-gray-300 text-white bg-[#3F9396FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 p-1 md:p-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                <div className="text-center pt-6 pb-1">
                  <p className="font-body text-t3 text-neutral-700">
                    Or sign up with
                  </p>
                </div> 
                                            
              </div>
            
              <div className="flex justify-evenly pt-1 pb-1">
              <button
                type="submit"
                className=" flex font-body opacity-100
                py-2 px-4 rounded-2xl
                  text-brands-100 bg-brands-150 hover:bg-brands-200 hover:text-brands-100
              active:bg-brands-250"
              >
              <FontAwesomeIcon icon={faGoogle} className="w-4 h-4 fill-brands-100" />
              </button>
              <button
                type="submit"
                className=" flex font-body opacity-100
                py-2 px-4 rounded-2xl
                  text-brands-300 bg-brands-350 hover:bg-brands-400 hover:text-brands-300
              active:bg-brands-450 active:text-brands-300"
              >
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 fill-brands-300" />
              </button>
              <button
                type="submit"
                className=" flex font-body opacity-100
                py-2 px-4 rounded-2xl
                  text-neutral-600 bg-neutral-200 hover:bg-neutral-300 hover:text-neutral-600
              active:bg-neutral-350 active:text-neutral-600"
              >
                  <FontAwesomeIcon icon={faApple} className="w-4 h-4 fill-neutral-600" />
              </button>
            </div>
           
        </form> 
        </div>
                  
        </div>
          <div className='flex md:w-2/5'>
            <div className="flex rounded-r-lg">
              <img  className='w-full object-center'  src="./images/signup.png"  alt="logo"/>

            </div>

          </div>
      
      
        </div>
      </div>
    </div>


  

  )
}
