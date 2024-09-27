import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const HTML = lazy(() => import('../../pages/Courses/HTML/HTML'));
const Introduction = lazy(() => import('../../pages/Courses/HTML/Introduction'));
const TagsAndElem = lazy(() => import('../../pages/Courses/HTML/TagsAndElem'));
const Attributes = lazy(() => import('../../pages/Courses/HTML/Attributes'));
const Text = lazy(() => import('../../pages/Courses/HTML/Text'));
const Links = lazy(() => import('../../pages/Courses/HTML/Link'));
const Images = lazy(() => import('../../pages/Courses/HTML/Img'));
const Lists = lazy(() => import('../../pages/Courses/HTML/List'));
const Table = lazy(() => import('../../pages/Courses/HTML/Table'));
const Form = lazy(() => import('../../pages/Courses/HTML/Form'));
const Semantic = lazy(() => import('../../pages/Courses/HTML/Semantic'));
const Multimedia = lazy(() => import('../../pages/Courses/HTML/Multimedia'));
// const AdvTopics = lazy(() => import('../../pages/Courses/HTML/AdvTopics'));
const PraAndProj = lazy(() => import('../../pages/Courses/HTML/PraAndProj'));
const Meta = lazy(() => import('../../pages/Courses/HTML/AdvTopics/Meta'));
const Link = lazy(() => import('../../pages/Courses/HTML/AdvTopics/Link'));
const Script = lazy(() => import('../../pages/Courses/HTML/AdvTopics/Script'));
const SEO = lazy(() => import('../../pages/Courses/HTML/AdvTopics/SEO'));


const NotFound = lazy(() => import('../../pages/NotFound'));

const HTMLRoutes = () => {
  return (
    <Suspense fallback={<div style={{backgroundColor: "black", color: "white", height: "100dvh", width: "100dvw"}}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HTML />} >
          <Route index element={<Navigate to="introduction" replace />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="tags-and-elements" element={<TagsAndElem />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="text" element={<Text />} />
          <Route path="links" element={<Links />} />
          <Route path="images" element={<Images />} />
          <Route path="lists" element={<Lists />} />
          <Route path="table" element={<Table />} />
          <Route path="form" element={<Form />} />
          <Route path="semantic" element={<Semantic />} />
          <Route path="multi-media" element={<Multimedia />} />
          <Route path="advance-topics/">
            <Route path="meta-tag" element={<Meta />} />
            <Route path="link-tag" element={<Link />} />
            <Route path="script-tag" element={<Script />} />
            <Route path="seo-best-practices" element={<SEO />} />
          </Route>
          <Route path="practice-and-projects" element={<PraAndProj />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default HTMLRoutes;
