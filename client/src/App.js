import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeTemplate from './templates/HomeTemplate';
import { Home, Members, Product, Events, Contact } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeTemplate>
              <Home />
            </HomeTemplate>
          }
        />
        <Route
          path="/members"
          element={
            <HomeTemplate>
              <Members />
            </HomeTemplate>
          }
        />
        <Route
          path="/product"
          element={
            <HomeTemplate>
              <Product />
            </HomeTemplate>
          }
        />
        <Route
          path="/events"
          element={
            <HomeTemplate>
              <Events />
            </HomeTemplate>
          }
        />
        <Route
          path="/contact"
          element={
            <HomeTemplate>
              <Contact />
            </HomeTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
