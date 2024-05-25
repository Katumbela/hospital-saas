import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { users } from "../../../utils/image-exporter";

export function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      img: users.user_1,
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "CEO, Company A",
    },
    {
      id: 2,
      img: users.user_2,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    {
      id: 3,
      img: users.user_3,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    {
      id: 4,
      img: users.user_2,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    // Adicione mais depoimentos conforme necessário
  ];

  return (
    <div id="testimonials" className="px-6 py-16 my-16 md:px-1 slider-container">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mx-[2rem]">
            <div className="text-white p-4  w-full testimonial">
              <div className="flex gap-3">
                <img
                  src={testimonial.img}
                  className="w-[3em] h-[3em] rounded-full"
                  alt=""
                />
                <div>
                  <h2 className="font-bold">{testimonial.name}</h2>
                  <p className="text-secondary">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-3 text-secondary">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
