// import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDashboard from './components/BlogDashboard';
import FormBlog from './components/FormBlog';

function App() {
  return (
      <div classNmae="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<BlogDashboard />} />
          <Route path="add" element={<FormBlog />} />
        </Routes>
      </div>

  );
}

export default App;
