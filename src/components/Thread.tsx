import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import {
  TickIcon,
  DotsIcon,
  HeartIcon,
  CommentIcon,
  RepostIcon,
  ShareIcon,
} from "@/assets/icons/Icons";
import { IThread, TReplier } from "@/types";
import Stats from "./Stats";
import { useAppDispatch } from "@/hooks/useReduxHooks";
import { PopupTypes, openPopup } from "@/features/popupSlice";

interface IThreadProps {
  data: IThread;
}

interface IThreadAside {
  userLink: string;
  publisherPicture?: string;
  replies: TReplier[];
}

const Thread = ({
  data: { publisher, content, pictures, likes, date, replies },
}: IThreadProps) => {
  const userLink = `/users/${publisher.username}`;

  return (
    <div className="w-full min-h-[130px] flex rounded-md">
      <ThreadAside
        userLink={userLink}
        publisherPicture={publisher.picture}
        replies={replies.slice(0, 2)}
      />
      <div className="w-[calc(100%-(12px+2.5rem))] text-md">
        <ThreadHeader
          userLink={userLink}
          username={publisher.username}
          isVerified={publisher.isVerified}
          date={date}
        />
        <ThreadContent pictures={pictures}>{content}</ThreadContent>
        <ThreadFooter likes={likes} repliesCount={replies.length} />
      </div>
    </div>
  );
};

function ThreadAside({ userLink, publisherPicture, replies }: IThreadAside) {
  return (
    <aside className="min-w-fit pr-3 relative">
      <Link
        to={userLink}
        className="block w-10 h-10 rounded-full overflow-hidden">
        <img
          src={publisherPicture}
          alt="yet to be added..."
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>
      {replies.length > 0 && (
        <div className="w-[2px] h-[calc(100%-2.5rem-12px-1.5rem)] bg-gray-400 rounded-full m-[10px_auto_0]"></div>
      )}
      <div className="relative mt-1 w-full h-6">
        {replies.map((reply, index) => {
          return (
            <img
              src={reply.picture}
              alt="user image"
              className="w-6 h-6 rounded-full border-themeColor border-[3px] absolute top-0"
              style={{ left: index * 15 + "px" }}
              key={index}
            />
          );
        })}
      </div>
    </aside>
  );
}

function ThreadHeader({
  userLink,
  username,
  isVerified,
  date,
}: {
  userLink: string;
  username: string;
  isVerified?: boolean;
  date: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <header className="flex justify-between">
      <div className="flex items-center">
        <h2 className="text-md font-bold mr-[6px]">
          <Link to={userLink}>{username}</Link>
        </h2>
        {isVerified && <TickIcon width={14} height={14} />}
      </div>
      <div className="flex">
        <span className="text-slate-500 text-md">{date}</span>
        <button
          className="px-2 ml-3"
          onClick={() =>
            dispatch(
              openPopup({
                type: PopupTypes.BOTTOM_NAV,
                config: {
                  closeOnBackgroundClick: true,
                  duration: 250,
                },
                options: [
                  { id: 1, title: "mute" },
                  [
                    { id: 2, title: "hide" },
                    { id: 3, title: "block", color: "tomato-red" },
                    { id: 4, title: "report", color: "tomato-red" },
                  ],
                ],
              })
            )
          }>
          <DotsIcon />
        </button>
      </div>
    </header>
  );
}

function ThreadContent({
  children,
  pictures,
}: {
  children: React.ReactNode;
  pictures: string[];
}) {
  return (
    <main>
      <p className="font-thin">{children}</p>
      {pictures.length > 0 && (
        <section className="mt-[8px]">
          <ImageSlider
            pictures={pictures}
            sliderSize={{ breakPoint: 525, size: "100%" }}
            controller
          />
        </section>
      )}
    </main>
  );
}

function ThreadFooter({
  likes,
  repliesCount,
}: {
  likes: number;
  repliesCount: number;
}) {
  return (
    <footer className="w-fit text-gray-800">
      <ThreadInteractions />
      <Stats
        leftStat={`${repliesCount} replies`}
        rightStat={`${likes} likes`}
      />
    </footer>
  );
}

function ThreadInteractions() {
  return (
    <section className="flex gap-[18px] pt-[10px] pb-[10px]">
      <button className="btn-interaction">
        <HeartIcon
          filled={false}
          fillColor="black"
          width="100%"
          height="100%"
        />
      </button>
      <button className="btn-interaction">
        <CommentIcon />
      </button>
      <button className="btn-interaction">
        <RepostIcon />
      </button>
      <button className="btn-interaction">
        <ShareIcon />
      </button>
    </section>
  );
}

export default Thread;
