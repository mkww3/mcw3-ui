/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Section } from 'layouts/Section';
import { IProject, ProjectService } from 'services/ProjectsService';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { ABI } from 'abi/contractABI';

export const Admin = () => {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState<IProject>();
  const [projectsService, setProjectsService] = useState<ProjectService>();
  
  const { address, isConnecting } = useAccount();

  // 0 - verified
  // 1 - non verified

  const { config } = usePrepareContractWrite({
    address: '0xe5431dfE8623622111424E0d42cAD8552E67F2D0',
    abi: ABI,
    functionName: 'updateStatus',
    args: [
      projectId, 0
    ],
    async onSuccess(data) {
      console.log('Success', data);

      const res = await projectsService?.updateProject(project?.id!, {
        ...project,
        status: 'VERIFIED'
      });

      console.log(res);

      await getProjects();
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  async function getProjects() {
    const projectsService = new ProjectService();

    setProjectsService(projectsService);

    const response = await projectsService.getProjects();
    console.log(response);

    const onlyNotVerifiedProjects = response.filter(project => project.status !== 'VERIFIED');

    setProjects(onlyNotVerifiedProjects);
  }

  useEffect(() => {
    if(projects.length <= 0 && shouldLoad) {
      getProjects();
      setShouldLoad(false);
    }
  });

  return (
    <Section id="admin" className='mx-auto mt-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl">Approve Projects</h1>

        <div className="">
          <ConnectButton />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project: IProject, index) => (
          <div key={index} className="p-8 bg-green-50 flex flex-col space-y-8 text-left">
            <div className="flex justify-between">
              <img src={project.logo} alt="project img" className="w-fit h-[40px]" />

              <div className="inline-block my-auto">
                <span className="inline-block px-2 py-1 bg-gray-600 text-sm text-white rounded-md">{project.status.replace('_', ' ')}</span>
              </div>
              
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl text-gray-900 font-bold">{project.name}</h2>
              <p className="text-lg text-gray-700">{project.description}</p>
            </div>

            <div className="flex space-x-4">
              {project.websiteURL && (<a href={project.websiteURL}><img src="/website.svg" alt="website logo" /></a>)}
              {project.twitterURL && (<a href={project.twitterURL}><img src="/twitter.svg" alt="twitter logo" /></a>)}
              {project.mediumURL && (<a href={project.mediumURL}><img src="/medium.svg" alt="medium logo" /></a>)}
            </div>
          
            <div className="inline-block">
              <button onClick={async () => {
                setProjectId(project.id!);
                setProject(project);
                console.log('aprove', {id: project.id, projectId, address});
                
                if(write) {
                  write()!;
                }
              }} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800">Approve</button>
            </div>
          
          </div>
        ))}
      </div>
    </Section>
  );
};
