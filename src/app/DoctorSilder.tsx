import React from 'react';
import "./DoctorSlider.css";
import { Image } from "@nextui-org/react";

const DoctorSlider = ({ img1, img2, img3, img4 , name1 ,name2 , name3, name4 }: { img1: string, img2: string, img3: string, img4: string , name1:string, name2:string , name3:string , name4:string  }) => {
  return (
    <div className='doctorSlider flex justify-center mt-20 p-10 '>
      <div className="cards">
        <div className="card red">
          <Image src={img1} alt='img' />
          <div className="tooltip">{name1}</div>
          <button className="button"><span>درخواست مشاوره</span></button>

        </div>
        <div className="card blue">
          <Image src={img2} alt='img'  />
          <div className="tooltip">{name2}</div>
          <button className="button"><span>درخواست مشاوره</span></button>

        </div>
        <div className="card green">
          <Image src={img3} alt='img'/>
          <div className="tooltip">{name3}</div>
          <button className="button"><span>درخواست مشاوره</span></button>

        </div>
        <div className="card green">
          <Image src={img4}alt='img' />
          <div className="tooltip">{name4}</div>
          <button className="button"><span>درخواست مشاوره</span></button>

        </div>
      </div>
    </div>
  );
};

export default DoctorSlider;
