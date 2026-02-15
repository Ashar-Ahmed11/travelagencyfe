import React from 'react'
import Crousal from './homeComponents/Crousal'
import Cards from './homeComponents/Cards'
import AkhuwatLoanBanner from './homeComponents/AkhuwatLoanBanner'
import ApplyLoanDes from './homeComponents/ApplyLoanDes'
import AkhuwatLoanStatus from './homeComponents/AkhuwatLoanStatus'
import WhyChooseAkhuwat from './homeComponents/WhyChooseAkhuwat'
import AkhuwatLoanInstruction from './homeComponents/AkhuwatLoanInstruction'
import AkhuwatLoanScheme from './homeComponents/AkhuwatLoanScheme'
import AkhuwatAdvantage from './homeComponents/AkhuwatAdvantage'
import AkhuwatImages1 from './homeComponents/AkhuwatImages1'
import AkhuwatImages2 from './homeComponents/AkhuwatImages2'
import AkhuwatImages3 from './homeComponents/AkhuwatImages3'
import StatsCards from './homeComponents/StatsCard'
import AkhuwatPlans from './akhuwatplans'
import ApplyLoanForm from './homeComponents/ApplyLoanForm'
import JobCategories from './homeComponents/jobCategories'
import WorkProcess  from './homeComponents/workProcess'
import TopCountries from './homeComponents/TopCountries'


const Home = () => {
  return (
    
    <div>
      <Crousal />
      <TopCountries/>
      <JobCategories/>
      <ApplyLoanForm/>
      <StatsCards />
      <AkhuwatImages2 />
      {/* <WithDraw/> */}
      <Cards />

   <WhyChooseAkhuwat />
      <AkhuwatImages3 />
   <AkhuwatLoanStatus/>
      <AkhuwatLoanInstruction />
      <AkhuwatLoanScheme />
      <WorkProcess/>
      <AkhuwatImages1 />
    </div>
  )
}

export default Home
