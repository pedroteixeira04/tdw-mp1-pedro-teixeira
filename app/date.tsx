import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString} className="text-[#5EFF8C]">
      {format(new Date(dateString), "LLLL d, yyyy")}
    </time>
  );
}
