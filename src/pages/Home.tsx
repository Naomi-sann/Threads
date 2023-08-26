import { IThread } from "@/types";
import Thread from "@/components/Thread";

/* dummy datas */
const threads: IThread[] = [
  {
    id: "TEST",
    publisher: {
      id: "",
      username: "kobeni",
      picture: "/src/assets/images/2feff08e009724a3f8c750a01185ecd3.jpg",
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
        picture:
          "/src/assets/images/__angel_devil_chainsaw_man_drawn_by_champi__sample-a5f848a25440e1d9c9f472adc1e061cf.jpg",
      },
      {
        id: "wacda",
        username: "HaHa",
        isVerified: false,
        picture: "/src/assets/images/cities-in-switzerland-1920x1080.webp",
      },
      {
        id: "wacda",
        username: "HaHa",
        isVerified: false,
        picture:
          "/src/assets/images/avatars-Ywx1lArS4ahFDVws-K24FuA-t500x500.jpg",
      },
    ],
  },
  {
    id: "TEST_2",
    publisher: {
      id: "",
      username: "marin_kitagawa",
      picture:
        "/src/assets/images/308226132_123324800493904_7027576226844336253_n.jpg",
      isVerified: false,
    },
    content: "good morning everyone! having a great day at @google",
    pictures: [],
    likes: 12,
    date: "15m",
    replies: [],
  },
  {
    id: "TEST_3",
    publisher: {
      id: "",
      username: "lucy",
      picture: "/src/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg",
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    pictures: [
      "/src/assets/images/Need for Speed™ Most Wanted 2023-07-20 20-45-59.00_00_28_25.Still007.png",
      "/src/assets/images/Need for Speed™ Most Wanted 2023-07-20 20-45-59.00_00_33_09.Still002.png",
      "/src/assets/images/Need for Speed™ Most Wanted 2023-07-20 20-45-59.00_01_30_23.Still003.png",
    ],
    likes: 12,
    date: "2h",
    replies: [],
  },
  {
    id: "TEST_4",
    publisher: {
      id: "",
      username: "lucy",
      picture: "/src/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg",
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
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
      picture: "/src/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg",
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    pictures: [],
    likes: 12,
    date: "57s",
    replies: [],
  },
  {
    id: "TEST_6",
    publisher: {
      id: "",
      username: "lucy",
      picture: "/src/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg",
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    pictures: [],
    likes: 12,
    date: "4d",
    replies: [],
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {threads.map((t) => (
        <div
          className="w-threadWidth border-b border-lightGray p-[10px]"
          key={t.id}>
          <Thread data={t} />
        </div>
      ))}
    </div>
  );
};

export default Home;
