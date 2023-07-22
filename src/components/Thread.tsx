import { IThread } from "@/types";

interface IThreadProps {
  data: IThread;
}

const Thread = ({
  data: { publisher, content, likes, date, replies },
}: IThreadProps) => {
  return (
    <div className="w-[95%] min-h-[130px] bg-red-300 m-auto flex mt-10 last:mb-10">
      <aside className="min-w-fit pl-2 pr-3">
        <img
          src={publisher.picture}
          alt="yet to be added..."
          className="w-12 h-12 object-cover rounded-full"
          loading="lazy"
        />
      </aside>
      <div className="">
        <h2 className="font-extrabold">{publisher.username}</h2>
        <p>{content}</p>
        <p>{likes}</p>
        <p>{date}</p>
        <p>{replies.length}</p>
      </div>
    </div>
  );
};

export default Thread;
