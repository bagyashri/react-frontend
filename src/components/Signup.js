import React from 'react'


export default function Signup() {
  return (
    <div>
      <div className='container sm:mx-auto h-full p-10 pt-20 border border-b-danger-250 '>
        <div className='mx-[16px] md:mx-[32px] border border-black'>
           
                <div className='pt-5 border border-black '>
                    <span className='py-6 font-heading text-4xl leading-8 w-full '>Signup</span>
                </div>
                
                <div className='pt-10 flex flex-col space-y-4'>
                    <button className=' items-center justify-center text-2xl bg-[#2A7AEDFF] rounded-xs h-12 p-2 w-full'>
                        sign in google
                    </button>
                    <button className=' items-center justify-center text-2xl font-sans text-white bg-[#070707] rounded-xs h-12 p-2 w-full'>
                        sign up apple
                    </button>
                </div>
        

           
            <form>
                <div className='sm:flex'>
                    <div className=' flex flex-col'>
                        <label htmlFor='name'>Firstname</label>
                        <input type="name" name="name"/>
                    </div>
                    <div className=' flex flex-col'>
                        <label htmlFor='fname'>Lastname</label>
                        <input type="name" name="fname"/>
                    </div>
                </div>

                <div className=' flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input type="name" name="email" placeholder='example@email.com'/>
                </div>
                <div className=' flex flex-col'>
                    <label htmlFor='password'>Password</label>
                    <input type="name" name="password"  placeholder='Enter least 8+ characters'/>
                </div>

                <div className='flex '>             
                    <input  type="checkbox" className="bg-red-100 border-red-300 text-red-500 focus:ring-red-200"/>
                   <span> by signing agree condition</span>
                </div>
                <button>
                    SignUp
                </button>

               
            </form>

        </div>
      </div>
    </div>
  )
}

