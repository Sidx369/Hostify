import { useAuth0 } from "@auth0/auth0-react";

export function Appbar(){
    const { loginWithRedirect } = useAuth0();

    return <div className="flex justify-between items-center text-white">
        <div>Hostify🚀</div>
        <div className="flex gap-5 text-xs">
            <div>Home</div>
            <div>Products</div>
            <div>Resources</div>
            <div>Pricing</div>
        </div>
        <div className="bg-white/20 p-1 text-xs px-3 rounded-full" onClick={() => loginWithRedirect()}>Login</div>
    </div>
}