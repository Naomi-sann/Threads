import type { TDatas } from "@/types";

const datas: TDatas = {
    currentUser: {
        id: "",
        name: "",
        username: "",
        follows: {
            followers: [""],
            followersCount: 123,
            followings: [""],
            followingsCount: 23,
        },
        threads: [],
        isVerified: true,
    },
    threads: [
        {
            id: "",
            poster: "",
            content: "wdcwa",
            likes: 12,
            replies: [
                {
                    id: "",
                    poster: "",
                    content: "",
                    likes: 2,
                    replies: [],
                }
            ],
        }
    ]
}

export default datas;