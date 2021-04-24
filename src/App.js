import './App.scss';
import Index from './github/Index';
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <div className="App">
      <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      >
        <Index />
      </Auth0Provider>
    </div>
  );
}

export default App;
