import { useGitUser } from "../store";

export function Dashboard(){
    const gitUser = useGitUser((state) => state.user);
    return (
        <div className="">
            <div className="flex gap-2 text-white items-center p-5 mb-1">
                <div>Hostify🚀</div>
                <div className="text-md">{gitUser.nickname}'s projects</div>
            </div>
            <div>
                
            </div>
        </div>
    );
}