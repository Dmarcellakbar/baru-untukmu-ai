import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import bg from '../../../assets/image/bgwhousmobile.webp';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

import dynamic from 'next/dynamic';

const AIGirl = dynamic(() => import('./AIGirl'));
const PageOne = dynamic(() => import('./PageOne'));
const PageTwo = dynamic(() => import('./PageTwo'));
const PageThree = dynamic(() => import('./PageThree'));
const PageFour = dynamic(() => import('./PageFour'));
const PageFive = dynamic(() => import('./PageFive'));

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0.3, scale: 0.5 },
};

const textVariant = {
  visible: { opacity: 1, transition: { duration: 2.5 } },
  hidden: { opacity: 0.4 },
};

export default function SizeMobile() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const styling = {
    backgroundImage: `url('${bg.src}')`,
    // backgroundColor: 'navy',
    backgroundSize: 'cover',
  };
  return (
    <section style={styling}>
      <Container
        textColor={'#FFF'}
        maxW={'80rem'}
        verticalAlign={'center'}
        zIndex={'0'}
      >
        <SimpleGrid
          columns={1}
          spacing={10}
          textAlign="center"
          pl={'3%'}
          pr={'3%'}
          zIndex={'0'}
        >
          <PageOne />
          <PageTwo />
          <PageThree />
          <PageFour />
          <PageFive />
        </SimpleGrid>
      </Container>
    </section>
  );
}
