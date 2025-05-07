import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-slate-800 py-6 mt-auto shadow-inner border-t border-cyan-500/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="text-slate-300 text-center md:text-left">
          <span className="font-semibold">Solana Contract:</span> <span className="text-cyan-400 font-mono">Coming Soon</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 py-1" tabIndex={0}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.98c-.386.664-.608 1.437-.608 2.26 0 1.56.794 2.94 2.003 3.75-.737-.023-1.43-.226-2.037-.563v.057c0 2.18 1.55 4 3.61 4.42-.377.104-.775.16-1.185.16-.29 0-.568-.028-.84-.08.57 1.77 2.22 3.06 4.18 3.09A8.98 8.98 0 0 1 2 19.54c-.65 0-1.29-.038-1.92-.112A12.7 12.7 0 0 0 7.29 21.5c8.29 0 12.83-6.87 12.83-12.83 0-.196-.004-.392-.013-.586A9.22 9.22 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.698z"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded px-2 py-1" tabIndex={0}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 