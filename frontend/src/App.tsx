import './App.css'
import { Landingpage } from './pages/Landingpage';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Auth0Provider } from '@auth0/auth0-react';

function Auth0ProviderWithNavigate({
  children
}: {
  children: React.ReactNode;
}){
  const navigate = useNavigate();

  const onRedirectCallback = (appState? : { returnTo?: string }) => {
    navigate(appState?.returnTo || window.location.pathname, { replace: true });
  };
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams = {{
        redirect_uri: window.location.origin,
      }}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
    </Auth0Provider>
  );
}

function App() {
  return (
    <div className='h-screen bg-black'>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
      </div>
  );
}

export default App
