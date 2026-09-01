import React, { useState, useEffect } from 'react';
import { getWembyStats } from '../services/api';

const WembyWatch: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getWembyStats();
        setStats(data);
      } catch (error) {
        console.error('Erreur lors du chargement des stats de Wemby:', error);
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
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
          👀 Wemby Watch
        </h2>
        <p className="text-gray-600 mt-2">Suivi en direct de Victor Wembanyama</p>
      </div>

      {stats ? (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Victor Wembanyama</h3>
              <p className="text-gray-600 text-lg">San Antonio Spurs</p>
            </div>
            <div className="text-5xl font-bold text-blue-600">{stats.pts || 0}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 text-sm font-semibold">REBONDS</p>
              <p className="text-3xl font-bold text-gray-900">{stats.reb || 0}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 text-sm font-semibold">PASSES</p>
              <p className="text-3xl font-bold text-gray-900">{stats.ast || 0}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 text-sm font-semibold">INTERCEPTIONS</p>
              <p className="text-3xl font-bold text-gray-900">{stats.stl || 0}</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-600 text-sm font-semibold">CONTRES</p>
              <p className="text-3xl font-bold text-gray-900">{stats.blk || 0}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center py-8">Aucune donnée disponible</p>
      )}
    </div>
  );
};

export default WembyWatch;