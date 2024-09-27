import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const CSS = lazy(() => import ('../../components/CoursePage/Courses/CSS/CSS'));
const Introduction = lazy(() => import ('../../components/CoursePage/Courses/CSS/Introduction'));
const Syntax = lazy(() => import('../../components/CoursePage/Courses/CSS/Syntax/Syntax'));
const Selector = lazy(() => import('../../components/CoursePage/Courses/CSS/Selector'));
const Text = lazy(() => import('../../components/CoursePage/Courses/CSS/Text'));
const Color = lazy(() => import('../../components/CoursePage/Courses/CSS/Color'));
const Background = lazy(() => import('../../components/CoursePage/Courses/CSS/Background'))
const BoxModel = lazy(() => import('../../components/CoursePage/Courses/CSS/BoxModel'))
const Display = lazy(() => import('../../components/CoursePage/Courses/CSS/Display'))
const FlexBox = lazy(() => import('../../components/CoursePage/Courses/CSS/FlexBox'))
const Grid = lazy(() => import('../../components/CoursePage/Courses/CSS/Grid'))
const Positioning = lazy(() => import('../../components/CoursePage/Courses/CSS/Positioning'))
const Animation = lazy(() => import('../../components/CoursePage/Courses/CSS/Animation/Animation'))
const Transitions = lazy(() => import('../../components/CoursePage/Courses/CSS/Animation/Transitions'));
const Keyframes = lazy(() => import('../../components/CoursePage/Courses/CSS/Animation/Keyframes'));
const Transform = lazy(() => import('../../components/CoursePage/Courses/CSS/Transform/Transform'));
const TwoDTransform = lazy(() => import('../../components/CoursePage/Courses/CSS/Transform/2dTransform'));
const ThreeDTransform = lazy(() => import('../../components/CoursePage/Courses/CSS/Transform/3dTransform'));
const Variable = lazy(() => import('../../components/CoursePage/Courses/CSS/Variable'))

const ResponsiveDesign = lazy(() => import('../../components/CoursePage/Courses/CSS/ResponsiveDesign'))

const NotFound = lazy(() => import('../../components/NotFound'));

function CSSRoutes() {
  return (
    <Suspense fallback={<div style={{backgroundColor: "black", color: "white", height: "100dvh", width: "100dvw"}}>Loading...</div>}>
      <Routes>
        <Route path='/' element={<CSS /> } >
          <Route index element={<Navigate to="introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="syntax" element={<Syntax />} />
          <Route path="selector" element={<Selector />} />
          <Route path="text" element={<Text />} />
          <Route path="color" element={<Color />} />
          <Route path="background" element={<Background />} />
          <Route path="box-model" element={<BoxModel />} />
          <Route path="display" element={<Display />} />
          <Route path="positioning" element={<Positioning />} />
          <Route path="flex-box" element={<FlexBox />} />
          <Route path="grid" element={<Grid />} />
          <Route path="animation" element={<Animation />} />
          <Route path="animation/transition" element={<Transitions />} />
          <Route path="animation/keyframes" element={<Keyframes />} />
          <Route path="transform" element={<Transform />} />
          <Route path="transform/2d-transform" element={<TwoDTransform />} />
          <Route path="transform/3d-transform" element={<ThreeDTransform />} />
          <Route path="variable" element={<Variable />} />
          <Route path="responsive-design" element={<ResponsiveDesign />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default CSSRoutes;
