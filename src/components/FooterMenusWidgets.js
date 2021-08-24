import React from "react"
import RecentPost from "./RecentPost"

const FooterMenusWidgets = ({}) => {
  return (
    <div className="footer-nav-widgets-wrapper header-footer-group">
      <div className="footer-inner">
        <div className="footer-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 footer-col">
                <aside className="widget footer-widget" role="complementary">
                  <div className="widget widget_text">
                      <div className="widget-content">
                        <h2 className="widget-title subheading heading-size-3">
                          ABOUT DAILYCATCHAT.COM
                        </h2>
                        <div className="textwidget">
                            <p>
                            DailyCatChat.com is all about cats! If you love cats, then you’re going to love our website!
                            </p>
                            <p>Here at DailyCatChat.com, we feature everything from heartwarming cat rescue stories to fun &amp; entertaining cat stories to cute cat pictures and videos. We are the ultimate cat lovers website!</p>
                            <p>Please be sure to tell your friends and family about our website so they too can enjoy the fun and entertaining cat content that we share!</p>
                            <p> We hope you enjoy our website! Thank you from the DailyCatChat.com team!</p>
                        </div>
                      </div>
                    </div>
                </aside>
              </div>
              <div className="col-lg-4 footer-col">
                <div className="widget footer-widget">
                  <h3 className="widget-title">Recent Posts</h3>
                  <RecentPost />
                </div>
              </div>
              <div className="col-lg-3 footer-col">
                <div className="widget footer-widget">
                  <h3 className="widget-title">Thank you for visiting our site!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMenusWidgets
