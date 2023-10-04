import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export const BreakingNews = () => {
  return (
    <div className="p-2 md:text-sm lg:text-xl rounded-sm my-8 bg-gray-300 flex text-xs">
        <button className="bg-primary
        px-8 py-2 font-medium text-white mr-4">Latest</button>
      <Marquee>
        <Link>
        <span className="mr-8 text-gray-800 font-semibold">
        Match Highlights: Germany vs Spain — as it happened</span>
        </Link>
        <Link>
        <span className="mr-8 text-gray-800 font-semibold">
        Match Highlights: Germany vs Spain — as it happened</span>
        </Link>
        <Link>
        <span className="mr-8 text-gray-800 font-semibold">
        Match Highlights: Germany vs Spain — as it happened</span>
        </Link>
      </Marquee>
    </div>
  );
};
