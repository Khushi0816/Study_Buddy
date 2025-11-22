import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WeekHeader() {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-2 text-gray-700 font-medium">
        <FaChevronLeft className="cursor-pointer text-pink-500" />
        <span>
          Mon, 10/11 - Sun, 16/11
        </span>
        <FaChevronRight className="cursor-pointer text-pink-500" />
      </div>
    </div>
  );
}
