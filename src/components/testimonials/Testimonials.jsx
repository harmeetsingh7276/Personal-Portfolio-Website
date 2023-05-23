import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.jpg";
import AVTR2 from "../../assests/avatar2.jpg";
import AVTR3 from "../../assests/avatar3.jpg";
import AVTR4 from "../../assests/avatar4.jpg";

// import Swiper core and required modules
import { Pagination , Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Mudassir Ali",
    post: "Software Engineer at LinkedIn",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium, quaerat at repellendus fugiat aperiam laboriosam, error voluptatem placeat vero itaque quo asperiores! Magni eius numquam velit commodi quos ducimus?",
  },
  {
    avatar: AVTR2,
    name: "Gayatri Shinde",
    post: "Full Stack Developer at Intangles ",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium, quaerat at repellendus fugiat aperiam laboriosam, error voluptatem placeat vero itaque quo asperiores! Magni eius numquam velit commodi quos ducimus?",
  },
  {
    avatar: AVTR3,
    name: "Neeraj Baipureddy",
    post: "Software Engineer at LinkedIn",
    review:"Harmeet is a highly accomplished professional renowned for his exceptional qualities and remarkable contributions within the industry. During our collaboration on a Salesforce project at Edubrite, I had the privilege of witnessing Harmeet's proactive nature and unwavering commitment to excellence. His profound expertise in Java, MySQL  played a pivotal role in the success of our team. I personally benefitted from his extensive knowledge, particularly in debugging. Harmeet's meticulous attention to detail, unwavering dedication to producing top-notch work, and remarkable problem-solving skills significantly elevated the outcome of our project. Furthermore, his strong work ethic, remarkable teamwork acumen, and positive attitude will make him an invaluable asset to any company.",
  },
  {
    avatar: AVTR4,
    name: "Ashween Ramakrishan",
    post: "Software Engineer at LinkedIn",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde praesentium, quaerat at repellendus fugiat aperiam laboriosam, error voluptatem placeat vero itaque quo asperiores! Magni eius numquam velit commodi quos ducimus?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Collegues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review ,post }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <h5 className="text-light">{post}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
