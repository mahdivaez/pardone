import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import WhenCard from "./WhenCard";
import Steps from "./Steps";
import {Image} from "@nextui-org/image";
import Testimonial from "./Testimonial";
import DoctorSilder from "./DoctorSilder";
import { PetCards } from "./petCards";
import Footer from "./Footer";


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      {/* Your other components like Hero can go here */}
      <div className="flex">
        <Card
          name="دکتر الهام خلفی"
          img="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1673128095.jpg"
          field="دامپزشک عمومی - دکتری تخصصی پرندگان"
          cost=" 99,000 تومان"
        />
        <Card
          name="دکتر مصطفی میرگلوی بیات"
          img="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1706113346.jpg"
          field="دامپزشک عمومی - سگ و گربه و جونده"
          cost="74,000 تومان"
        />
        <Card
          name="دکتر نگین عامری"
          img="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1706793368.jpg"
          field=" دامپزشک عمومی - پرندگان و اگزوتیک"
          cost=" 90,000 تومان"
        />
        <Card
          name=" دکتر آرین ضیاء صفری"
          img="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1710407431.jpg"
          field="دکترای عمومی دامپزشکی - سگ و گربه"
          cost=" 68,000 تومان"
        />
      </div>
      <div className="flex justify-between m-20">
        <WhenCard />
        <WhenCard />
      </div>
      <div className="page_button flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          درخواست مشاوره
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          ثبت نام{" "}
        </button>
      </div>
     
      <div className="steps mt-10">
        
        <Steps/>      </div>

        <div className="page_button2 flex justify-center mt-15">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          درخواست مشاوره
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          ثبت نام{" "}
        </button>
      </div>
        <div className="Testemonial"><Testimonial/></div>
       <DoctorSilder 
                 name1="دکتر الهام خلفی"
                 name2="دکتر مصطفی میرگلوی بیات"
                 name3="دکتر نگین عامری"
                 name4=" دکتر آرین ضیاء صفری"


                 img1="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1673128095.jpg"
                 img2="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1706113346.jpg"
                 img3="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1706793368.jpg"
                 img4="https://dl.pardone.ir/rahnama/avatar/300_300_pd_1710407431.jpg"



       />
       <div className="petcards mt-20">
       <PetCards/>
       </div>

       <div className="page_button2 flex justify-center mt-15">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-extrabold rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          درخواست مشاوره
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-base px-6 py-3.5 text-center me-2 mb-2"
        >
          ثبت نام{" "}
        </button>
      </div>
      <div className="pet_img flex justify-center h-80 ">
        <img src="https://pardone.ir/images-home/bg-par.png" alt="" />
      </div>
      <Footer/>

       
      
    </div>
  );
}
