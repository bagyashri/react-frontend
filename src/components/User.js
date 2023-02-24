import React from 'react';
import Home from './Accordions';
import Screen from './Screen';




export default function User() {
    
  return (
    <>
    <div>
        <nav className='flex justify-center gap-5 font-body bg-primary-350'>
            <ui>home</ui>
            <ui>profile</ui>
            <button></button>
        </nav>

    </div>
    <div className=' border border-r-black'>
    <div className='container border border-danger-350'>
        <div className='flex mr-5 justify-end gap-2'>
        <button
                            type="submit"
                           
                            className="w-10 flex justify-center font-body opacity-100
                            py-2 px-4 shadow-l text-t4 
                            rounded-l text-white bg-primary-500 hover:bg-primary-600 hover:text-white
                         active:bg-primary-650"
                          >
                          
                            Cancel
                          </button><button
                            type="submit"
                           
                            className="w-10  flex justify-center font-body opacity-100
                            py-2 px-4 shadow-l text-t4 
                            rounded-l text-white bg-primary-500 hover:bg-primary-600 hover:text-white
                         active:bg-primary-650"
                          >
                            
                           Save
                          </button>


        </div>
      
        <div className="m-2 p-5">
        <Home body1="hggx" body2="hello" body3="there are some items which has"/>
  
    </div>
 
</div>


        </div>
        




    
   
    </>
 
  )
}
