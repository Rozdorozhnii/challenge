import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';

export const App: React.FC = () => {
  return (
    <div className="page page__body">
      <Header />
      <Benefits />
    </div>
  );
};
