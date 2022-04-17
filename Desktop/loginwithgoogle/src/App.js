import './App.css';
import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

const clientId = "423253214186-v4d5ks7hd8lnltjbjkookrgt28c66dcj.apps.googleusercontent.com"


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })
  
  var accessToken = gapi.auth.getToken().access_token
  console.log("token :" , accessToken)

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  )
}

export default App;
