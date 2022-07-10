import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-3xl font-semibold">Hi, I&apos;m Chandler!</div>
      <div className="text-sm text-gray-500">Software Engineer at FedEx</div>

      <div className="p-5"/>

      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div>
          <a href="/resume-chandler-klein.pdf" target="_blank" rel="noreferrer">
            <button
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 text-black text-sm h-10 w-36 rounded-full border border-black border-2">
              Resume
            </button>
          </a>
        </div>

        <div>
          <a href="https://linkedin.com/in/chandlerklein" target="_blank" rel="noreferrer">
            <button
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 bg-sky-500 hover:bg-sky-700 text-white text-sm h-10 w-36 rounded-full">
              LinkedIn
            </button>
          </a>
        </div>

        <div>
          <a href="https://github.com/chandlerklein" target="_blank" rel="noreferrer">
            <button
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 bg-black text-white text-sm h-10 w-36 rounded-full">
              GitHub
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Home;