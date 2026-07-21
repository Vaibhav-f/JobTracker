import React from 'react'
import { Calendar ,Plus ,StarCheck,NotepadText,ArrowUp,TrendingUp,Eye,Mail,Bookmark} from 'lucide-react'
import right from "../../../assets/right.webp"

const Hero = () => {
    const stats = [
  {
    icon: NotepadText,
    icon1:ArrowUp,
    icon2:TrendingUp,
    heading: "20",
    iconBg: "bg-purple-900",
    paragraph: "Applications.",
    percentage: "95%",
  },
  {
    icon: Eye,
     icon1:ArrowUp,
    icon2:TrendingUp,
    heading: "15",
      iconBg: "bg-green-600",
    paragraph: "Offers",
    percentage: "90%",
  },
  {
    icon: Mail ,
     icon1:ArrowUp,
    icon2:TrendingUp,
    heading: "5",
     iconBg: "bg-orange-600",
    paragraph: "Interviews",
    percentage: "92%",
   
  },
  {
    icon: Bookmark,
     icon1:ArrowUp,
    icon2:TrendingUp,
    icontext :"text-6xl",
    heading: "7",
       iconBg: "bg-pink-600",
    paragraph: "Saved Jobs",
    percentage: "88%",
  },
];
  return (
    <div className='text-white  py-10 '>

        {/* Left div */}
        <div className='flex'>

        
<div className='lg:flex md:flex '>
        <div className='px-8 lg:px-15   py-12 lg:py-20  '>
              <div>
                <p className='bg-indigo-500  rounded-2xl w-full max-w-75 px-4 py-1'>Good to see you again , Vaibhav!</p>
            <h1 className='font-bold text-3xl lg:text-6xl md:text-5xl mt-5 lg:mt-8'>Welcome back, </h1>
                <span  className='font-bold  text-3xl lg:text-6xl md:text-5xl text-indigo-700'>Vaibhav</span>
                <p className='font-normal mt-6 text-sm'>Track, organize and manage all your job applications in one place . Stay consistence and land your dream job!</p>
              </div>
                  
                      <img className='object-top-left w-full max-w-150 mr-10 lg:hidden md:hidden  ' src={right} alt="" />

              <div className='lg:flex  gap-5 md:py-4'>
                    <div className='flex gap-2 px-4 py-2 border-slate-800 lg:mt-5 border-2 rounded-xl justify-center items-center w-full  lg:max-w-90 md:max-w-70'>
                       <div className='bg-slate-700 rounded-xl w-full max-w-10  p-2 text-purple-300 '>
                        <Calendar/>
                        </div>
                        <div>
                            <p>Monday, 20 July 2026</p>
                            <p>Have a productive Day!</p>
                        </div>
                    </div>
                  

                    <div className='flex gap-3 px-4 py-2 border-slate-800 mt-5 border-2 rounded-xl justify-center items-center w-full lg:max-w-90 md:max-w-60 font-semibold text-xl bg-indigo-700 border-none   bg-linear-to-r from-violet-600 to-indigo-600
                    cursor-pointer active:scale-105'>
                        <Plus 
                       size={45}
                        />
                            <h3>Add New Job</h3>
                    </div>


              </div>
                   <div className='lg:flex  hidden gap-3 px-4 py-3 border-slate-800 mt-5 border-2 rounded-xl justify-center items-center w-full max-w-150' >
                        <StarCheck />
                        <div>
                            <h2 className='text-indigo-700  font-bold text-2xl'>Pro Tip</h2>
                            <p>Consistent tracing today leads to better oportunities tomarrow.</p>
                        </div>
                    </div>
             </div>
                    {/* Right div */}

              
                 <img className=' hidden lg:block md:flex object-top-left w-full lg:max-w-180 md:max-w-120  ' src={right} alt="" />
              
     
      </div>
              
        </div>

        
 
       {/* Last div */}

       <div className='flex gap-2 lg:gap-4  px-10 flex-wrap'>
        {stats.map((data,idx)=>{
            const Icon  = data.icon
            const Icon1  = data.icon1
             const Icon2  = data.icon2
            return  <div key={idx} className='flex  w-full sm:w-[48%] lg:w-[31%] xl:w-[23%]  lg:gap-8 gap-4 border-slate-800 border-2 rounded-xl px-6 py-1 lg:py-4 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 '>
              
          <div className=' flex justify-center items-center     '>
           <Icon
           className={`${data.iconBg} px-3 py-1  rounded-full  `}
           size={65}
           />
           </div>

           <div className=' flex flex-col'>
             <h1 className='font-semibold text-2xl py-2'>{data.heading}</h1>
             <p>{data.paragraph}</p></div>
             <div className='flex-col'>
                <div className='flex text-green-700 font-semibold text-xl'>
                     <Icon1
                    
                     />
                <h3>{data.percentage}</h3>
                </div>
                <Icon2
                className= {data.icontext}
                size={50}
                />
             </div>
            
           </div>
        })}
           
           

          
       </div>

      
    </div>
  )
}

export default Hero
