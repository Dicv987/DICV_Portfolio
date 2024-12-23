import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage.tsx';
import WorkInProgress from '../Pages/WorkInProgress.tsx';
 

export function MyRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<WorkInProgress />} />
          <Route path="/about" element={<WorkInProgress />} />
        </Routes>
      </Router>
    );
  }