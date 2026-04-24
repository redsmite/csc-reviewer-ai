import React from 'react';
import { CATEGORIES, CATEGORY_DESCRIPTIONS } from '../data/questions';

const CATEGORY_ICONS = {
  '1': '🇵🇭',
  '2': '🔢',
  '3': '🧩',
  '4': '📝',
  '5': '🗂️',
};

export default function Dashboard({ progress, onStartCourse, onStartQuiz, onSelectCategories }) {
  const { completedCourses = {}, quizStats = {}, selectedCategories = [] } = progress;

  const allCategories = Object.keys(CATEGORIES);
  const hasSelectedCategories = selectedCategories.length > 0;

  const overallBest = Object.values(quizStats).length > 0
    ? Math.max(...Object.values(quizStats).map(s => s.bestScore || 0))
    : 0;
  const totalAttempts = Object.values(quizStats).reduce((a, s) => a + (s.attempts || 0), 0);
  const completedCount = Object.keys(completedCourses).length;

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="hero-badge">CSC Exam Reviewer</div>
        <h1 className="hero-title">Prepare. Practice. Pass.</h1>
        <p className="hero-subtitle">
          Your comprehensive Civil Service Examination reviewer with AI-powered explanations
        </p>
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-num">{completedCount}</span>
            <span className="stat-label">Courses Done</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">{totalAttempts}</span>
            <span className="stat-label">Quizzes Taken</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">{overallBest}%</span>
            <span className="stat-label">Best Score</span>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>Choose Your Focus Areas</h2>
        <p>Select the categories you want to study. You can always change this later.</p>
      </div>

      <div className="categories-grid">
        {allCategories.map(catId => {
          const isSelected = selectedCategories.includes(catId);
          const isCourseComplete = completedCourses[catId];
          const stats = quizStats[catId];
          const progressPct = stats ? stats.bestScore : 0;

          return (
            <div
              key={catId}
              className={`category-card ${isSelected ? 'selected' : ''} ${isCourseComplete ? 'course-done' : ''}`}
              onClick={() => {
                const next = isSelected
                  ? selectedCategories.filter(c => c !== catId)
                  : [...selectedCategories, catId];
                onSelectCategories(next);
              }}
            >
              <div className="card-header">
                <span className="card-icon">{CATEGORY_ICONS[catId]}</span>
                <div className="card-badges">
                  {isCourseComplete && <span className="badge badge-complete">✓ Course Done</span>}
                  {isSelected && <span className="badge badge-selected">Selected</span>}
                </div>
              </div>
              <h3 className="card-title">{CATEGORIES[catId]}</h3>
              <p className="card-desc">{CATEGORY_DESCRIPTIONS[catId]}</p>
              {stats && (
                <div className="card-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progressPct}%` }} />
                  </div>
                  <span className="progress-label">Best: {progressPct}% ({stats.attempts} attempt{stats.attempts !== 1 ? 's' : ''})</span>
                </div>
              )}
              <div className="card-actions" onClick={e => e.stopPropagation()}>
                <button
                  className="btn btn-course"
                  onClick={() => onStartCourse(catId)}
                >
                  {isCourseComplete ? '📖 Review Course' : '📚 Start Course'}
                </button>
                <button
                  className="btn btn-quiz"
                  onClick={() => onStartQuiz(catId)}
                >
                  ✏️ Take Quiz
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {hasSelectedCategories && (
        <div className="quick-actions">
          <h3>Practice Selected Categories</h3>
          <button
            className="btn btn-primary btn-large"
            onClick={() => onStartQuiz(selectedCategories)}
          >
            🚀 Start Mixed Quiz ({selectedCategories.length} categories)
          </button>
          <button
            className="btn btn-secondary btn-large"
            onClick={() => onStartQuiz('all')}
          >
            📋 Full Practice Exam (All Categories)
          </button>
        </div>
      )}

      {!hasSelectedCategories && (
        <div className="quick-actions">
          <button
            className="btn btn-primary btn-large"
            onClick={() => onStartQuiz('all')}
          >
            📋 Start Full Practice Exam
          </button>
        </div>
      )}
    </div>
  );
}
