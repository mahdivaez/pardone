import { HoverEffect } from "../components/ui/card-hover-effect";

export function PetCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    img:"https://www.freeiconspng.com/thumbs/dog-icon/dog-icon-4.png",
    title: "دامپزشکی آنلاین سگ ",
    description:
            "دامپزشک حیوانات خانگی می تواند بصورت آنلاین در نگهداری حیوانات اهلی به شما به صورت اصولی کمک کند. فرقی ندارد که حیوان و پت شما گربه، سگ، طوطی، قناری، جوجه، گوسفند و گاو باشد، دامپزشکی حیوانات اهلی این تخصص و تجربه را دارد که در زمینه تغذیه و رفع مشکلات و بیماری حیوانات به شما کمک کرده و مشاوره دهد. اگر نیاز به واکسیناسیون و موارد از این قبیل نیز باشد به شما خواهد گفت.",
    link: "https://stripe.com",
  },
  {
    img:"https://cdn4.iconfinder.com/data/icons/animals-57/500/cat_animal_-1024.png",

    title: "دامپزشک آنلاین گربه",
    description:"گربه ها امروزه در بسیاری از خانه ها وجود دارند و حیواناتی جذابی هستند. شما همواره برای نگهداری گربه خود نیاز به دامپزشک آنلاین گربه دارید تا بتوانید رفتار های گربه خود را بشناسید و با نژاد گربه خود بیشتر آشنا شوید. همچنین وجود دامپزشک گربه آنلاین باعث می شود تا بیماری های گربه را بشناسید و نحوه مراقبت از گربه را یاد بگیرید؛ یعنی بدانید که تغذیه گربه شما به چه صورت باشد و حتی در گرفتن ناخن های گربه به شما مشاوره دهد و در صورت وجود بیماری برای درمان خانگی به شما کمک کند.",
    link: "https://netflix.com",
  },
  {
    img:"https://static.vecteezy.com/system/resources/previews/008/255/037/original/rabbit-icon-on-a-white-background-rabbit-sign-symbol-for-web-and-mobile-app-eps-10-vector.jpg",

    title: "دامپزشک آنلاین خرگوش",
    description:
      "خرگوش یکی از حیوانات مورد علاقه کودکان است که باعث خوشحالی آن ها می شود. دامپزشک آنلاین خرگوش باعث می شود تا بیماری هایی که بین انسان و خرگوش مشترک است را به شما گوش زد کند و رعایت نکات بهداشتی را به شما بگوید. خرگوش لوپ یکی از نژاد خرگوش هاست که بسیار زیباست و این باعث شده است که بسیاری از مردم بدنبال دامپزشکی خرگوش لوپ باشند و نیاز به شماره دامپزشک خرگوش داشته باشند. هزینه دامپزشکی خرگوش بسیار کم است و شما با وجود دامپزشک خرگوش، به راحتی می توانید مراقب خرگوش و نحوه مراقبت از آن باشید.",
    link: "https://google.com",
  },
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FlZJfGbzOKbltzQ_qY7ctD1nhw_WrAZCFQm4GgizUQ&s",

    title: "دامپزشک آنلاین پرندگان",
    description:
      "دامپزشک آنلاین پرندگان به صورت تخصصی به معاینه کبوتر، طوطی، قناری، مرغ عشق، عروس هلندی و پرندگان زینتی مختلف می پردازد و به شما جهت نگهداری و درمان پرندگان مشاوره می دهد. دامپزشک پرندگان آنلاین علائم بیماری پرندگان و طیور را می داند، در صورتی که شما خیلی دیر متوجه این علائم می شوید. وجود همیشگی دامپزشک آنلاین پرنده باعث می شود تا نگهداری از پرنده شما بسیار آسان شود و مراقب تغذیه و بیماری پرندگان باشید. مشاوره با دامپزشک پرندگان بسیار مورد نیاز کسانیست که مراقبت از پرندگان برایشان مهم است و به همین جهت از دامپزشک متخصص پرندگان غافل نمی شوند.",
    link: "https://meta.com",
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Snake_icon.svg/1200px-Snake_icon.svg.png",

    title: "دامپزشک حیوانات وحشی",
    description:
      "برخی از مردم علاقه شدیدی به حیوانات وحشی نظیر مار و گربه وحشی و دیگر حیوانات دارند. دامپزشک خزندگان و دامپزشک حیوانات وحشی خیلی در این زمینه به شما کمک می کنند تا رفتارهای این حیوانات را بشناسید و مراقب آسیب زدن و مراقبت آنان باشید. زیرا نگهداری از حیوانات وحشی که باید در طبیعت باشند بسیار حائز اهمیت است و نیاز به مراقبت ویژه و در صورت لزوم درمان دارند.",
    link: "https://amazon.com",
  },
  {
    img:"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/bird.png",

    title: "مشاوره پرندگان زینتی",
    description: "پرندگان زینتی و زیبا با آواز به خانه شما زینت می بخشند. بسیاری از افراد به نگهداری پرندگان زینتی که سخن می گویند نظیر طوطی و مرغ مینا و طوطی برزیلی روی آورده اند. از این رو باید با دامپزشک آنلاین مرغ مینا، دامپزشک آنلاین مرغ عشق، دامپزشک طوطی ملنگو و دامپزشک قناری در ارتباط بوده تا مراقب بیماری و تغذیه آن ها باشند. دامپزشک پرندگان خانگی باعث می شود که شما پرندگانی سالم داشته باشید و نحوه نگه داری آن ها را یاد بگیرید.",
    link: "https://microsoft.com"
  },
];
