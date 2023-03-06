import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Categories from './pages/Categories';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => (
  <>
    <Header />
    <main className="bg-light min-vh-100 d-flex py-5">
      <div className="container-lg pt-3 pt-md-5">
        <div className="row mx-0 justify-content-center pt-3">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default App;
