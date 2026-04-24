import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';
import { useProgress } from './hooks/useProgress';
import './App.css';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const { progress, markCourseComplete, saveQuizResult, setSelectedCategories, resetProgress } = useProgress();

  const handleStartCourse = (catId) => {
    setActiveCategoryId(catId);
    setView('course');
  };

  const handleStartQuiz = (catId) => {
    setActiveCategoryId(catId);
    setView('quiz');
  };

  const handleCourseComplete = () => {
    markCourseComplete(activeCategoryId);
    setView('dashboard');
  };

  const handleQuizFinish = (score, total) => {
    const catKey = Array.isArray(activeCategoryId) ? 'mixed' : (activeCategoryId === 'all' ? 'all' : activeCategoryId);
    saveQuizResult(catKey, score, total);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <button className="logo-btn" onClick={() => setView('dashboard')}>
            <span className="logo-icon">📋</span>
            <span className="logo-text">CSC Reviewer</span>
          </button>
          <nav className="header-nav">
            <button
              className={`nav-btn ${view === 'dashboard' ? 'active' : ''}`}
              onClick={() => setView('dashboard')}
            >
              Dashboard
            </button>
            <button
              className="nav-btn reset-btn"
              onClick={() => {
                if (confirm('Reset all progress? This cannot be undone.')) resetProgress();
              }}
            >
              Reset Progress
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {view === 'dashboard' && (
          <Dashboard
            progress={progress}
            onStartCourse={handleStartCourse}
            onStartQuiz={handleStartQuiz}
            onSelectCategories={setSelectedCategories}
          />
        )}
        {view === 'course' && (
          <CoursePage
            categoryId={activeCategoryId}
            onComplete={handleCourseComplete}
            onBack={() => setView('dashboard')}
          />
        )}
        {view === 'quiz' && (
          <QuizPage
            categoryId={activeCategoryId}
            onFinish={handleQuizFinish}
            onBack={() => setView('dashboard')}
          />
        )}
      </main>
    </div>
  );
}
