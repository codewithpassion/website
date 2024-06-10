// @ts-ignore
import { Link } from 'react-router-dom';
import ghbackground from '../../assets/GHBackground.png?w=400&format=webp';
import cppLogo from '../../assets/cpp.svg';
import dockerLogo from '../../assets/docker.svg';
import githubLogo from '../../assets/github.svg';
import linuxLogo from '../../assets/linux.svg';
import reactLogo from '../../assets/react.svg';
import typescriptLogo from '../../assets/typescript.svg';
import { Skill } from '../../components/skill';
import { WorkHistoryList } from './work-history-list';

export const Component = function ProfilePage() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center p-8">
      {/* Header Section */}
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold text-white-900">
              Hello! <br />
              I'm <span className="text-yellow-500">Dominik Fretz</span>,<br />
              a full-stack engineer
            </h1>
            <p className="mt-4 text-lg text-white-700">
              A highly skilled professional with over 15 years of experience.

              My extensive expertise spans across a wide field of technologies. Ranging from full stack development with <span className="text-sky-500">Next.js/React</span>
              to backend systems in <span className="text-sky-500">C#, C++</span> and <span className="text-sky-500">NodeJS/TS</span>.
            </p>
            {/* <button className="mt-6 px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-yellow-600 transition">
              Hire Me
            </button> */}
          </div>
          <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
            <img src={ghbackground} alt="Illustration" className="w-80 h-80 object-cover" />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white-900">Projects</h2>
        <p className="mt-4 text-lg text-white-700">
          <Skill title="Bone age prediction">
            Check out this <Link to="https://github.com/codewithpassion/bone-age" target='_blank'>little ML application</Link> to estimate the age of someone, based on an x-ray of the hand. It's currently based on a human dateset that is available, but the ultimate goal is to run it with Dolphin pec fins for a project with my wife.</Skill>
        </p>
        <p className="mt-4 text-lg text-white-700">
          <Skill title="Website">
            My personal website - the one you're onm right now.
            It's based on a react frontend with tailwind-css.
            Hosted on github pages with automated push via workflows. <Link to="https://github.com/codewithpassion/website" target='_blank'>Check out the repository</Link>.</Skill>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white-900">Skills</h2>
        <p className="mt-4 text-lg text-white-700">
          I'm a great enthusiast of automation and standardization.
          If tasks are automated, they are done faster and more reliably and other developers (including myself in 3 months) don't get the order wrong.
          I'm a big fan of the DRY principle and I always try to keep my code clean and maintainable.

        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Skill logoSrc={typescriptLogo} title="TypeScript / JavaScript" description="By default, I start all new projects with TS. Having a fully typed app helps keep it less error-prone." />

          <Skill logoSrc={dockerLogo} title="Docker / containers" description="I like my development environment clean and side effect free. Docker, podman, and other container environments
          help me to keep things clean and repeatable." />

          <Skill logoSrc={reactLogo}
            title="React / Next.js"
            description='I have been working with React since 2018 and Next.js since 2022. I have built multiple projects with these technologies and I am very comfortable with them.' />

          <Skill logoSrc={githubLogo}
            title="Github / Gitlab / Git"
            description='Github is one of my core tools. I use it for everything from version control to deployment. And Github workflows or Gitlab pipelines are a great way to automate tasks.' />

          <Skill logoSrc={cppLogo}
            title="C++ / C#"
            description='Fully object oriented languages are my bread an butter. I essentially grew up with C# and have worked in C++ over many years. You even get used to the pointers and memory management :).' />

          <Skill logoSrc={linuxLogo}
            title='Linux'
            description="Linux is my favorite operating system. I've been developing on it since the early 2000s. And while my desktop might be running Windows, with using WSL, everything is Linux. 
            Over the years I've built countles disk images, and even my own distribution using Yocto/OpenEmbedded." />
        </div>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <WorkHistoryList />
      </div>
    </div>
  );
};

