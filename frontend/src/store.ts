import {create} from "zustand";

interface GitUserStore {
    user: any;
    gitUserSet: (newUser: any) => void;
}

export const useGitUser = create<GitUserStore>((set) => ({
    user: {},
    gitUserSet: (newUser: any) => {
        set(() => ({
            user: newUser,
        }));
    },
}));