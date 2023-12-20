import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "../assets/css/Dashboard.css";
import { Link } from "react-router-dom";
import "../assets/css/hesw.css";

function Dashboard() {
  const user = useSelector(selectUser);
  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <div className="welcome-container">
          <h1>
            {" "}
            Welcome{" "}
            <span className=" username-color">
              {user ? user.username : "chithritha21@gmail.com"}{" "}
            </span>{" "}
            !{" "}
          </h1>
        </div>
        <img
          src={require("../assets/img/Dashboard.jpeg")}
          alt="Slide 8"
          className="slide-image3"
        />
        <div className="welcome-container1">
          <h2> View By Category </h2>
          <div class="clearfix"></div>
          <div class="cat_list">
            <div class="drug_details">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/ayush">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://www.himshilajit.com/wp-content/uploads/2021/10/ayush64_bb1.jpg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title">Ayush</div> <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details1">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/health-conditions/cold-and-fever">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="aii"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="data:image/jpeg;base64,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"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title1">Cold and Fever</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details2">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/personal-care">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai1"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://images.jdmagicbox.com/quickquotes/images_main/personal-care-product-2216803678-nl72rhaq.jpg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title2">Personal Care</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
            <div class="drug_details3">
              {" "}
              <Link to="https://www.netmeds.com/non-prescriptions/treatments/pain-relief-application">
                {" "}
                <span class="custom_img">
                  {" "}
                  <img
                    className="ai2"
                    onerror="this.src='/assets/icons/img_placeholder.svg'"
                    src="https://img1.exportersindia.com/product_images/bc-full/2019/6/4242393/pain-relief-spray-1559973590-4942454.jpeg"
                    alt="Ayush"
                  />{" "}
                </span>{" "}
                <div class="cat_title3">Pain Relief</div>{" "}
                <div class="save"> </div>{" "}
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-container4">
        <div class="links1">
          <Link to="https://www.netmeds.com/beauty">Beauty</Link>
          <Link to="https://www.healthkart.com/">Vitamins and Suppliments</Link>
          <Link to="https://nutrabay.com/">Health and Nutrition</Link>
          <Link to="https://www.firstaid4less.co.uk/Shop-By-Brand">
            View By Brand
          </Link>
        </div>
      </div>
      <div className="welcome-container2">
        <h2> Health Tips </h2>
        <section class="card__container">
          <div class="card__bx">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-paintbrush"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci1"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="data:image/jpeg;base64,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"
                  alt="Ayush"
                />
                <h31>Cool Ways To Use </h31>
                <h31>Cucumber For An </h31>
                <h312>Instant Glow</h312>

                <div className="pinkbtn2 pinkaboutus">
                  <Link to="https://www.healthline.com/health/beauty-skin-care/cucumber-for-skin">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card__bx1">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-solid fa-code"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci2"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="https://swisse.co.in/cdn/shop/products/Artboard6_7_800x.jpg?v=1681495877"
                  alt="Ayush"
                />

                <h32>Vitamin C and </h32>
                <h321>VitaminB12 Supplements </h321>
                <h313>Together</h313>
                <div className="pinkbtn3 pinkaboutus1">
                  <Link to="ttps://www.netmeds.com/health-library/post/can-you-take-vitamin-c-and-vitamin-b12-supplements-together-health-benefits-and-side-effects">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="card__bx2">
            <div class="card__data">
              <div class="card__icon">
                <i class="fa-brands fa-searchengin"></i>
              </div>
              <div class="card__content">
                <img
                  className="ci3"
                  onerror="this.src='/assets/icons/img_placeholder.svg'"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg?quality=90&webp=true&resize=375,341"
                  alt="Ayush"
                />
                <h33>Eat Nuts and </h33>
                <h322>Seeds for Bether </h322>
                <h314>Health</h314>
                <div className="pinkbtn3 pinkaboutus1">
                  <Link to="https://www.betterhealth.vic.gov.au/health/healthyliving/nuts-and-seeds">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
