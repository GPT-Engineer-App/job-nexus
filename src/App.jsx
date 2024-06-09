import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";

function App() {
  const [jobs, setJobs] = useState([
    { title: "Software Engineer", company: "Tech Corp", location: "San Francisco, CA" },
    { title: "Product Manager", company: "Business Inc.", location: "New York, NY" },
    { title: "UX Designer", company: "Design Studio", location: "Remote" },
  ]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index jobs={jobs} />} />
      <Route path="/post-job" element={<PostJob addJob={addJob} />} />
      </Routes>
    </Router>
  );
}

export default App;
