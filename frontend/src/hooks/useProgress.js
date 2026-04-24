import { useState, useEffect } from 'react';

const STORAGE_KEY = 'csc_reviewer_progress';

const defaultProgress = {
  completedCourses: {},
  quizStats: {},
  selectedCategories: [],
  totalQuizzesTaken: 0,
};

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...defaultProgress, ...JSON.parse(stored) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {}
  }, [progress]);

  const markCourseComplete = (categoryId) => {
    setProgress(prev => ({
      ...prev,
      completedCourses: { ...prev.completedCourses, [categoryId]: true },
    }));
  };

  const saveQuizResult = (categoryId, score, total) => {
    setProgress(prev => {
      const existing = prev.quizStats[categoryId] || { attempts: 0, bestScore: 0, lastScore: 0 };
      const pct = Math.round((score / total) * 100);
      return {
        ...prev,
        totalQuizzesTaken: (prev.totalQuizzesTaken || 0) + 1,
        quizStats: {
          ...prev.quizStats,
          [categoryId]: {
            attempts: existing.attempts + 1,
            bestScore: Math.max(existing.bestScore, pct),
            lastScore: pct,
            lastTotal: total,
          },
        },
      };
    });
  };

  const setSelectedCategories = (cats) => {
    setProgress(prev => ({ ...prev, selectedCategories: cats }));
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    markCourseComplete,
    saveQuizResult,
    setSelectedCategories,
    resetProgress,
  };
}
