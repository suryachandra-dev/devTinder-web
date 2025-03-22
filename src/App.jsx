import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
function App() {
  return (
    <>
      <Provider store={appStore}>
        {/*.BrowserRouter is a context provider that enables navigation and routing in your React app. 
    .The basename="/" ensures that all routes are relative to the root of the application. */}
        <BrowserRouter basename="/">
          <Routes>
            {/**Public Route */}
            <Route path="/login" element={<Login />} />
            {/* Protected Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/requests" element={<Requests />} />
              </Route>
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
