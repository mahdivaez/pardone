"use client"

import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";

const Card = ({ name, img, field, cost }: { name: string; img: string; field: string; cost: string }) => {
  // Split the field string into an array using '-'
  const fields = field.split("-").map(tag => tag.trim());
  
  // Extracting the first and second part of the field string
  const [firstField, secondField] = fields;
  
  return (
    <>
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border border border-gray-300 rounded-xl mr-3 ml-3 p-4 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <div className="relative h-40 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-full bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src={img} alt="card-image" className="object-contain w-full h-full rounded-full" />
      </div>
      <div className="p-6">
        <h5 className="flex mb-2 justify-center font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        {/* Display the 'تخصص' label once */}
        <h4 className="flex justify-center font-sans text-right text-base antialiased font-light leading-relaxed text-inherit">
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">تخصص</span>

        </h4>
        {/* Render each part of the field string in its own Badge component */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{firstField}</span>

        <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">{secondField}</span>
        </div>
        <h2 className="flex justify-center font-sans text-base antialiased pb-5 pt-5 font-light leading-relaxed text-inherit">
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">هزینه مشاوره {cost}</span>

        </h2>
      </div>
      <div className='flex justify-center'>
   
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              درخواست مشاوره
            </button>
      
      </div>
    </div>

    </>
  );
};

export default Card;
