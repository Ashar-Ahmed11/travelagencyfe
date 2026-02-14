
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Akhuwat1 from '../Images/newAkhuwat1.jpg'
import Akhuwat2 from '../Images/newAkhuwat2.jpg'
import Akhuwat3 from '../Images/newAkhuwat3.jpg'
import { getCdnUrl } from '../utils/cdnImage'

// import asaanQarz6 from '../Images/asan qarz6.jpg'
// import asaanQarz7 from '../Images/asan qarz7.jpg'
// import asaanQarz8 from '../Images/asan qarz8.jpg'
// import Infograph from '../Images/Infograph.png'
// import IslamicInfo from '../Images/Interest-Free Micro Loans.png'
// import getLoan from '../Images/Add a subheading.png'

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Transform Your Life with Travel Embassy Job Apply</h1>
              
              <p className="mb-4">
              Imagine a young entrepreneur struggling to keep their small business afloat, or a student dreaming of completing their education but unable to pay the fees. In today’s fast-paced world, financial stability can make the difference between giving up and achieving your dreams. Travel Embassy is more than just a lender; it provides the tools and support people need to create a better future.

              </p>
              
              <p className="mb-4">
              This story reflects how Travel Embassy Job Apply has transformed lives across Pakistan. From business owners to students and individuals facing hardships, Travel Embassy has helped countless people turn their goals into reality.

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={getCdnUrl(Akhuwat1)}
                  alt="Travel Embassy Job Apply Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Empowering Every Pakistani with Accessible Job Apply</h2>
              
              <p className="mb-4">
              In 2024, Travel Embassy Job Apply was launched to support everyday Pakistanis with a simple, fast process.
              </p>
              
              <p className="mb-4">
              The initiative is simple, fair, and inclusive — fast approvals and an easy process that helps thousands move forward and take control of their futures.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2:  From Struggle to Success: A Student’s Journey to Dreams Fulfilled</h2>
              
              <p className="mb-4">
              Haseeb Ahmed, a bright young student from Lahore, dreamed of becoming an engineer. Despite excelling in school, his family could not afford the fees — until he discovered Travel Embassy.
              </p>
              
              <p className="mb-4">
              Through Travel Embassy’s student Job Apply, Haseeb found an affordable path with minimal paperwork and flexible options.
              </p>
              
              <p className="mb-4">
              Today, Haseeb has graduated from one of Pakistan’s top engineering schools and is a respected civil engineer.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={getCdnUrl(Akhuwat2)}
                  alt="Travel Embassy Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3: Turning Struggles into Success: Sarah’s Journey as a Small Business Owner</h2>
              
              <p className="mb-4">
               Sarah’s life took a hopeful turn when another shop owner introduced her to Travel Embassy Job Apply. A nearby center welcomed her with simple requirements and multiple options tailored for small business owners.
              </p>
              
              <p className="mb-4">
              With the funds, Sarah was able to stock her shop with more products and improve the space, attracting more customers. Her income soon doubled, and her store became a bustling part of the community.
              </p>
              
              <p className="mb-4">
              The ease, care, and support she received from Travel Embassy transformed her business into a thriving success.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4:Immediate Help When It Matters Most: Ali’s Story of Emergency Support</h2>
              
              <p className="mb-4">
              Life can throw unexpected challenges your way. Many people in Pakistan rely on Travel Embassy Job Apply to navigate these moments.


              </p>
              
              <p className="mb-4">
              Take Ali’s story, for example. With urgent hospital bills to pay, he turned to Travel Embassy for help. His application was approved almost immediately.



              </p>
              
              <p className="mb-4">
              Thanks to the flexible terms, Ali managed the crisis and got back on track.
              </p>
              
              {/* <p className="mb-4">
              Ali was able to handle his position without getting deeper in debt because the terms of his loans were flexible. He is now financially comfortable and in good health, and he is thankful that Akhuwat Foundation helped him through one of the hardest times in his life.
              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">5: Helping Farhan Buy a Home—Turning a Dream into Reality</h2>
              
              <p className="mb-4">
              Owning a home is a dream for many Pakistanis, yet prices often put it out of reach. Thanks to Travel Embassy’s easy home Job Apply, countless families have moved into their own homes.
              </p>
              
              <p className="mb-4">
              Farhan Sheikh, a hardworking middle-class professional from Rawalpindi, had been saving for years but still couldn’t afford a house. He turned to Travel Embassy for support.
              </p>
              
              <p className="mb-4">
              The process was fast and straightforward. Within a short time, Farhan received the approval he needed for the down payment. Today, he and his family are living in their own home, proving that with the right support, even dreams that seem impossible can come true.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={getCdnUrl(Akhuwat3)}
                  alt="Travel Embassy Job Apply Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: Ghulam’s Transformation: Boosting Agriculture with Travel Embassy Job Apply</h2>
              
              <p className="mb-4">
              Travel Embassy’s agricultural Job Apply helps rural farmers access essential tools, seeds, and resources. Ghulam Abbas from Multan upgraded equipment and irrigation and tripled his yield.

              </p>
              
              {/* <p className="mb-4">
              Ghulam Abbas, a farmer from Multan with a lot of knowledge, had to deal with these problems. Even after years of hard work, his income stayed low because he used old gardening methods. He knew that using new tools would help him get more crops and support his family better. But standard banks wouldn't lend him money because they saw farming as a risky business.
              </p>
              
              <p className="mb-4">
              Ghulam then looked at Akhuwat Foundation. In less than a week, his application was accepted. He used the money to buy better seeds, set up a new watering system, and improve his plowing tools. His crop production tripled as a result, and his pay went up a lot.

              </p> */}
    
              <h2 className="fw-bold mt-5 mb-4">Transforming Lives Across Pakistan</h2>
              
              <p className="mb-4">
              Travel Embassy Job Apply is changing lives nationwide, supporting students, business owners, farmers, and families.
              </p>
              
              <p className="mb-4">
              The Travel Embassy Job Apply Scheme 2025 provides clear solutions designed to remove barriers and empower people.


              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

