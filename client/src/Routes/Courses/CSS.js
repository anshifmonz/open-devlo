import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const CSS = lazy(() => import ('../../pages/Courses/CSS/CSS'));
const Introduction = lazy(() => import ('../../pages/Courses/CSS/Introduction'));
const Syntax = lazy(() => import('../../pages/Courses/CSS/Syntax/Syntax'));
const Selector = lazy(() => import('../../pages/Courses/CSS/Selector'));
const Text = lazy(() => import('../../pages/Courses/CSS/Text'));
const Color = lazy(() => import('../../pages/Courses/CSS/Color'));
const Background = lazy(() => import('../../pages/Courses/CSS/Background'))
const BoxModel = lazy(() => import('../../pages/Courses/CSS/BoxModel'))
const Display = lazy(() => import('../../pages/Courses/CSS/Display'))
const FlexBox = lazy(() => import('../../pages/Courses/CSS/FlexBox'))
const Grid = lazy(() => import('../../pages/Courses/CSS/Grid'))
const Positioning = lazy(() => import('../../pages/Courses/CSS/Positioning'))
const Animation = lazy(() => import('../../pages/Courses/CSS/Animation/Animation'))
const Transitions = lazy(() => import('../../pages/Courses/CSS/Animation/Transitions'));
const Keyframes = lazy(() => import('../../pages/Courses/CSS/Animation/Keyframes'));
const Transform = lazy(() => import('../../pages/Courses/CSS/Transform/Transform'));
const TwoDTransform = lazy(() => import('../../pages/Courses/CSS/Transform/2dTransform'));
const ThreeDTransform = lazy(() => import('../../pages/Courses/CSS/Transform/3dTransform'));
const Variable = lazy(() => import('../../pages/Courses/CSS/Variable'))

const ResponsiveDesign = lazy(() => import('../../pages/Courses/CSS/ResponsiveDesign'))

const NotFound = lazy(() => import('../../pages/NotFound'));

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
