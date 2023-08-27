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

/* a coordinate type for mostly animations */
type TPosition = { x: number, y: number };

/* removes a type field and adds the modified type of that field */
type ChangeFields<T, F> = Omit<T, keyof F> & F;

export type { TDatas, IUser, IThread, TPosition, TReplier, ChangeFields }