import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import NotFound from './NotFound';


function App() { // 라우터의 주소들을 모아놓은 곳
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
    </Route>
    </Route>
  </Routes>
  );
};

export default App;