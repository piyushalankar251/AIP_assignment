import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop01 from "./pages/Desktop01";
import Desktop02 from "./pages/Desktop02";
import Desktop12 from "./pages/Desktop12";
import Desktop03 from "./pages/Desktop03";
import Desktop04 from "./pages/Desktop04";
import Desktop05 from "./pages/Desktop05";
import Desktop06 from "./pages/Desktop06";
import Desktop07 from "./pages/Desktop07";
import Desktop11 from "./pages/Desktop11";
import Desktop08 from "./pages/Desktop08";
import Desktop09 from "./pages/Desktop09";
import Desktop13 from "./pages/Desktop13";
import Desktop10 from "./pages/Desktop10";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-02":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-12":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-03":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-04":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-05":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-06":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-07":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-11":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-08":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-09":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-13":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-10":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop01 />} />
      <Route path="/desktop-02" element={<Desktop02 />} />
      <Route path="/desktop-12" element={<Desktop12 />} />
      <Route path="/desktop-03" element={<Desktop03 />} />
      <Route path="/desktop-04" element={<Desktop04 />} />
      <Route path="/desktop-05" element={<Desktop05 />} />
      <Route path="/desktop-06" element={<Desktop06 />} />
      <Route path="/desktop-07" element={<Desktop07 />} />
      <Route path="/desktop-11" element={<Desktop11 />} />
      <Route path="/desktop-08" element={<Desktop08 />} />
      <Route path="/desktop-09" element={<Desktop09 />} />
      <Route path="/desktop-13" element={<Desktop13 />} />
      <Route path="/desktop-10" element={<Desktop10 />} />
    </Routes>
  );
}
export default App;
