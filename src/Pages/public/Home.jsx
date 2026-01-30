import React from 'react'

const Home = () => {
  return <main className="min-h-screen flex items-center">
      {/* Page padding */}
      <div className="w-full px-8 md:px-16 lg:px-24">
        {/* Invisible hero container */}
        <section className="max-w-2xl">
          {/* Eyebrow text */}
          <p className="text-sm tracking-wide text-neutral-50 mb-4">
            A place for developers to build together
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-50  leading-tight ">
            Build communities.  
            <br />
            Collaborate in real time.
            <br />
            Ship things together.
          </h1>

          {/* Supporting copy */}
          <p className="mt-6 text-lg text-neutral-400 leading-relaxed ">
            Create public and private spaces, connect with developers,
            collaborate on projects, and turn ideas into working software —
            without the noise.
          </p>

          {/* Actions */}
          <div className="mt-8 flex gap-4">
            <button className="btn btn-primary bg-[#5764f0]">
              Get Started
            </button>
          </div>
        </section>
      </div>
      
    </main> 
    
}

export default Home
