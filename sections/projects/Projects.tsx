/* eslint-disable @next/next/no-img-element */
import { Project } from 'components/Project';
import { Section } from 'layouts/Section';
import { useEffect, useState } from 'react';
import { IProject, ProjectService } from 'services/ProjectsService';

export const Projects = () => {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    async function getProjects() {
      const projectsService = new ProjectService();

      const response = await projectsService.getProjects();
      console.log(response);
      const onlyVerifiedProjects = response.filter(project => project.status === 'VERIFIED');

      setProjects(onlyVerifiedProjects);
    }

    if(projects.length <= 0 && shouldLoad) {
      getProjects();
      setShouldLoad(false);
    }
  });

  return (
    <Section id="projects" className='mx-auto mt-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl">Projects</h1>

        <a href="/projects/add">Submit project proposal {'>'}</a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project: IProject, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </Section>
  );
};
