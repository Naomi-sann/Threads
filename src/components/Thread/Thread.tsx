import { Link } from "react-router-dom";
import ThreadHeader from "./ThreadHeader";
import ImageSlider from "@/components/ImageSlider";
import {
  HeartIcon,
  CommentIcon,
  RepostIcon,
  ShareIcon,
} from "@/assets/icons/Icons";
import { IThread, TReplier } from "@/types";
import Stats from "@/components/Stats";
import IconButton from "@/components/IconButton";
import { groupDigits } from "@/utils/utils";

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
    <div className="w-full flex rounded-md">
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
    <aside className="min-w-fit pr-3 relative pt-[2px]">
      <Link
        to={userLink}
        className="block w-10 h-10 rounded-full overflow-hidden">
        <img
          src={
            publisherPicture ||
            new URL("../../assets/images/user-default.jpg", import.meta.url)
              .href
          }
          alt="yet to be added..."
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </Link>
      {replies.length > 0 && (
        <div className="w-[2px] h-[calc(100%-83.5px)] bg-gray-300 rounded-full m-[10px_auto_0]"></div>
      )}
      <div className="relative mt-2 w-full h-6">
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

function ThreadContent({
  children,
  pictures,
}: {
  children: React.ReactNode;
  pictures: string[];
}) {
  return (
    <main>
      <p className="whitespace-pre-line break-words">{children}</p>
      {pictures.length > 0 && (
        <section className="mt-[7px]">
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

function ThreadInteractions() {
  return (
    <section className="flex gap-1 py-[5px] -ml-[7px]">
      <IconButton type="background_scale">
        <HeartIcon
          filled={false}
          fillColor="black"
          className="scale-125 mt-[1px]"
        />
      </IconButton>
      <IconButton type="background_scale">
        <CommentIcon />
      </IconButton>
      <IconButton type="background_scale">
        <RepostIcon />
      </IconButton>
      <IconButton type="background_scale">
        <ShareIcon />
      </IconButton>
    </section>
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
    <footer className="w-fit text-gray-600 text-[15px]">
      <ThreadInteractions />
      <Stats
        leftStat={`${groupDigits(repliesCount)} replies`}
        rightStat={`${groupDigits(likes)} likes`}
      />
    </footer>
  );
}

export default Thread;
