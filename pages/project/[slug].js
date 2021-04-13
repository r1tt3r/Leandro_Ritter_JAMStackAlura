import db from '../../db.json';
import { getContent } from '../../src/components/screens/HomeScreen';
import ProjectInternalPageScreen from '../../src/components/screens/ProjectInternalPageScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(ProjectInternalPageScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Projeto',
    },
  },
});

export async function getStaticProps({ params, preview }) {
  // const { projects } = db;
  const messages = await getContent({ preview });

  const projectData = messages.allProjects.reduce((valorAcumulado, project) =>
    project.slug === params.slug ? { ...project } : valorAcumulado
  );

  return {
    props: projectData,
  };
}

export async function getStaticPaths({ preview }) {
  // const { projects } = db;
  const messages = await getContent({ preview });

  const slugs = messages.allProjects.reduce((valorAcumulado, project) => {
    const model = [{ params: { slug: project.slug } }];
    return [...valorAcumulado, ...model];
  }, []);

  return {
    paths: slugs,
    fallback: false,
  };
}
