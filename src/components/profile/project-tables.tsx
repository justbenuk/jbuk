import { TbBrandGithub, TbGlobe } from "react-icons/tb";
export default function ProjectTables({ userProjects }: any) {
  return (
    <div className="mt-4">
      <div className="bg-gray-900 text-gray-300 rounded-t-lg">
        <h1 className="text-sm px-6 py-3 font-bold">Projects</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          <thead className="bg-gray-200">
            <tr>
              <th>Project Name</th>
              <th>Domain</th>
              <th>Type of Project</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userProjects.map((project: any, idx: number) => (
              <tr key={idx}>
                <th>{project.title}</th>
                <td>{project.domain}</td>
                <td>{project.project_type}</td>
                <td>{project.status}</td>
                <td className="flex flex-row gap-2">
                  <div className="tooltip tooltip-top" data-tip="Open Github">
                    <a href={project.github_url} target="_blank">
                      <TbBrandGithub className="text-lg" />
                    </a>
                  </div>
                  <div className="tooltip tooltip-top" data-tip="Live Project">
                    <a href={project.project_url} target="_blank">
                      <TbGlobe className="text-lg" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {userProjects.length === 0 && (
          <p className="font-bold text-center p-6">
            You have no projects currently set up
          </p>
        )}
      </div>
    </div>
  );
}
