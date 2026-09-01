import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🏀</span>
            <h1 className="text-2xl font-bold text-gray-900">NBA France Stats</h1>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Accueil
            </Link>
            <Link to="/rankings" className="text-gray-700 hover:text-gray-900 font-medium">
              Power Ranking
            </Link>
            <Link to="/wemby" className="text-gray-700 hover:text-gray-900 font-medium">
              Wemby Watch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;