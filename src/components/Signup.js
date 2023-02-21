import React from 'react'


export default function Signup() {
  return (
    <div>
      <div className='container bg-primary-300'>
        <div className=''>
           <div className='flex flex-col'>
                <span>Signup</span>
                <button>
                    sign in google
                </button>
                <button>
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

