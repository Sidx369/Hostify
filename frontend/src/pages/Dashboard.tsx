import { useGitUser } from "../store";

export function Dashboard(){
    const gitUser = useGitUser((state) => state.user);
    return (
        <div className="">
            <div className="flex gap-2 text-white items-center p-5 mb-1">
                <div>Hostify🚀</div>
                <div className="text-neutral-700/70 text-lg">/</div>
                <div className="text-md">{gitUser.nickname}'s projects</div>
            </div>
            <div className=" border-b  w-full border-white/10"></div>
            <div className="grid grid-cols-12 grid-rows-10 h-screen gap-10 p-5">
                <div className="bg-red-300 col-span-4 row-span-8 rounded-lg"></div>
                <div className="bg-blue-300 col-span-8 row-span-8  rounded-lg"></div>
            </div>
        </div>
    );
}