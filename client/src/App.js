import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InfoPage, MemberInfo } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import {
  Home,
  Members,
  Product,
  Events,
  Contact,
  AppLayout,
  NoFooterLayOut,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<NoFooterLayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/members/:id" element={<MemberInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/members" element={<Members />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<InfoPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<InfoPage />} />
            {/* <Route path="/events/add" element={<UpLoadEvent />} /> */}
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
