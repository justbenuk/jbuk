export default function ProjectTables({ userProjects }: any) {
  return (
    <div className="mt-4">
      <div className="bg-gray-900 text-gray-300 rounded-t-lg">
        <h1 className="text-sm p-2 font-bold">Projects</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          {/* head */}
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
                <th>1</th>
                <td>Domain</td>
                <td>Quality Control Specialist</td>
                <td>status</td>
                <td className="flex flex-row gap-2">
                  <span>
                    <a href="" target="_blank">
                      PU
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank">
                      GithubU
                    </a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
