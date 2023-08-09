import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import { TickIcon } from "@/assets/icons/Icons";
import { IThread } from "@/types";

interface IThreadProps {
  data: IThread;
}

const Thread = ({
  data: { publisher, content, pictures, likes, date, replies },
}: IThreadProps) => {
  const userLink = `/users/${publisher.username}`;

  return (
    <div className="w-full min-h-[130px] bg-white flex rounded-md">
      <aside className="min-w-fit pr-[12px]">
        <Link
          to={userLink}
          className="block w-10 h-10 rounded-full bg-red-500 overflow-hidden">
          <img
            src={publisher.picture}
            alt="yet to be added..."
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </Link>
      </aside>
      <div className="w-full">
        <header className="flex justify-between">
          <div className="flex items-center">
            <h2 className="text-md font-bold mr-[6px]">
              <Link to={userLink}>{publisher.username}</Link>
            </h2>
            {publisher.isVerified && <TickIcon width={14} height={14} />}
          </div>
          <div>
            <span className="text-slate-500 text-md">{date}</span>
          </div>
        </header>
        <main>
          <p className="text-md mb-[7px]">{content}</p>
          <ImageSlider pictures={pictures} />
        </main>
        <footer>
          <p>{likes}</p>
          <p>{replies.length}</p>
        </footer>
      </div>
    </div>
  );
};

export default Thread;
