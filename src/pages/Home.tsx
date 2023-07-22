import { IThread } from "@/types";
import Thread from "@/components/Thread";

const threads: IThread[] = [
  {
    id: "TEST",
    publisher: {
      id: "",
      username: "Kobeni",
      picture: require("@/assets/images/2feff08e009724a3f8c750a01185ecd3.jpg"),
      isVerified: true,
    },
    content: "The threads app is making me outhshine bightly",
    likes: 12,
    date: "",
    replies: [],
  },
  {
    id: "TEST_2",
    publisher: {
      id: "",
      username: "Marin kitagawa",
      picture: require("@/assets/images/308226132_123324800493904_7027576226844336253_n.jpg"),
      isVerified: true,
    },
    content: "good morning everyone! having a great day at @google",
    likes: 12,
    date: "",
    replies: [],
  },
  {
    id: "TEST_3",
    publisher: {
      id: "",
      username: "Lucy",
      picture: require("@/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg"),
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    likes: 12,
    date: "",
    replies: [],
  },
  {
    id: "TEST_4",
    publisher: {
      id: "",
      username: "Lucy",
      picture: require("@/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg"),
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    likes: 12,
    date: "",
    replies: [],
  },
  {
    id: "TEST_5",
    publisher: {
      id: "",
      username: "Lucy",
      picture: require("@/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg"),
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    likes: 12,
    date: "",
    replies: [],
  },
  {
    id: "TEST_6",
    publisher: {
      id: "",
      username: "Lucy",
      picture: require("@/assets/images/4a207a19f6b74f2b457e9a500174b928.jpg"),
      isVerified: true,
    },
    content: "one of the best video games i've ever played was made by @EA :*)",
    likes: 12,
    date: "",
    replies: [],
  },
];

const Home = () => {
  return (
    <>
      {threads.map((t) => (
        <Thread data={t} key={t.id} />
      ))}
    </>
  );
};

export default Home;
