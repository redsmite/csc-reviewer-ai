import React, { useState } from 'react';
import { COURSE_CONTENT, CATEGORIES } from '../data/questions';

export default function CoursePage({ categoryId, onComplete, onBack }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [readSections, setReadSections] = useState(new Set());
  const [finished, setFinished] = useState(false);

  const course = COURSE_CONTENT[categoryId];
  if (!course) return <div>Course not found.</div>;

  const sections = course.sections;
  const section = sections[currentSection];
  const allRead = sections.every((_, i) => readSections.has(i));

  const markRead = (idx) => {
    setReadSections(prev => new Set([...prev, idx]));
  };

  const handleNext = () => {
    markRead(currentSection);
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderContent = (text) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h4 key={i} className="content-heading">{line.slice(2, -2)}</h4>;
      }
      if (line.startsWith('• ')) {
        return <li key={i} className="content-li">{renderInline(line.slice(2))}</li>;
      }
      if (line.match(/^\d+\./)) {
        return <li key={i} className="content-li numbered">{renderInline(line)}</li>;
      }
      if (line.startsWith('| ') || line.startsWith('|---')) {
        return null; // handled in table block
      }
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="content-p">{renderInline(line)}</p>;
    });
  };

  const renderInline = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : p);
  };

  if (finished) {
    return (
      <div className="course-complete">
        <div className="complete-card">
          <div className="complete-icon">🎓</div>
          <h2>Course Complete!</h2>
          <p>You've finished the <strong>{course.title}</strong> course.</p>
          <p className="complete-sub">You're now ready to take the quiz for this category.</p>
          <div className="complete-actions">
            <button className="btn btn-primary" onClick={onComplete}>
              ✅ Mark as Done & Return
            </button>
            <button className="btn btn-secondary" onClick={onBack}>
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-page">
      <div className="course-nav-bar">
        <button className="btn-back" onClick={onBack}>← Dashboard</button>
        <div className="course-breadcrumb">
          <span className="course-cat">{CATEGORIES[categoryId]}</span>
          <span className="course-section-title">{section.title}</span>
        </div>
        <div className="course-progress-indicator">
          {sections.map((s, i) => (
            <button
              key={i}
              className={`section-dot ${i === currentSection ? 'active' : ''} ${readSections.has(i) ? 'read' : ''}`}
              onClick={() => { markRead(currentSection); setCurrentSection(i); }}
              title={s.title}
            />
          ))}
        </div>
      </div>

      <div className="course-content-wrapper">
        <div className="course-sidebar">
          <h3>Sections</h3>
          {sections.map((s, i) => (
            <button
              key={i}
              className={`sidebar-item ${i === currentSection ? 'active' : ''} ${readSections.has(i) ? 'done' : ''}`}
              onClick={() => { markRead(currentSection); setCurrentSection(i); }}
            >
              <span className="sidebar-check">{readSections.has(i) ? '✓' : `${i + 1}`}</span>
              {s.title}
            </button>
          ))}
          <div className="sidebar-progress">
            <div className="sidebar-bar">
              <div className="sidebar-fill" style={{ width: `${(readSections.size / sections.length) * 100}%` }} />
            </div>
            <span>{readSections.size}/{sections.length} read</span>
          </div>
        </div>

        <div className="course-main">
          <div className="course-header">
            <h1 className="course-title">{section.title}</h1>
            <span className="section-badge">Section {currentSection + 1} of {sections.length}</span>
          </div>

          <div className="course-body">
            {renderContent(section.content)}
          </div>

          <div className="course-footer-nav">
            <button
              className="btn btn-secondary"
              onClick={handlePrev}
              disabled={currentSection === 0}
            >
              ← Previous
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentSection < sections.length - 1 ? 'Next Section →' : '🎓 Complete Course'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
