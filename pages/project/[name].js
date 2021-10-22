import classNames from 'classnames';
import Head from 'next/head';
import { useContext, useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import DefaultLayout from '../../components/layouts/DefaultLayout';
import PreviewPageSelect from '../../components/PreviewPageSelect';
import Spinner from '../../components/Spinner';
import { PREVIEW_PAGE_HEADER_HEIGHT } from '../../constants';
import { UIContext } from '../../contexts/UIContext';
import { iFrameReady } from '../../utils/iframeReady';

// This function gets called at build time
export async function getStaticPaths() {

  const projects = await import('../../content/projects.json');
  const projectsWithPages = projects.items.filter(p => p.pages);

  const paths = projectsWithPages.map(p => ({
    params: { name: p.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const projects = await import('../../content/projects.json');
  const project = projects.items.find(p => p.name === params.name);

  return { props: { project } };
}

const PreviewPage = ({ project }) => {
  const [currentPreviewPage, setPreviewPage] = useState("index");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef();
  const [UI] = useContext(UIContext);

  const homeIframeSrc = `/project-previews/${project.name}/index.html`;
  const currentIframeSrc = `/project-previews/${project.name}/${currentPreviewPage}.html`;

  useEffect(() => {
    setIframeLoaded(false);

    iframeRef.current.contentWindow.location.replace(currentIframeSrc);

    iFrameReady(document.getElementById('iframe'), () => {
      setIframeLoaded(true);
    });
  }, [currentPreviewPage]);

  const iframeClasses = classNames({
    "absolute left-0 top-0 w-full h-full transition-opacity": true,
    "opacity-0": !iframeLoaded,
    "opacity-1": iframeLoaded,
  });

  const title = `Bogdan Dolin | ${project.title} Page Preview`;

  const header = (
    <Header hasBackButton={true} hideMenu={true} hideLogo={true}>
      <div>
        <PreviewPageSelect pages={project.pages} onSelected={item => setPreviewPage(item.slug)} />
      </div>
    </Header>
  );

  const containerClass = 'flex flex-col items-center justify-center h-screen bg-white overflow-hidden';

  return (
    <DefaultLayout pageTitle={title} header={header} footer={<></>} defaultClass={containerClass} containerStyle={{ paddingTop: UI.headerHeight }}>
      <div className="h-screen relative justify-center items-center w-full overflow-hidden">
        <iframe src={homeIframeSrc} ref={iframeRef} id="iframe" className={iframeClasses}></iframe>
        {!iframeLoaded && (
          <Spinner />
        )}
      </div>
    </DefaultLayout>
  );
}

export default PreviewPage;