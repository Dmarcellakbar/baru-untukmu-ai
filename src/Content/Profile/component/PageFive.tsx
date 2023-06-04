import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Image from 'next/legacy/image';
import feature_5 from '../../../assets/image/feature_5.webp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0.1, scale: 0.3 },
};

const textVariant = {
  visible: { opacity: 1, transition: { duration: 2.5 } },
  hidden: { opacity: -7 },
};
export default function Five() {
  const lazyRoot = React.useRef(null);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <Container
      maxW={'100%'}
      pt={'8rem'}
      pb={'8rem'}
      verticalAlign={'center'}
      zIndex={'0'}
    >
      <VStack spacing={2} textAlign="center" mb={'4rem'}>
        <div className="justify-image">
          <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <Image
              lazyRoot={lazyRoot}
              src={feature_5}
              width="300"
              height="300"
              alt={''}
              loading="lazy"
              quality={50}
            />
          </motion.div>
        </div>
        <motion.div
          className="box"
          ref={ref}
          variants={textVariant}
          initial="hidden"
          animate={control}
        >
          <Heading
            color={'#000'}
            fontSize={{ base: '18px', md: '18px', lg: '24px' }}
            px={{ base: '1rem', md: '4rem', lg: '30rem' }}
            mb={{ base: '1rem', md: '1rem', lg: '2rem' }}
            fontWeight={'400'}
            lineHeight={'150%'}
            fontFamily={'Comfortaa'}
          >
            Daftar Keinginan Pribadi
          </Heading>

          <Text
            textAlign={'center'}
            fontFamily={'Comfortaa'}
            fontWeight={'400'}
            fontSize="18px"
            color={'#5f6486'}
            px={{ base: '1rem', md: '4rem', lg: '30rem' }}
            mb={{ base: '24px', md: '24px', lg: '32px' }}
            lineHeight={'150%'}
            max-width={{ base: 'unset', md: 'unset', lg: '360px' }}
          >
            Tambahkan hadiah ke wishlist pribadi Anda sehingga teman Anda tidak
            perlu bingung menebak apa yang akan diberikan kepada Anda. Ini
            sama-sama menguntungkan!
          </Text>
        </motion.div>
      </VStack>
    </Container>
  );
}
