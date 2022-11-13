// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import Home from './components/Home/home.js';
import Product from './pages/Product/Product.js';
import PageDetail from './pages/PageDetail/PageDetail.js'

function App() {
  return (
    // <div className="App md:h-screen">
    //   <Home />
    // </div>
    <div className="App md:h-screen">
      <Product />
      {/* <PageDetail /> */}
    </div>
  );
}

export default App;


// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// // import UpLoadEvent from './components/UpLoadEvent/UpLoadEvent';
// import { Home, Product, Events, Contact, AppLayout } from './pages';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route index element={<Home />} />
//           {/* <Route path="/members" element={<Members />} /> */}
//           <Route path="/product" element={<Product />} />
//           <Route path="/events" element={<Events />} />
//           {/* <Route path="/events/add" element={<UpLoadEvent />} /> */}
//           <Route path="/contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;