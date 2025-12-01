// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

// components
import MainPage from "./pages/MainPage/MainPage";
import TopNav from "./features/TopNav/TopNav";

function App() {
  // 네비게이션 바에 표시하지 않을 라우트
  const notNavRoutes = ["/login"];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.layout}>
          {!notNavRoutes.includes(location.pathname) && <TopNav />}
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
