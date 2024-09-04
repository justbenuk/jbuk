import { TbServer } from "react-icons/tb";
import Link from "next/link";
export default function AllServerTables() {
  const servers = [] as [];
  return (
    <div className="mt-4">
      <div className="bg-gray-900 text-gray-300 rounded-t-lg">
        <h1 className="text-sm p-2 font-bold">Servers</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra border">
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
            {servers.map((server: any, idx: number) => (
              <tr key={idx}>
                <th>{server.title}</th>
                <td>{server.supplier_name}</td>
                <td>{server.ip_address}</td>
                {!server.projectId ? (
                  <td>Not Currently Used</td>
                ) : (
                  <td>
                    <Link href={`/profile/projects/${server.projectId}`}>
                      Yes
                    </Link>
                  </td>
                )}
                <td>
                  <div className="tooltip tooltip-top" data-tip="Open Suppler">
                    <a href={server.supplier_link} target="_blank">
                      <TbServer className="text-lg" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {servers.length === 0 && (
          <p className="font-bold text-center p-6">
            You currently have no servers set up
          </p>
        )}
      </div>
    </div>
  );
}
