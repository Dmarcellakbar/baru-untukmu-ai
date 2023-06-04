import React from 'react';
import Image from 'next/legacy/image';
import bg from '../../assets/image/bghero.webp';
import Phone from '../../assets/image/phone.webp';
import {
  VStack,
  Container,
  SimpleGrid,
  Heading,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react';

export default function Home() {
  const lazyRoot = React.useRef(null);
  return (
    <div className="fixed-layout">
      <section
        style={{
          backgroundImage: `url('${bg.src}')`,
          width: '100vw',
          height: '100vh',
          maxWidth: '100%',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <VStack h={'stretch'} w={'stretch'} position={'relative'}>
          <Container w={'100%'} h={'stretch'} maxW={'80rem'} display={'flex'}>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
              <Stack
                textAlign={'center'}
                spacing={4}
                align={'center'}
                verticalAlign={'middle'}
                alignContent={'center'}
                mt={{ base: '0', md: '0', lg: '5rem' }}
              >
                <div>
                  <Heading
                    textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                    w={'stretch'}
                    fontSize={{ base: '64px', md: '64px', lg: '88px' }}
                    color={'#000'}
                    fontWeight={'400'}
                    pt={'90px'}
                    lineHeight={{ base: '72px', md: '72px', lg: '96px' }}
                    fontFamily={'BlackerSans'}
                    px={{ base: '1rem', md: '1rem', lg: '2rem' }}
                  >
                    Masa Depan
                  </Heading>
                  <Heading
                    textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                    w={'stretch'}
                    fontWeight={'400'}
                    fontSize={{ base: '64px', md: '64px', lg: '88px' }}
                    color={'#000'}
                    lineHeight={{ base: '72px', md: '72px', lg: '96px' }}
                    fontFamily={'Rayleigh'}
                    px={{ base: '1rem', md: '1rem', lg: '2rem' }}
                    mb={'32px'}
                  >
                    Gifting
                  </Heading>
                  <Text
                    textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                    fontFamily={'Comfortaa'}
                    fontWeight={'400'}
                    fontSize="18px"
                    color={'#5f6486'}
                    pl={{ base: '1rem', md: '4rem', lg: '2rem' }}
                    pr={{ base: '1rem', md: '4rem', lg: '13rem' }}
                    mb={{ base: '24px', md: '24px', lg: '32px' }}
                    lineHeight={'150%'}
                    max-width={{ base: 'unset', md: 'unset', lg: '360px' }}
                  >
                    Aplikasi Untukmu menghubungkan individu dan perusahaan
                    melalui pemberian hadiah, menciptakan kembali proses dengan
                    kecerdasan buatan dan sentuhan pribadi.
                  </Text>
                </div>
              </Stack>

              <Stack
                textAlign={'center'}
                spacing={4}
                align={'center'}
                verticalAlign={'middle'}
                alignContent={'center'}
                mt={{ base: '0', md: '0', lg: '5rem' }}
              >
                <Box>
                  <Image
                    lazyRoot={lazyRoot}
                    src={Phone}
                    width="510"
                    height="620"
                    alt={''}
                    quality={50}
                    priority
                  />
                </Box>
              </Stack>
            </SimpleGrid>
          </Container>
        </VStack>
      </section>
    </div>
  );
}
