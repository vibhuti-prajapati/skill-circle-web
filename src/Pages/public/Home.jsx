import React from 'react'
import { useEffect, useState } from 'react'
import hourglass from '../../assets/hourglass.png'
import astronaut from '../../assets/astronaut.png'
import img1 from '../../assets/5810609.jpg'
import img2 from '../../assets/5741174.jpg'
import img3 from '../../assets/computer.png'
import coffeemug from '../../assets/coffeemug.png'
import Footer from '../../Footer/Footer'

const Home = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.05)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <main className='min-h-screen'>
      {/* HERO */}
      <section className='min-h-screen  relative  overflow-hidden flex items-center'>
        <div className='w-full px-8 md:px-16 lg:px-24 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            <div className='max-w-2xl'>
              <p className='text-sm tracking-wide text-neutral-50 mb-4'>
                A place for developers to build together
              </p>

              <h1 className='text-4xl md:text-5xl font-semibold text-neutral-50 leading-tight'>
                Build communities.
                <br />
                Chat, Connect and
                <br />
                Collaborate.
              </h1>

              <p className='mt-6 text-lg text-neutral-400 leading-relaxed'>
                Create public and private spaces, connect with developers,
                collaborate on projects, and turn ideas into working software —
                without the noise.
              </p>

              <div className='mt-8'>
                <button className='btn btn-primary bg-[#5764f0]'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='hidden lg:flex justify-center relative'>
              <img
                src={img3}
                alt='Hero visual'
                className='w-105 opacity-90 select-none pointer-events-none'
                style={{
                  transform: `translateY(${offset * -0.6}px)`
                }}
              />
            </div>
          </div>
        </div>
        <img
          src={hourglass}
          alt='hourglass'
          className='absolute w-32 opacity-90 animate-float pointer-events-none'
          style={{
            top: '15%',
            left: '47%',
            transform: `translateY(${offset}px)`
          }}
        />
        <img
          src={coffeemug}
          alt='astronaut'
          className='absolute w-30 opacity-80 animate-float-slow pointer-events-none'
          style={{
            top: '56%',
            right: '35%',
            transform: `translateY(${-offset}px)`
          }}
        />
        <img
          src={astronaut}
          alt='astronaut'
          className='absolute w-60 opacity-80 animate-float-slow pointer-events-none'
          style={{
            bottom: '1%',
            right: '2%',
            transform: `translateY(${-offset}px)`
          }}
        />
      </section>

      <section className='px-8 md:px-16 lg:px-24 py-24 space-y-32'>
        <div className='rounded-4xl bg-white/5 backdrop-blur-xl p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-16'>
            <img
              src={img2}
              alt='Create Spaces'
              className='w-full md:w-1/2 rounded-4xl'
            />

            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold text-neutral-50'>
                Create focused spaces
              </h2>
              <p className='mt-4 text-neutral-400 text-lg'>
                Build public communities or private rooms where conversations
                stay relevant and collaboration stays productive.
              </p>
            </div>
          </div>
        </div>

        <div className='rounded-4xl bg-white/5 backdrop-blur-xl  p-8 md:p-12'>
          <div className='flex flex-col md:flex-row-reverse items-center gap-16'>
            <img
              src={img1}
              alt='Collaborate'
              className='w-full md:w-1/2 rounded-4xl'
            />

            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold text-neutral-50'>
                Collaborate in real time
              </h2>
              <p className='mt-4 text-neutral-400 text-lg'>
                Share ideas, review code, and work together without switching
                tools or losing context.
              </p>
            </div>
          </div>
        </div>

        <div className='rounded-4xl bg-white/5 backdrop-blur-xl p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center gap-16'>
            <img
              src={img2}
              alt='Ship Projects'
              className='w-full md:w-1/2 rounded-4xl'
            />

            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold text-neutral-50'>
                Ship faster together
              </h2>
              <p className='mt-4 text-neutral-400 text-lg'>
                Turn discussions into commits and ideas into shipped features —
                with your community right beside you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
