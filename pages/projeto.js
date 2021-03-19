import React from 'react';
// import { useRouter } from 'next/router';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
// import db from '../db.json';
import { Wrapper } from '../src/components/commons/foundation/layout/Wrapper';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';

function ProjectScreen() {
  // const router = useRouter();
  const websitePageContext = React.useContext(WebsitePageContext);

  React.useEffect(() => {
    console.log(websitePageContext.getCurrentCardData());
  }, []);

  return (
    <Wrapper
      colorWrapper="black"
      id="404"
      minHeight="400px"
      textAlign="center"
      display="flex"
      alignItems="center"
      flexDirection="column"
      fullHeight="nao">
      children teste
    </Wrapper>
  );
}

export default websitePageHOC(ProjectScreen);
