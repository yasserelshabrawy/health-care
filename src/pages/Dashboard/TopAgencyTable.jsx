import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import agentNameBodyTemplate from "../../components/templates/agentNameBodyTemplate";

export default function TopAgencyTable({ dataTable }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-4xl mx-auto">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center p-2 w-8 h-8 bg-blue-100 rounded-md me-2">
          <svg
            className="w-6 h-6 text-blue-400"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11,3V23H5V3A2.006,2.006,0,0,1,7,1H9A2.006,2.006,0,0,1,11,3Z"
              fill="currentColor"
            />
            <path
              d="M21,11V23H15V11a2.006,2.006,0,0,1,2-2h2A2.006,2.006,0,0,1,21,11Z"
              fill="currentColor"
            />
            <path
              d="M23,24H4a4,4,0,0,1-4-4V1A1,1,0,0,1,2,1V20a2,2,0,0,0,2,2H23a1,1,0,0,1,0,2Z"
              fill="currentColor"
            />
            <path
              d="M23,22H22V11a3,3,0,0,0-3-3H17a3,3,0,0,0-3,3V22H12V3A3,3,0,0,0,9,0H7A3,3,0,0,0,4,3V22a2,2,0,0,1-2-2V1A1,1,0,0,0,0,1V20a4,4,0,0,0,4,4H23a1,1,0,0,0,0-2ZM6,22V3A1,1,0,0,1,7,2H9a1,1,0,0,1,1,1V22Zm10,0V11a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V22Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold ">Top 10 agents panel </h2>
      </div>
      <div className="card">
        <DataTable
          scrollable
          scrollHeight="300px"
          value={dataTable}
          rows={10}
          className="text-sm border-separate border-spacing-0"
          rowClassName={() => "border-b border-gray-200"}
        >
          <Column
            field="rank"
            header="Rank"
            headerClassName="bg-blue-100 p-2"
            bodyClassName="p-2"
          />
          <Column
            field="agentName"
            header="Agent name"
            headerClassName="bg-blue-100 p-2"
            bodyClassName="p-2"
            body={agentNameBodyTemplate}
          />
          <Column
            field="callsRouted"
            header="Calls routed"
            headerClassName="bg-blue-100 p-2"
            bodyClassName="p-2"
          />
          <Column
            field="dropData"
            header="Drop data"
            headerClassName="bg-blue-100 p-2"
            bodyClassName="p-2"
          />
          <Column
            field="insuranceSuccess"
            header="Insurance success"
            headerClassName="bg-blue-100 p-2"
            bodyClassName="p-2"
          />
        </DataTable>
      </div>
    </div>
  );
}
