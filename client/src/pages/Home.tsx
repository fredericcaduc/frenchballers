import React, { useState, useEffect } from 'react';
import { getYesterdayStats } from '../services/api';

const Home: React.FC = () => {
  const [stats, setStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getYesterdayStats();
        setStats(data);
      } catch (error) {
        console.error('Erreur lors du chargement des stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Performances de la veille</h2>
      <div className="grid gap-6">
        {stats.length === 0 ? (
          <p className="text-gray-600 text-center py-8">Aucune donnée disponible pour le moment</p>
        ) : (
          stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{stat.player?.first_name} {stat.player?.last_name}</h3>
                  <p className="text-sm text-gray-600">{stat.team?.full_name}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">{stat.pts || 0}</p>
                  <p className="text-xs text-gray-600">points</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-600">REB:</span> <span className="font-semibold">{stat.reb || 0}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-600">AST:</span> <span className="font-semibold">{stat.ast || 0}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-600">STL:</span> <span className="font-semibold">{stat.stl || 0}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-gray-600">BLK:</span> <span className="font-semibold">{stat.blk || 0}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;