import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Home/Home'));
const CourseRoutes = lazy(() => import('./CourseRoutes'));
const NotFound = lazy(() => import('../components/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div style={{backgroundColor: "black", color: "white", height: "100dvh", width: "100dvw"}}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/*" element={<CourseRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
