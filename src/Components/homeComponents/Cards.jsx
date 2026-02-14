import React from 'react'

const Cards = () => {
  const color = "#1175C1"
  return (

    <div className='' style={{ backgroundColor: '#f7f8f9' }}>
      <div className='container text-center' >
      {/* <p className='w-70% text-center'>Travel Embassy Job Apply</p> */}
      <p className='w-70% text-center' style={{paddingTop:'26px'}}>Apply for jobs at the Travel Agency</p>
      
      <h1 ><b>What We Offer</b></h1>
        <h1><b>Start on the road to a better and brighter future.</b></h1>
        <div className="row mt-5 d-flex justify-content-center flex-wrap">
          {[
            { icon: 'fa-money', title: 'Applications for Individual Jobs', desc: 'You can keep track of your application status at every step because the criteria are clear and easy to change.' },
            { icon: 'fa-suitcase', title: 'Applications for Business Jobs', desc: 'Enjoy a smooth procedure with timely decisions and less paperwork.' },
            { icon: 'fa-eye', title: 'Job Applications from Home', desc: 'Get full help with home-related jobs by filling out a quick and easy application.' },
            { icon: 'fa-heart', title: 'Applications for Wedding and Event Jobs', desc: 'Get jobs at unique events with flexible hours and quick approvals.' },
            { icon: 'fa-refresh', title: 'Applications for Jobs in Cars and Transportation', desc: 'Get speedy approvals and flexible driving and transportation jobs without any trouble.' },
          ].map((card, i) => (
            <div className={`col-md-4 col-12 mt-4 ${i >= 3 ? 'mb-4' : ''}`} key={card.title}>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="h-100 card border-0 rounded-4"
                style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.08)', transition: 'transform .2s ease, box-shadow .2s ease', overflow: 'hidden' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.12)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)'; }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${color}, #ffb84d)` }} />
                <div className="card-body text-start p-4">
                  <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 56, height: 56, borderRadius: 12, background: 'rgba(17, 117, 193,0.12)' }}>
                    <i className={`fa ${card.icon}`} aria-hidden="true" style={{ fontSize: 26, color }}></i>
                  </div>
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text mb-4 text-muted">{card.desc}</p>
                  <a
                    href="/"
                    className="btn border-0"
                    style={{ backgroundColor: color, color: '#fff', boxShadow: '0 6px 16px rgba(17, 117, 193,0.35)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 20px rgba(17, 117, 193,0.5)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 6px 16px rgba(17, 117, 193,0.35)'; }}
                  >
                    Contact Us&nbsp;→
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cards
