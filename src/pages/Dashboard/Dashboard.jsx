import React, { useEffect, useState } from 'react'
import Systemflow from './Systemflow'
import Chart from './Chart'
import TopAgencyTable from './TopAgencyTable'
import { getStats } from '../../services/statsService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

export default function Dashboard() {
    const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    Promise.all([getStats()])
      .then(([statsData]) => {
        setStats(statsData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
    if (loading) return <LoadingSpinner /> ;
  return (
        <div className="space-y-6 bg-gray-50 p-6 container">
          <div className=''>

      <Systemflow stats={stats} />
      <Chart />
      <TopAgencyTable />
          </div>
    </div>
  )
}
