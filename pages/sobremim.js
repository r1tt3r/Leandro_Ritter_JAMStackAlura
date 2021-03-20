import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import SobreMimScreen from '../src/components/screens/SobreMimScreen';

export default websitePageHOC(SobreMimScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre mim',
    },
  },
});

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/r1tt3r/repos');
  const gdata = await res.json();

  return {
    props: {
      gitHubData: gdata,
    },
  };
}
