import React from 'react';

const Testimonial = () => {
  const StarRating = ({ rating } : {rating : number}) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 1l2.37 6.135H18.7l-5.733 4.495 2.29 6.96L10 14.872 4.42 18.59l2.29-6.96L1.3 7.135H8.63L11 1z" clipRule="evenodd" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 fill-current" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 1l2.37 6.135H18.7l-5.733 4.495 2.29 6.96L10 14.872 4.42 18.59l2.29-6.96L1.3 7.135H8.63L11 1z" clipRule="evenodd" />
          </svg>
        );
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  };

  const testimonials = [
    {
      name: 'فاطمه سلطانی',
      rating: 5,
      message: 'بله الان یادم افتاد ، دقیقا جایی که هست بوی غذا و پخت وپز وجود داره و یک بار که دخترم عطر زده بود خیلی خیلی عطسه کرد بسیار سپاسگذارم از وقتی که گذاشتید و راهنمایی های مفیدتون چشم انجام میدم .انشالله که خوب بشه ❤️',
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      name: 'علی مظاهری',
      rating: 4,
      message: 'خیلی ممنونم از راهنمایی شما دکتر جان الان واقعا خیالم راحت شد، استرس داشتم که نکنه چیزیش شده گری عزیزم :) اسم سگم گری هستش دکتر❤️❤️❤️❤️',
      image: 'https://randomuser.me/api/portraits/women/14.jpg'
    },
    {
      name: 'سارا فردایی',
      rating: 5,
      message: 'ممنونم آقای دکتر خداخیرتون بده ازاینکه پاسخگوهستین ووقتتون میزارین تواین شب عزیزانشآالله خداهرآنچه که آرزودارینو براورده کنه ممنونم آقای دکتر انشاالله که خبرخوب شدنشو بهتون بدم خیرببینین شبتون خوش',
      image: 'https://randomuser.me/api/portraits/women/18.jpg'
    },
    {
      name: 'مهدی واعظ',
      rating: 3,
      message: 'Lبا تشکر فراوان حتما تهیه میکنم و مطابق دستور بهش میدم امیدوارم بهتر بشه بسیار بسیار از لطفتون سپاسگزارم. پاینده باشین.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'زیبا کشاورزی',
      rating: 4,
      message: 'سلام خانم دکتر .می خواستم بابت اینکه برام پاسخ دهی اینهمه وقت گذاشتید و دلسوزانه جواب دادید تشکر کنم . ان شاالله این شبها حاجت روا شوید . خداخیرتان بدهد که کامل جواب مردم را می دهید . ممنون از شما',
      image: 'https://randomuser.me/api/portraits/women/62.jpg'
    },
    {
      name: 'امین امینی',
      rating: 5,
      message: 'سلام خانم دکتر ، الحمدلله با تشکر از تشخیص درستتون امروز صبح بردیم پرنده رو دام پزشکی ، از قرار معلوم چرخیدگی تخم در رحم حیوون اتفاق افتاده بوده که خدارو شکر دکتر تونستن دربیارنش خیلی ممنونم ازتون و از این سایت',
      image: 'https://randomuser.me/api/portraits/women/19.jpg'
    }, {
        name: 'مهدی واعظ',
        rating: 3,
        message: 'Lبا تشکر فراوان حتما تهیه میکنم و مطابق دستور بهش میدم امیدوارم بهتر بشه بسیار بسیار از لطفتون سپاسگزارم. پاینده باشین.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        name: 'زیبا کشاورزی',
        rating: 4,
        message: 'سلام خانم دکتر .می خواستم بابت اینکه برام پاسخ دهی اینهمه وقت گذاشتید و دلسوزانه جواب دادید تشکر کنم . ان شاالله این شبها حاجت روا شوید . خداخیرتان بدهد که کامل جواب مردم را می دهید . ممنون از شما',
        image: 'https://randomuser.me/api/portraits/women/62.jpg'
      },
      {
        name: 'امین امینی',
        rating: 5,
        message: 'سلام خانم دکتر ، الحمدلله با تشکر از تشخیص درستتون امروز صبح بردیم پرنده رو دام پزشکی ، از قرار معلوم چرخیدگی تخم در رحم حیوون اتفاق افتاده بوده که خدارو شکر دکتر تونستن دربیارنش خیلی ممنونم ازتون و از این سایت',
        image: 'https://randomuser.me/api/portraits/women/19.jpg'
      },
  ];

  return (
    <div className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900" id="reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-10 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">دیدگاه های شما           </h2>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img className="w-12 h-12 rounded-full" src={testimonial.image} alt="user avatar" loading="lazy" />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">{testimonial.name}</h6>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="mt-4">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
