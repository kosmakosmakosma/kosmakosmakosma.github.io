
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { GithubIcon, LinkedinIcon, MailIcon } from './components/icons';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-2xl font-bold text-primary hover:text-sky-400 transition-colors">
                J. Doe | Control Engineer
              </Link>
              <div className="flex items-center space-x-4">
                <a href="./CV.pdf" download="JohnDoe_CV.pdf" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 focus:ring-offset-background transition-colors">
                  Download CV
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </main>

        <footer className="bg-slate-950/50 border-t border-slate-800 mt-12 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-muted">
            <div className="flex justify-center space-x-6 mb-4">
               <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><GithubIcon /></a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><LinkedinIcon /></a>
               <a href="mailto:email@example.com" className="hover:text-primary transition-colors"><MailIcon /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
