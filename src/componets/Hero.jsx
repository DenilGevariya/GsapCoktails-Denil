import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { gsap } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
const Hero = () => {
    const videoRef=useRef();
    const isMobile= useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const herosplit=new SplitText('.title',{type:'chars,words'})
        const paraGraphSplit=new SplitText('.subtitle',{type:'chars,lines'})

        herosplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(herosplit.chars,{
            yPercent:100,
            duration:0.5,
            ease:'expo.Out',
            stagger:0.06
        })

        gsap.from(paraGraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1,
            ease:'expo.out',
            stagger:0.06,
            delay:1
        })

        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true
            }
        })
        .to('.right-leaf',{y:200},0)
        .to('.left-leaf',{y:-200},0)  

        const startValue=isMobile?'top 50%':'center 60%';
        const endValue=isMobile?'120% top':'bottom top';

        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start:startValue,
                end:endValue,
                scrub:true,
                pin:true
            }
        })

        videoRef.current.onloadedmetadata=()=>{
            tl.to(videoRef.current,{
                currentTime:videoRef.current.duration
            })
        }
    },[])
  return (
    <>
            <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>
        <img src="/images/hero-left-leaf.png" className='left-leaf' alt="" />
        <img src="/images/hero-right-leaf.png" className='right-leaf' alt="" />

        <div className="body">
            <div className="content">
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crips. Classic.</p>
                    <p className='subtitle'>Sip the Spirit <br />of Summer</p>
                </div>

                <div className='view-cocktails'>
                    <p className='subtitle hidden lg:block'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses</p>
                    <a href="#viewcocktails">View Cocktails</a>
                </div>
            </div>
        </div>
    </section>

    <div className='video absolute inset-0'>
        <video src='/videos/output.mp4' muted 
            ref={videoRef}
           playsInline
           preload='auto' 
        />

    </div>
    </>

  )
}

export default Hero