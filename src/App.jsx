import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  return (
    <>
      {/*.BrowserRouter is a context provider that enables navigation and routing in your React app. 
    .The basename="/" ensures that all routes are relative to the root of the application. */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* Children Routes */}
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
