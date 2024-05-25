export interface ITimendStudents {
  timeIcon: string;
  studentsIcon: string;
  hours: number;
  students: number;
}

export function CourseDetailsTime({
  timeIcon,
  studentsIcon,
  hours,
  students,
}: ITimendStudents) {
  return (
    <div className="flex xl:flex-row flex-col my-auto xl:gap-2">
      <span className="flex gap-2  text-sm 2xl:text-md text-white font-semibold">
        <img src={timeIcon} className="w-[1em] h-[1em] my-auto" alt="" />
        {hours} H
      </span>
      <span className="flex gap-2 text-sm 2xl:text-md text-white font-semibold">
        <img src={studentsIcon} className="w-[1em] h-[1em] my-auto" alt="" />
        {students} Alunos
      </span>
    </div>
  );
}
