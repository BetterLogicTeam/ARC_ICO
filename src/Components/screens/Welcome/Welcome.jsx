import React from "react";
import { Container, Box, Link, Grid, Divider, Button } from "@material-ui/core";
import image from "../assets/images/about/thumb.png";
export default function Welcome(props) {
  return (
    <section
      className="banner-section bg_img overflow-hidden"
      style={{ background: "url(/assets/images/banner/bg.png) center" }}
    >
      <div className="container">
        <div className="banner-wrapper d-flex flex-wrap align-items-center">
          <div className="col-md-8">
            <div className="banner-content">
              <h1 className="banner-content__title">
                TRY
                <span className="text--base ms-1"> YOUR LUCK</span> WITH <br />{" "}
                CARDS
              </h1>
              <p className="banner-content__subtitle">
                PLAY CARD AND EARN CRYPTO ONLINE. THE ULTIMATE ONLINE PLAYING
                CARD PLATFORM.
              </p>
              {/* <!--  <div className="button-wrapper">
                    <a href="#" className="cmn--btn active btn--lg"><i className="las la-play"></i> Play Now</a>
                    <a href="sign-up.html" className="cmn--btn btn--lg">Sign Up</a>
                </div> --> */}
              <img src={image} alt="" className="shape1" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="banner-thumb">
              <center className="banner_top">
                <img src={image} alt="banner" style={{ width: "100%" }} />
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="banner-section bg_img bg_img4">
    //   <div className="container">
    //     <div className="banner-wrapper d-flex flex-wrap alter">
    //       <div class="col-md-8">
    //         <div class="banner-content">
    //           <h1 class="banner-content__title" >TRY&nbsp;
    //             <span class="text--base"> YOUR LUCK</span>  WITH  CARDS </h1>
    //           <p class="banner-content__subtitle">PLAY CARD AND EARN CST TOKEN. THE ULTIMATE ONLINE PLAYING CARD PLATFORM.</p>

    //           <img src="/cashino.png" alt="" class="shape1" />
    //         </div>
    //       </div>
    //       <div class="col-md-4">
    //         <div class="banner-thumb">
    //           <center class="banner_top">
    //             <img src="/cashino.png" alt="banner" style={{ width: "100%" }} />
    //           </center>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
