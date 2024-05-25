import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TestimonialsData } from "../../../domain/config/testimonials-config";
import { CardTestimonialComponent } from "../card-testimonials/card-testimonial";

export function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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

  return (
    <section
      id="testimonials"
      className="  py-2 my-2 container slider-container"
    >
      <center>
        <h1 className="text-secondary text-4xl 2xl:text-6xl font-bold hacker">Expectativas</h1>
      </center>
      <br />
      <br />
      <br />
      <Slider {...settings}>
        {TestimonialsData.map((testimonial) => (
          <CardTestimonialComponent
            img={testimonial.img}
            role={testimonial.role}
            key={testimonial.id}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </Slider>
    </section>
  );
}
