import React, { useRef } from 'react';
import Image from 'next/legacy/image';
import AIGirlImage from '../../../assets/image/aigirl.webp';
import { Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AIGirl() {
  const lazyRoot = React.useRef(null);
  const sectionRefAI = useRef(null);
  const sectionRefText = useRef(null);
  const sectionRefText2 = useRef(null);
  const triggerRefDesktop = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRefAI.current,
      {
        scale: 1.2,
        y: 20,
      },
      {
        scale: 0.5,
        y: 0,
        duration: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'bottom center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    const pinText = gsap.fromTo(
      sectionRefText.current,
      {
        opacity: 1.5,
        y: 0,
      },
      {
        opacity: -4,
        y: -20,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    const pinText2 = gsap.fromTo(
      sectionRefText2.current,
      {
        opacity: 1.5,
        y: 0,
      },
      {
        opacity: -4,
        y: -20,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
    return () => {
      pin.kill();
      pinText.kill();
      pinText2.kill();
    };
  }, []);
  return (
    <div className="image-front" ref={triggerRefDesktop}>
      <div className="justify-image-down" ref={sectionRefAI}>
        <Image
          lazyRoot={lazyRoot}
          src={AIGirlImage}
          width="400"
          height="600"
          alt={''}
          loading="lazy"
          quality={50}
        />
      </div>
      <div className="text-back-left" ref={sectionRefText}>
        <Heading
          fontSize={{ base: '64px', md: '64px', lg: '72px' }}
          color={'#000'}
          fontWeight={'400'}
          lineHeight={{ base: '72px', md: '72px', lg: '96px' }}
          fontFamily={'BlackerSans'}
        >
          Your Gifting
        </Heading>
      </div>

      <div className="text-back-right" ref={sectionRefText2}>
        <Heading
          fontSize={{ base: '64px', md: '64px', lg: '72px' }}
          color={'#000'}
          fontWeight={'400'}
          lineHeight={{ base: '72px', md: '72px', lg: '96px' }}
          fontFamily={'BlackerSans'}
        >
          A.I. Assistant
        </Heading>
      </div>
    </div>
  );
}
