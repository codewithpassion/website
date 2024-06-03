import React from 'react';
import ausFlag from '../../assets/australia-flag-icon.svg';
import usFlag from '../../assets/usa-flag-icon.svg';
import { WorkHistory } from '../../components/work-history';

const WorkHistoryList: React.FC<{}> = () => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Work History</h2>
      <p className="text-white-600 mb-6">
        Below you will find a summary of my past employment experience.
        I can supply a more detailed resume upon request.
      </p>
      <div className="relative grid gap-8 pl-8 before:absolute before:left-[0.3125rem] before:top-3 before:bottom-0 before:w-0.5 before:bg-neutral-200 dark:before:bg-slate-800 md:pl-10 md:before:left-[0.8125rem]">
        <div className="relative">

          <WorkHistory
            flag={usFlag}
            startDate={new Date('2022-07-01')}
            endDate={undefined}
            title="Senior Software Engineer Consultant"
            url="https://www.missionrobotics.us/"
            companyName="Mission Robotics"
            type="Full-Time - Remote"
            location="California, USA"
            lines={[
              "Build a cloud based video management system for our underwater robots with a NodeJS REST API backend, React frontend",
              "Build docker development containers for local and CI cross compilation of our software stack for the target platforms",
              "Automate build/release pipeline with Github workflows",
              "Creating a custom linux distribution based on Yocto/OpenEmbeded",
              "Implement React frontend/C++ backend for software management"
            ]} />

          <WorkHistory
            flag={ausFlag}
            startDate={new Date('2021-10-01')}
            endDate={new Date('2022-05-01')}
            url={undefined}
            title="Senior Software Engineer "
            companyName="Milkrun"
            type="Full-Time"
            location="Sydney, Australia"
            lines={[
              "Build Next.js Fullstack administrative frontend ",
              "Transform MVP API service to a scalable architecture.",
              "Automate build/release pipeline with Github workflows",
              "Integration AWS services like S3,ECS, Lambda, DocumentDB",
            ]} />

          <WorkHistory
            flag={usFlag}
            startDate={new Date('2020-4-01')}
            endDate={new Date('2021-10-01')}
            url={"https://www.sofarocean.com/"}
            title="Senior Software Engineer "
            companyName="Sofar Ocean Technologies"
            type="Full-Time/part-time - Remote"
            location="California, USA"
            lines={[
              "Build the frontend for ship routing and weather forecasting in TypeScript, React, HTML5/CSS",
              "Implement GitHub Actions",
              "Automated build/publishing of Typescript API clients via Github workflow, publishing to NPM",
            ]} />

          <WorkHistory
            flag={usFlag}
            startDate={new Date('2019-02-01')}
            endDate={new Date('2021-10-01')}
            url={"https://www.abilitymade.com"}
            title="Lead Software Engineer "
            companyName="AbilityMade"
            type="Part-time"
            location="Sydney, Australia"
            lines={[
              "Architecture and implementation of C++/Java image capture system based on ZeroMQ, industrial cameras and Raspberry PI",
              "Project and Team management, including supervision, training, and mentoring of 2 junior software developers   based on Jira Next Gen, Bitbucket, Bitbucket Code Reviews, Confluence",
              "C++ interfacing industrial vision cameras",
            ]} />

        </div>
      </div>

    </div>
  );
};

export { WorkHistoryList };
