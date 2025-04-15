import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import ProtectedRoute from "./utils/ProtectedRoute";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import RefundPolicy from "./components/RefundPolicy";
import Footer from "./components/Footer";
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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/requests" element={<Requests />} />
              </Route>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </>
  );
}
export default App;
