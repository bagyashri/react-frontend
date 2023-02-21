

import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { LockClosedIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import { faGoogle,faFacebook,faApple } from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    //postLoginDetails();
    // navigate("/home");
 };


  return (
    <div>
      <section className="h-full gradient-form bg-white md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="flex justify-between">
                        <img
                          className=" w-[106px] h-Sz10 rounded-m"
                          src="./images/Image 2341.png"
                          alt="logo"
                        />
                        <p className="text-end text-t3 font-body text-neutral-900 ">
                          Dont have an account?
                          <a
                            className="text-primary-500 text-t3 underline"
                            href="https://tailwindcss.com"
                          >
                            Sign up
                          </a>
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <p className="mb-4 font-heading text-neutral-900 text-t8 text-center">
                          Sign In
                        </p>
                        <div className="mb-4 relative">
                          <label
                            className="text-t3 px-3.5 font-body absolute"
                            for="exampleFormControlInput1"
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
                            id="exampleFormControlInput1"
                            placeholder="example.email@gmail.com"
                          />
                        </div>
                        <div className="mb-4 relative">
                          <label
                            className="text-t3 px-3.5 font-body absolute"
                            for="exampleFormControlInput2"
                          >
                            Password
                          </label>
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="form-control outline-0 block w-full h-Sz13 px-3.5 pt-1.5 text-sm rounded-l font-normal text-gray-700  border-0 bg-neutral-200 font-body border-gray-300 rounded m-0 focus:bg-white focus:text-neutral-400 focus:outline-none hover:text-neutral-400 hover:bg-neutral-200"
                            id="exampleFormControlInput2"
                            placeholder="Enter at least 8+ characters"
                          />
                          <div
                            className="absolute right-4 top-4 fill-neutral-900 "
                            for="toggle"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-4 w-4"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faEyeSlash}
                                className="h-4 w-4"
                              />
                            )}
                          </div>
                        </div>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4
                              border-neutral-600 rounded-xs"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block font-body text-t3 opacity-100 "
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <a
                              href="goo"
                              className=" font-body text-t3 text-primary-500"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>

                        <div className="text-center pt-1 pb-1">
                          <button
                            type="submit"
                            className="w-full flex justify-center font-body opacity-100
                            py-2 px-4 shadow-l text-t4 
                            rounded-l text-white bg-primary-500 hover:bg-primary-600 hover:text-white
                         active:bg-primary-650"
                          >
                            {/* <span className="left-0 inset-y-0 flex items-center pl-3">
                              <LockClosedIcon
                                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                aria-hidden="true"
                              />
                            </span> */}
                            Sign in
                          </button>
                        </div>
                        <div className="text-center pt-9 pb-1">
                          <p className="font-body text-t3 text-neutral-700">
                            Or sign in with
                          </p>
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

                  <div className="lg:w-6/12 flex bg-primary-500 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6 text-center">
                      {/* <img
                        src="./images/Image 2342.png"
                        className="object-center rounded-none w-[412px]"
                      /> */}
                      <b className="font-heading text-t7 text-white ">
                        Voluptate dolor tempor
                      </b>
                      <div>
                        <small className="font-body text-t3 text-white">
                          Minim cupidatat cillum
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
