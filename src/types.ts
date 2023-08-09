/*
 the file contains all the global (shared) types 
*/

/* User object type */
interface IUser {
    readonly id: string;
    name: string;
    username: string;
    picture?: string;
    follows: {
        followers: IUser[];
        followings: IUser[];
    }
    threads: IThread[];
    isVerified?: boolean;
}

/* 
 contains a shorter properties of user type
*/
type TReplier = Omit<IUser, "threads" | "follows" | "name">;


/* Thread(post) object type */
interface IThread {
    readonly id: string;
    publisher: TReplier;
    content: string;
    pictures: string[];
    likes: number;
    date: string;
    AddedThreads?: IThread[];
    replies: TReplier[];
}

/* base app data type */
type TDatas = {
    currentUser: IUser;
    threads: IThread[]
}

export type { TDatas, IUser, IThread }