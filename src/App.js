import './App.css';
import Browse from './Pages/Browse'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { FooterContainer } from './Containers/footer'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuthListener } from './hooks'

function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <Switch>

          <IsUserRedirect user={user} loggedInPath="/browse" path="/signin" exact>
            <Signin />
          </IsUserRedirect>

          <IsUserRedirect user={user} loggedInPath="/browse" path="/signup" exact>
            <Signup />
          </IsUserRedirect>

          <ProtectedRoute user={user} path="/browse" exact>
            <div style={{ backgroundColor: "#111" }}>
              <Browse />
            </div>
          </ProtectedRoute>

          <IsUserRedirect user={user} loggedInPath="/browse" path="/" exact>
            <Home />
          </IsUserRedirect>

        </Switch>
      </Router>
      {/* <FooterContainer /> */}
    </>
  );
}

export default App;
