import './App.css';
import Navbar from './components/Navbar/Navbar';
import Typography from '@mui/material/Typography';
import Sidebar from './components/Sidebar/Sidebar';
import Pages from './components/Pages/Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Typography>
      <Typography className="outer">
        <Typography className="inner">
          <BrowserRouter>
            <Navbar />
            <Typography className="mid-page">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Pages />} />
              </Routes>
            </Typography>
          </BrowserRouter>
        </Typography>
      </Typography>
    </Typography>
  );
}

export default App;
