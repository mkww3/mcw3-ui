/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import { Section } from 'layouts/Section';
import { IProject, ProjectService } from 'services/ProjectsService';
import { Project } from 'components/Project';


export const Home = () => {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    async function getProjects() {
      const projectsService = new ProjectService();

      const response = await projectsService.getProjects();

      const onlyVerifiedProjects = response.filter(project => project.status === 'VERIFIED');
      onlyVerifiedProjects.length = 2;

      setProjects(onlyVerifiedProjects);
    }

    if(projects.length <= 0 && shouldLoad) {
      getProjects();
      setShouldLoad(false);
    }
  });

  
  return (
    <Section id="home" className='mx-auto mt-[150px] my-auto text-center space-y-16 max-w-[1200px]'>
      <div className="flex flex-col space-y-8">
        <img src="/logo-big.svg" alt="logo big" className='w-fit h-[64px] mx-auto' />
        <p className="text-xl max-w-[70%] mx-auto">We allow supporting crypto public goods projects without using crypto</p>

        <div className="">
          <button onClick={() => {}} className="px-8 py-4 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support</button>
        </div>
      </div>
      

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project: IProject, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </Section>
  );
};
