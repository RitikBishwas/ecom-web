import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At our ecommerce website, we believe that shopping should be an enjoyable and seamless experience.
           our mission has always been to provide our customers with the best products at unbeatable prices. 
           We are proud to be a leading online retailer, offering a wide variety of items.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
