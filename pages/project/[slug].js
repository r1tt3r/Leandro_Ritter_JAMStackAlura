import db from '../../db.json';
import ProjectInternalPageScreen from '../../src/components/screens/ProjectInternalPageScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(ProjectInternalPageScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projeto',
    },
  },
});

export async function getStaticProps({ params }) {
  const { projects } = db;

  const projectData = projects.reduce((valorAcumulado, project) =>
    project.slug === params.slug ? { ...project } : valorAcumulado
  );

  return {
    props: projectData,
  };
}

export async function getStaticPaths() {
  const { projects } = db;

  const slugs = projects.reduce((valorAcumulado, project) => {
    const model = [{ params: { slug: project.slug } }];
    return [...valorAcumulado, ...model];
  }, []);

  return {
    paths: slugs,
    fallback: false,
  };
}
