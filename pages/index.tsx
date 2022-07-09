import type { NextPage } from 'next'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold mb-3">under construction, please come back later
          <FontAwesomeIcon icon={faWrench} className="ml-2"/>
        </p>
        <div className="items-center space-x-5 pt-3">
          <a href="https://linkedin.com/in/chandlerklein" target="_blank" rel="noreferrer">
            <button
              className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 bg-sky-500 hover:bg-sky-700 text-white text-sm h-10 w-36 rounded-full">
              LinkedIn
            </button>
          </a>
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