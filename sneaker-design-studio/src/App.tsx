import { BrowserRouter, Routes, Route } from "react-router-dom";

import DesignEditor from "./components/DesignEditor";
import MyDesigns from "./components/MyDesigns";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DesignEditor />} />
        <Route path="/designs" element={<MyDesigns />} />
        <Route path="/designs/:id" element={<DesignEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
