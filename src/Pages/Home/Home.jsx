import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Hero/Hero'
import DashboardOverview from './DachboardOverview'
import RecentApplications from '../../RecentApplications'
import ApplicationAnalytics from '../../Data/ApplicationAnalytics'
import UpcomingInterviews from '../../Data/UpcomingInterviews'
import ActivityTimeline from '../../Data/ActivityTimeline'

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
      
    </div>
  )
}

export default Home
