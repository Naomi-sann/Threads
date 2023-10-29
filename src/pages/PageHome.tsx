import { IThread } from "@/types";
import Thread from "@/components/Thread/Thread";
import Button from "@/components/Button";
import { useAppSelector } from "@/hooks/useReduxHooks";

/* dummy datas */
const threads: IThread[] = [
  {
    id: "TEST",
    publisher: {
      id: "",
      username: "MaxBlagun",
      picture: new URL(
        "/src/assets/images/image-maxblagun.png",
        import.meta.url
      ).href,
      isVerified: true,
    },
    content: "its awesome",
    pictures: [],
    likes: 12,
    date: "3m",
    replies: [
      {
        id: "wacda",
        username: "HaHa",
        isVerified: false,
        picture: new URL(
          "/src/assets/images/image-juliusomo.png",
          import.meta.url
        ).href,
      },
      {
        id: "wacda",
        username: "HaHa",
        isVerified: false,
        picture: new URL(
          "/src/assets/images/image-ramsesmiron.png",
          import.meta.url
        ).href,
      },
      {
        id: "wacda",
        username: "HaHa",
        isVerified: false,
        picture: new URL("/src/assets/images/download.jpg", import.meta.url)
          .href,
      },
    ],
  },
  {
    id: "TEST_2",
    publisher: {
      id: "",
      username: "marin_kitagawa",
      picture: new URL(
        "/src/assets/images/image-ramsesmiron.webp",
        import.meta.url
      ).href,

      isVerified: false,
    },
    content: "人際失敗\n讀書失敗\n戀愛失敗\n家庭失敗\n長相失敗\n焦慮成功",
    pictures: [],
    likes: 12,
    date: "15m",
    replies: [],
  },
  {
    id: "TEST_3",
    publisher: {
      id: "",
      username: "Julie",
      picture: new URL(
        "/src/assets/images/image-juliusomo.webp",
        import.meta.url
      ).href,
    },
    content: "Some of my shots from switzerland!",
    pictures: [
      new URL("/src/assets/images/download.jpg", import.meta.url).href,
      new URL(
        "/src/assets/images/cities-in-switzerland-1920x1080.webp",
        import.meta.url
      ).href,
      new URL("/src/assets/images/download.jpg", import.meta.url).href,
    ],
    likes: 12,
    date: "2h",
    replies: [],
  },
  {
    id: "TEST_4",
    publisher: {
      id: "",
      username: "ABCDEEE",
      picture: new URL(
        "/src/assets/images/image-maxblagun.png",
        import.meta.url
      ).href,
      isVerified: true,
    },
    content: "my first thread\n hope you guys are doing awesome.",
    pictures: [],
    likes: 12,
    date: "6h",
    replies: [],
  },
  {
    id: "TEST_5",
    publisher: {
      id: "",
      username: "lucy",
      isVerified: true,
    },
    content:
      "This is a mock sentence, the current site is under development and is being built, all the content and text messages here are only to have a visual test on the layout and the entire design of it so please do not consider it as a serious or a product-ready webpage and be aware.",
    pictures: [],
    likes: 12,
    date: "57s",
    replies: [],
  },
  {
    id: "TEST_6",
    publisher: {
      id: "",
      username: "MY_Username",
      picture: undefined,
      isVerified: true,
    },
    content:
      "Helllllllooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo let's all have a great day!!!",
    pictures: [],
    likes: 12,
    date: "4d",
    replies: [],
  },
  {
    id: "TEST_7",
    publisher: {
      id: "ford_official",
      username: "Ford",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4BrCyFD93GeDuDFAnZO_ulJlNWw_tpnzJTZIhYS3&s",
      isVerified: true,
    },
    content: "The new ford dark horse 2024 design view",
    pictures: [
      // "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_Mustang_Dark_Horse_13_32.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
      // "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_Mustang_Dark_Horse_01_32.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
      // "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_Mustang_Dark_Horse_11_32.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
      // "https://images.wsj.net/im-825812?width=700&size=1.5005861664712778&pixel_ratio=1.5",
      // "https://cdn.shopify.com/s/files/1/1310/3673/files/Mustang-Dark-Horse-front-view-Carbon-Revolution-A-Recognized-Leader-in-the-Sector.jpg?v=1680144754",
      // "https://cdn.shopify.com/s/files/1/1310/3673/files/Mustang-Dark-Horse-from-top-Mystichrome-Color-shifting-Paint-From-Blue-to-Amber.jpg?v=1680144868",
    ],
    likes: 12_267_925,
    date: "11d",
    replies: [],
  },
];

const Home = () => {
  const device = useAppSelector((state) => state.device.device);

  return (
    <div className="flex flex-col items-center">
      {device === "desktop" && (
        <div className="w-threadWidth flex justify-center">
          <StartThread />
        </div>
      )}
      {threads.map((t) => (
        <div
          className="w-threadWidth h-fit border-b border-gray-400 px-3 py-4 desktop:px-0"
          key={t.id}>
          <Thread data={t} />
        </div>
      ))}
    </div>
  );
};

function StartThread() {
  return (
    <div className="w-full py-3 border-b-[1px] border-gray-400 flex justify-between items-center">
      <img
        src={
          new URL("../assets/images/image-maxblagun.png", import.meta.url).href
        }
        alt="profile picture"
        width="40"
        height="40"
        className="rounded-full"
      />
      <div className="grow cursor-text flex items-center mx-3 h-full">
        <span className="text-gray-800">Start a thread...</span>
      </div>
      <Button disabled>Post</Button>
    </div>
  );
}

export default Home;
