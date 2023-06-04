import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import bg from '../../assets/image/bgwhous.webp';
import dynamic from 'next/dynamic';

const AIGirl = dynamic(() => import('./component/AIGirl'));
const PageOne = dynamic(() => import('./component/PageOne'));
const PageTwo = dynamic(() => import('./component/PageTwo'));
const PageThree = dynamic(() => import('./component/PageThree'));
const PageFour = dynamic(() => import('./component/PageFour'));
const PageFive = dynamic(() => import('./component/PageFive'));
const SizeMobile = dynamic(() => import('./component/SizeMobile'));

export default function Profile() {
  const sectionRefDesktop = useRef(null);
  const triggerRefDesktop = useRef(null);
  const sectionRefMobile = useRef(null);
  const triggerRefMobile = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRefDesktop.current,
      {
        translateX: 0,
      },
      {
        translateX: '-500vw',
        ease: 'none',
        duration: 2,
        scrollTrigger: {
          trigger: triggerRefDesktop.current,
          start: 'top top',
          end: '2000 top',
          scrub: 1,
          pin: true,
        },
      }
    );
    const mobile = gsap.fromTo(
      sectionRefMobile.current,
      {
        translateY: 0,
      },
      {
        translateY: '-460vh',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRefMobile.current,
          pin: true,
          scrub: 1,
          toggleClass: 'active',
        },
      }
    );
    return () => {
      pin.kill();
      mobile.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div
        className="desktop-layout"
        ref={triggerRefDesktop}
        style={{
          backgroundImage: `url('${bg.src}')`,
          backgroundSize: 'cover',
          width: '400%',
          height: '350%',
          position: 'relative',
        }}
      >
        <div ref={sectionRefDesktop} className="scroll-section-inner">
          <div className="scroll-section">
            <AIGirl />
          </div>
          <div className="scroll-section-center">
            <PageOne />
          </div>
          <div className="scroll-section-center">
            <PageTwo />
          </div>
          <div className="scroll-section-center">
            <PageThree />
          </div>
          <div className="scroll-section-center">
            <PageFour />
          </div>
          <div className="scroll-section-center">
            <PageFive />
          </div>
        </div>
      </div>

      <div
        className="mobile-layout"
        ref={triggerRefMobile}
        style={{
          backgroundImage: `url('${bg.src}')`,
          width: '100vw',
          height: '100vh',
          maxWidth: '100%',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <div ref={sectionRefMobile} className="scroll-section-inner-mobile">
          <SizeMobile />
          {/* <div className="scroll-section-center">
            
          </div> */}
        </div>
      </div>
    </section>
  );
}
