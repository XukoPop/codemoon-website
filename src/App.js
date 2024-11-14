import React from 'react';
import { MessageCircle, Award, UserCheck, AlertCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-purple-900/50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <img src="moon.png" alt="Moon Bot" className="w-16 h-16 rounded-full" />
            <h1 className="text-4xl font-bold">Moon Bot</h1>
          </div>
          <p className="text-center mt-4 text-purple-200">Activity Tracking System for MOON Discord Server</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">How It Works</h2>
          <p className="text-gray-300 leading-relaxed">
            Moon Bot helps keep our community active and engaged by tracking member activity through messages.
            It's designed to encourage regular participation and reward active members.
          </p>
        </section>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Message Tracking */}
          <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-purple-400" size={24} />
              <h3 className="text-xl font-semibold">Message Tracking</h3>
            </div>
            <p className="text-gray-300">
              • Tracks your daily and total messages<br />
              • Daily counter resets every 24 hours<br />
              • View your stats with /m command
            </p>
          </div>

          {/* Activity Requirements */}
          <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="text-purple-400" size={24} />
              <h3 className="text-xl font-semibold">Activity System</h3>
            </div>
            <p className="text-gray-300">
              • Need 30 messages per day to stay active<br />
              • Track progress with /m command<br />
              • System monitors 3-day activity periods
            </p>
          </div>

          {/* Rewards */}
          <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-purple-400" size={24} />
              <h3 className="text-xl font-semibold">Milestone Rewards</h3>
            </div>
            <p className="text-gray-300">
              • Special roles at 2k, 4k, 6k, 10k messages<br />
              • Track progress to next milestone<br />
              • Automatic role updates
            </p>
          </div>
        </div>

        {/* Inactivity Warnings */}
        <section className="mt-12">
          <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="text-red-400" size={24} />
              <h3 className="text-xl font-semibold">Inactivity System</h3>
            </div>
            <p className="text-gray-300 mb-4">
              If you're inactive for 24 hours, here's what happens:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>You'll receive an initial warning notification</li>
              <li>The "Inactive" role will be assigned</li>
              <li>Send 30+ messages within 3 days to remove the role</li>
              <li>Extended inactivity may result in additional actions</li>
            </ol>
          </div>
        </section>

        {/* Common Commands */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Useful Commands</h2>
          <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20">
            <div className="grid gap-4">
              <div>
                <code className="bg-purple-900/40 px-2 py-1 rounded">/m</code>
                <span className="ml-3 text-gray-300">View your message statistics</span>
              </div>
              <div>
                <code className="bg-purple-900/40 px-2 py-1 rounded">/m @user</code>
                <span className="ml-3 text-gray-300">View another user's statistics</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-900/50 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-purple-200">
          <p>Join our community at discord.gg/codemoon</p>
        </div>
      </footer>
    </div>
  );
};

export default App;