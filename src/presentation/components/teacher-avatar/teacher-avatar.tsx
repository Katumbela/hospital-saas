import { ITrainer } from "../../../interfaces/trainer/trainer";


export function TeacherAvatarComponent({name, picture, role} : ITrainer) {
  return (
    <div className="flex gap-2">
      <img src={picture} alt={'Trainer ' + name + 'profile photo'} className="2xl:w-[3em] 2xl:h-[3em] my-auto w-[2em] h-[2em]" />
      <div className="flex my-auto flex-col">
        <span className="text-white text-sm 2xl:text-m font-semibold">{name}</span>
        <span className="text-secondary text-xs 2xl:text-sm hacker">{role}</span>
      </div>
    </div>
  );
}
