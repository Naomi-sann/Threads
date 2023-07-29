import type { TDatas } from "@/types";

const datas: TDatas = {
    currentUser: {
        id: "",
        name: "",
        username: "",
        follows: {
            followers: [],
            followings: [],
        },
        threads: [],
        isVerified: true,
    },
    threads: [
        {
            id: "",
            publisher: {
                username: "dawcdwa",
                picture: "",
                id: "",
            },
            content: "wdcwa",
            likes: 12,
            date: "",
            pictures: [],
            replies: [],
        }
    ]
}

export default datas;