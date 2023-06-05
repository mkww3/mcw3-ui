/* eslint-disable @next/next/no-img-element */

export const Project = ({project}: any) => {
  return (
    <div className="p-8 bg-green-50 flex flex-col space-y-8 text-left rounded-xl border-2 border-green-200">
      <div className="flex justify-between">
        <img src={project.logo} alt="modulecule dao img" className="w-fit h-[40px]" />

        <div className="inline-block my-auto">
          <span className="inline-block px-2 py-1 bg-green-600 text-sm text-white rounded-md">{project.status}</span>
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
        <a href={`/projects/${project.id}`} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support</a>
      </div>
          
    </div>
  );
};
