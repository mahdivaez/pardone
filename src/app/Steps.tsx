"use client"
import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';

const Steps = () => {
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const stepsElement = document.getElementById('steps');
      if (stepsElement) {
        const stepsPosition = stepsElement.getBoundingClientRect().top;
        setShowSteps(stepsPosition < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: '۱',
      title: 'انتخاب دامپزشک',
      content: 'دامپزشک متخصص آنلاین خود را انتخاب کنید',
    },
    {
      number: '۲',
      title: 'ثبت نام یا ورود',
      content: 'در سایت پردونه ثبت نام کنید و یا وارد حساب کاربری خود شوید',
    },
    {
      number: '۳',
      title: 'پر کردن فرم',
      content: 'فرم نمایش داده شده را پر کنید و سوال و موضوع مشاوره خود را بصورت کامل مطرح کنید',
    },
    {
      number: '۴',
      title: 'پرداخت هزینه',
      content: 'هزینه بصرفه مشاوره دامپزشک آنلاین را پرداخت کنید',
    },
    {
      number: '۵',
      title: 'دریافت پاسخ',
      content: 'در سریع‌ترین زمان، پاسخ داده می‌شود و بصورت پیامک با خبر می‌شوید',
    },
  ];

  const trail = useTrail(steps.length, {
    opacity: showSteps ? 1 : 0,
    transform: showSteps ? 'translateY(0)' : 'translateY(50px)',
    delay: 500,
  });

  return (
    <div id="steps" className="bg-white ">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between ">
        <div className="text-center ">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">مراحل</p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
            چگونه از مشاوره دامپزشکی آنلاین در پردونه استفاده کنم؟
          </h3>
        </div>

        <div className="mt-20  ">
          {trail.map((style, index) => (
            <animated.ul key={index} style={style}>
              <li className="bg-gray-100 p-5 pb-10 text-center mb-20  rounded-full transition-transform duration-500 transform hover:scale-105 shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                <div className="flex flex-col items-center ">
                  <div className="flex-shrink-0 relative top-0 -mt-16">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                      {steps[index].number}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">{steps[index].title}</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">{steps[index].content}</p>
                  </div>
                </div>
              </li>
            </animated.ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
