import React from 'react'

function Statistics() {
  return (
    <div>
         <section className="our-facts">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>A Few Facts About Our Club</h2>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="count-area-content percentage">
                          <div className="count-digit">4.5</div>
                          <div className="count-title">Rating</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="count-area-content">
                          <div className="count-digit">20</div>
                          <div className="count-title">Events Attended</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12">
                        <div className="count-area-content new-students">
                          <div className="count-digit">56</div>
                          <div className="count-title">Current Members</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="count-area-content">
                          <div className="count-digit">32</div>
                          <div className="count-title">Awards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Statistics