import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Hero/Hero'
import DashboardOverview from './DachboardOverview'
import RecentApplications from '../../RecentApplications'
import ApplicationAnalytics from '../../Data/ApplicationAnalytics'
import UpcomingInterviews from '../../Data/UpcomingInterviews'
import ActivityTimeline from '../../Data/ActivityTimeline'
import Stats from '../../Components/Starts/Starts'
import JobForm from '../../Components/JobForm/JobForm'

const Home = () => {
  return (
    <div className='bg-slate-950 min-h-screen '>
        <Navbar/>
        <Hero/>
        <DashboardOverview/>
        <RecentApplications/>
        <ApplicationAnalytics/>
        <UpcomingInterviews/>
        <ActivityTimeline/>
        <JobForm/>
      
    </div>
  )
}

export default Home
