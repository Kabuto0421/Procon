import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 各ページコンポーネントをインポート
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* 404ページ */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;