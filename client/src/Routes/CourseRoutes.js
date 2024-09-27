import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Courses = lazy(() => import('../pages/Courses/Courses'));
const Javascript = lazy(() => import('../pages/Courses/Javascript/Javascript'));
const ReactCourse = lazy(() => import('../pages/Courses/React/React'));
const Git = lazy(() => import('../pages/Courses/Git/Git'));
const Node = lazy(() => import('../pages/Courses/Node/Node'));
const Express = lazy(() => import('../pages/Courses/Express/Express'));
const EJS = lazy(() => import('../pages/Courses/EJS/EJS'));
const PostgreSql = lazy(() => import('../pages/Courses/PostgreSql/PostgreSql'));
const NotFound = lazy(() => import('../pages/NotFound'));

const HTMLRoutes = lazy(() => import('./Courses/HTML'));
const CSSRoutes = lazy(() => import('./Courses/CSS'));

function CourseRoutes() {
  return (
    <Suspense fallback={<div style={{backgroundColor: "black", color: "white", height: "100dvh", width: "100dvw"}}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="html/*" element={<HTMLRoutes />} />
        <Route path="css/*" element={<CSSRoutes />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="ejs" element={<EJS />} />
        <Route path="express" element={<Express />} />
        <Route path="git" element={<Git />} />
        <Route path="node" element={<Node />} />
        <Route path="postgresql" element={<PostgreSql />} />
        <Route path="react" element={<ReactCourse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default CourseRoutes;
