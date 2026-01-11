import { useAuth0 } from "@auth0/auth0-react";
import { useGitUser } from "../store";
import { useEffect } from "react";

export function Appbar(){
    const { loginWithRedirect, user, isLoading } = useAuth0();
    console.log("Loading status: ", isLoading);
    console.log("current user", user);

    const gitUserSet = useGitUser((state) => state.gitUserSet);
    useEffect(() => {
        if(user) {
            gitUserSet(user);
        }
    }, [user]);

    return <div className="flex justify-between items-center text-white">
        <div>Hostify🚀</div>
        <div className="flex gap-5 text-xs">
            <div>Home</div>
            <div>Products</div>
            <div>Resources</div>
            <div>Pricing</div>
        </div>
        <div className="bg-white/20 p-1 text-xs px-3 rounded-full" onClick={() => loginWithRedirect({appState: {
            returnTo: "/dashboard"
        }})}>Login</div>
    </div>
}