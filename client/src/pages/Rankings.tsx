import React, { useState, useEffect } from 'react';
import { getWeeklyRanking, getMonthlyRanking } from '../services/api';

const Rankings: React.FC = () => {
  const [period, setPeriod] = useState<'week' | 'month'>('week');
  const [rankings, setRankings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRankings = async () => {
      setLoading(true);
      try {
        const data = period === 'week' ? await getWeeklyRanking() : await getMonthlyRanking();
        setRankings(data);
      } catch (error) {
        console.error('Erreur lors du chargement du classement:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, [period]);

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setPeriod('week')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            period === 'week'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Hebdomadaire
        </button>
        <button
          onClick={() => setPeriod('month')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            period === 'month'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Mensuel
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="space-y-3">
          {rankings.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Aucune donnée disponible</p>
          ) : (
            rankings.map((player, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
                <div className="text-2xl font-bold text-blue-600 w-12 text-center">{index + 1}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{player.name}</h3>
                  <p className="text-sm text-gray-600">{player.team}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{player.score || 0}</p>
                  <p className="text-xs text-gray-600">points</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Rankings;