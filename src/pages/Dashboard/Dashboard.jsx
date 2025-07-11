import React, { useEffect, useState } from "react";
import Systemflow from "./Systemflow";
import Chart from "./Chart";
import TopAgencyTable from "./TopAgencyTable";
import { getStats } from "../../services/statsService";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import { getChartData } from "../../services/chartService";
import { getTopAgents } from "../../services/topAgents";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
  const [data, setData] = useState(null);
  const [dataTable, setDataTable] = useState(null);

  useEffect(() => {
    Promise.all([getStats(), getChartData(),getTopAgents()])
      .then(([statsData, chartData,tabelData]) => {
        setStats(statsData);
        setData(chartData);
        setDataTable(tabelData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <LoadingSpinner />;
  return (
    <div className="space-y-6 bg-gray-50 p-3 container">
      <div className="">
        <Systemflow stats={stats} />
        <div className="grid grid-cols-1 md:grid-cols-2 items-start my-4 gap-5">
          <Chart data={data} />
          <TopAgencyTable dataTable={dataTable} />
        </div>
      </div>
    </div>
  );
}
