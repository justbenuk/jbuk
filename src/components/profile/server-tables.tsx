import Link from "next/link";
export default function ServverTables({ userServers }: any) {
  console.log(userServers);
  return (
    <div className="mt-4">
      <div className="bg-gray-900 text-gray-300 rounded-t-lg">
        <h1 className="text-sm p-2 font-bold">Servers</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra border">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Server Supplier</th>
              <th>Server IP Address</th>
              <th>Assigned to Project</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userServers.map((server: any, idx: number) => (
              <tr key={idx}>
                <th>{server.title}</th>
                <td>{server.supplier_name}</td>
                <td>{server.ip_address}</td>
                {!server.projectId ? (
                  <td>Not Currently Used</td>
                ) : (
                  <td>
                    <Link href="/">Yes</Link>
                  </td>
                )}
                <td>
                  <span>
                    <a href={`${server.supplier_link}`} target="_blank">
                      SI
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
