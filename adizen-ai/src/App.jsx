import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Topbar from "./components/Topbar/index";
import Sidebar from "./components/Sidebar/index";
import Album from "./components/utils/Album";
import './App.css'

function App() {

  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
        <ProSidebarProvider>
          <ColorModeContext.Provider value={colorMode}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div className="app">
                      <Sidebar />
                      <main className="content">
                          <Topbar />
                          <Routes>
                              <Route path="/" element={<Album/>} />
                              <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                              <Route path="/analytics" element={<h1>Analytics</h1>} />
                              <Route path="/starred" element={<h1>Starred</h1>} />
                          </Routes>
                      </main>
                  </div>
              </ThemeProvider>
          </ColorModeContext.Provider>
        </ProSidebarProvider>
    </BrowserRouter>
  )
}

export default App
