import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from "./components/route/AllRoutes"
import AuthProvider from "./components/route/AuthProvider"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AuthProvider>

      <AllRoutes />
      
    </AuthProvider>
  </BrowserRouter>
);