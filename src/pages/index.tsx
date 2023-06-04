import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

const Profile = dynamic(() => import('../Content/Profile/Profile'));
const Hero = dynamic(() => import('../Content/Hero/Hero'));
const CRUDVAR = dynamic(() => import('../Content/newCrud/index'));

function IndexPage({ variants }: any) {
  const [myVariants, setMyVariants] = useState(variants);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon-untukmu.svg" />
        <title>Beragam Rekomendasi Hampers Lebaran dari AI | Untukmu.ai</title>
        <meta property="og:url" content="https://www.untukmu.ai/" />
      </Head>
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        as="main"
      >
        <Hero />
      </Box>

      <Profile />
      <Box
        w="100vw"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        as="main"
      >
        <CRUDVAR />
      </Box>
    </>
  );
}

const App = () => {
  return (
    <>
      <IndexPage />
    </>
  );
};

export default App;
