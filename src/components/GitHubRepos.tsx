import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  homepage?: string;
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/riteshbhusare/repos?sort=updated&per_page=100')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repositories');
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-400">Loading repositories...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-400">{error}</div>;
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center">
          GitHub Repositories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group hover:scale-[1.03]"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                {repo.name}
              </h3>
              <p className="text-gray-300 mb-4 min-h-[48px]">{repo.description || 'No description provided.'}</p>
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-200 font-medium">{repo.stargazers_count}</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-300 group/btn"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View on GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos; 