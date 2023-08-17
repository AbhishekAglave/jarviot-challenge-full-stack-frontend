import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Report from "./components/Report";
import Sheet from "@mui/joy/Sheet";
import { Divider } from "@mui/joy";

function App() {
  return (
    <Sheet
      style={{
        width: "100%",
        height: "100%"
      }}
      color="primary"
    >
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">G-Drive Risk Report</h2>
        </header>
        <Divider />
        <main className="App-main">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Login />} />
                <Route path="/report" element={<Report />} />
                <Route path="*" element={<div>Page not found</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </Sheet>
  );
}

export default App;
