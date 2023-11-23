import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Features/DashBoard/Home";
import Profile from "./pages/Profile";
import AppLayout from "./Component/AppLayout";
import ProtectedRoute from "./Component/ProtectedRoute";
import Header from "./Component/Header";

function App(props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route exact path="home" element={<Home />} />
            <Route exact path="profile" element={<Profile />} />
          </Route>
          <Route exact path={"/login"} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
