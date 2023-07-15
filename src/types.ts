/*
 the file contains all the global (shared) types 
*/

// User object type
interface IUser {
    readonly id: string;
    name: string;
    username: string;
    picture?: string;
    follows: {
        followers: string[];
        followersCount: number;
        followings: string[];
        followingsCount: number;
    }
    threads: IThread[];
    isVerified?: boolean;
}

// base type for a thread(post), comment, etc

// Thread(post) object type
interface IThread {
    readonly id: string;
    poster: string;
    content: string;
    likes: number;
    replies: IThread[];
}

// base app data type
type TDatas = {
    currentUser: IUser;
    threads: IThread[]
}

export type { TDatas, IUser, IThread }