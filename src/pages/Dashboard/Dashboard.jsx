import React, { useEffect, useState } from 'react'
import Systemflow from './Systemflow'
import Chart from './Chart'
import TopAgencyTable from './TopAgencyTable'
import { getStats } from '../../services/statsService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { getChartData } from '../../services/chartService';

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);
    const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([getStats(), getChartData()])
      .then(([statsData , chartData]) => {
        setStats(statsData);
        setData(chartData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
    if (loading) return <LoadingSpinner /> ;
  return (
        <div className="space-y-6 bg-gray-50 p-6 container">
          <div className=''>

      <Systemflow stats={stats} />
      <div className='grid md:grid md:grid-cols-2 items-center my-4'>
      <Chart data={data} />
      <TopAgencyTable  />
      </div>
          </div>
    </div>
  )
}
