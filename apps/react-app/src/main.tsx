import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/protected";
import THEME from "@/mui-theme";
import store from "@/store/store";
import { Amplify } from "aws-amplify";

import "@/index.css";

import "regenerator-runtime";
import awsmobile from "./aws-exports";
import Layout from "./pages/layout";
import { DrawerProvider } from "./hooks/useDrawer";
import Info from "./pages/info";
import TwoFac from "./components/login/TwoFac";
import VisitTable from "./components/info/visit-table";
import Loading from "./components/general/loading";

const LoginPage = lazy(() => import("@/pages/login"));
const CreateVisit = lazy(() => import("@/pages/create-visit"));
const History = lazy(() => import("@/pages/home"));

Amplify.configure(awsmobile);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <DrawerProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/home/" />} />
              <Route element={<Layout />}>
                <Route
                  path="/home/"
                  element={
                    <ProtectedRoute>
                      <History />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/info/:id"
                  element={
                    <ProtectedRoute>
                      <Info isCreate={true} />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/visit/"
                  element={
                    <ProtectedRoute>
                      <VisitTable />
                    </ProtectedRoute>
                  }
                />
                <Route path="/two-factor/" element={<TwoFac />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<p> Page Not found! </p>} />
            </Routes>
          </BrowserRouter>
        </DrawerProvider>
      </Provider>
    </ThemeProvider>
  </Suspense>
);
