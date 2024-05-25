import { ITestimonials } from "../../../interfaces/testimonials/testimonials";
import { icons } from "../../../utils/image-exporter";

export function CardTestimonialComponent({
  img,
  name,
  role,
  content,
}: ITestimonials) {
  return (
    <div className="">
      <div className="text-white p-4  w-[18rem] testimonial">
        <img src={icons.apos} className="w-[2em]" alt="" />
        <p className="mt-3 text-secondary">{content}</p>
        <div className="flex mt-3 gap-3">
          <img src={img} className="w-[2.5em] h-[2.5em] rounded-full" alt="" />
          <div>
            <h2 className="font-bold text-sm">{name}</h2>
            <p className="text-secondary text-xs">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
