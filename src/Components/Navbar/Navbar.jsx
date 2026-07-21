import React from 'react'
import {FileUser ,Search ,Moon  ,ChartNoAxesColumn ,Bookmark, LayoutDashboard,BriefcaseBusiness } from "lucide-react"


const Navbar = () => {
    return (
        <div>

            <nav className='flex  justify-between px-4 md:px-6 lg:px-14 w-full  border-2 border-slate-800 h-17 rounded-b-lg  bg-slate-900 fixed top-0 z-50   '>


                {/*  Left side icon and name */}

                <div className='flex gap-3  items-center  tracking-tighter  w-full max-w-72   '>
                    <div className='w-full max-w-10 h-10 bg-indigo-500 flex justify-center items-center rounded-xl text-white  '>
                        <BriefcaseBusiness />
                    </div>

                    <div className='text-white w-full  h-10 flex flex-col justify-center'>
                        <h2 className='font-semibold text-xl' >Job Tracker</h2>
                        <p className='font-normal text-sm  hidden lg:block md:block'>track your applications</p>
                    </div>
                </div>

                {/*  middle Links */}

                <div className='lg:flex justify-center items-center hidden md:flex  lg:gap-8 tracking-wider w-full md:gap-3'>
                   <div className='flex gap-2  p-1  cursor-pointer hover:border-2 hover:bg-slate-700 border-none rounded-xl 
                   hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105'>
                    <LayoutDashboard 
                    className='text-indigo-500 lg:flex md:flex hidden'
                    />
                    <h3 className=' text-white text-sm py-1 hidden md:block lg:block'>Dashboard</h3>
                   </div>

                   <div className='flex gap-2 p-1 cursor-pointer lg:hover:border-2 lg:hover:bg-slate-700 border-none rounded-xl
                   lg:hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105'>
                    <FileUser 
                    className=' text-white lg:flex md:flex hidden'
                    />
                    <h3 className='hidden lg:block text-white text-sm py-1'>Applications</h3>
                   </div>

                        <div className='flex gap-2 p-1 cursor-pointer lg:hover:border-2 lg:hover:bg-slate-700 border-none rounded-xl
                        lg:hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105 '>
                   <ChartNoAxesColumn 
                    className='text-white lg:flex md:flex hidden'
                    />
                    <h3 className='hidden lg:block text-white text-sm py-1'>Statistics</h3>
                   </div>

                  <div className='flex gap-2 p-1  cursor-pointer lg:hover:border-2 lg:hover:bg-slate-700 border-none rounded-xl   shrink-0
                  lg:hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105'>
                    <Bookmark
                    className='text-white lg:flex md:flex hidden'
                    />
                    <h3 className='hidden lg:block text-white text-sm py-1'>Saved Jobs</h3>
                   </div>


                </div>

                <div className='flex gap-3 text-white justify-center items-center w-full max-w-50  '>
                    <Search 
                    className='border-2 p-1 cursor-pointer rounded-lg border-slate-800 w-8 h-8 lg:w-10 lg:h-10'
                   
                    />
                    <Moon
                    className='border-2 p-1 cursor-pointer rounded-lg border-slate-800  w-8 h-8 lg:w-10 lg:h-10'
                   
                    />
                     <Moon
                    className='border-2 p-1 cursor-pointer rounded-lg border-slate-800  w-8 h-8 lg:w-10 lg:h-10'
                    
                    />

                </div>

               

             

            </nav>

        </div>
    )
}

export default Navbar
