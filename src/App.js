import React, { useState } from 'react';
import { 
    Users, 
    Calendar, 
    Gift, 
    Bot, 
    Moon, 
    ChevronRight, 
    MessageCircle, 
    Award, 
    Trophy, 
    AlertCircle,
    Clock,
    Shield,
    Star
} from 'lucide-react';

const App = () => {
    const [showActivity, setShowActivity] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a103f] to-[#0a0118]">
            {/* Stars Background */}
            <div className="fixed inset-0">
                {/* Small Stars */}
                {[...Array(100)].map((_, i) => (
                    <div
                        key={`small-${i}`}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}
                
                {/* Medium Stars */}
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`medium-${i}`}
                        className="star medium"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}
                
                {/* Large Stars */}
                {[...Array(25)].map((_, i) => (
                    <div
                        key={`large-${i}`}
                        className="star large"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}

                {/* Shooting Stars */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={`shooting-${i}`}
                        className="shooting-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 7}s`
                        }}
                    />
                ))}

                {/* Space Dust */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={`dust-${i}`}
                        className="space-dust"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.1
                        }}
                    />
                ))}
            </div>

            {/* Moon */}
            <div className="fixed top-4 right-4 sm:top-10 sm:right-10">
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 shadow-lg moon">
                    {/* Moon Craters */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gray-400 opacity-50"></div>
                    <div className="absolute top-10 sm:top-16 left-8 sm:left-12 w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-gray-400 opacity-50"></div>
                    <div className="absolute top-6 sm:top-10 right-5 sm:right-8 w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-gray-400 opacity-50"></div>
                    {/* Moon Glow */}
                    <div className="absolute -inset-4 rounded-full bg-white opacity-10 blur-xl"></div>
                </div>
            </div>

            {/* Aurora Effect */}
            <div className="fixed inset-0 opacity-30">
                <div className="aurora aurora-1"></div>
                <div className="aurora aurora-2"></div>
                <div className="aurora aurora-3"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header */}
                <header className="pt-8 sm:pt-16 pb-4 sm:pb-8 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="flex justify-center mb-4 sm:mb-6">
                            <Moon className="text-purple-400 w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                        <h1 className="text-4xl sm:text-7xl font-bold text-white moon-text-glow tracking-wider mb-4 sm:mb-6">
                            MOON
                        </h1>
                        <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
                            Welcome to MOON - A Celestial Discord Community
                            <span className="block text-purple-400 text-xs sm:text-sm mt-2">Early Access Guild Tag</span>
                        </p>
                    </div>
                </header>

            {/* Features Grid */}
            <section className="py-6 sm:py-12 px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Community Features */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <Users className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Vibrant Community</h3>
                            <p className="text-sm sm:text-base text-purple-200">Join our active community of gamers, creators, and enthusiasts.</p>
                        </div>

                        {/* Game Nights */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <Calendar className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Game Nights</h3>
                            <p className="text-sm sm:text-base text-purple-200">Regular gaming sessions with community members.</p>
                        </div>

                        {/* Movie Nights */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <Trophy className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Movie Nights</h3>
                            <p className="text-sm sm:text-base text-purple-200">Watch and discuss movies together in our theatre channels.</p>
                        </div>

                        {/* Giveaways */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <Gift className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Regular Giveaways</h3>
                            <p className="text-sm sm:text-base text-purple-200">Exciting prizes and giveaways for our community members.</p>
                        </div>

                        {/* Custom Bot */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <Bot className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">MoonBot</h3>
                            <p className="text-sm sm:text-base text-purple-200">Our custom Discord bot with unique features and commands.</p>
                        </div>

                        {/* Activity System */}
                        <div className="feature-card p-4 sm:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:bg-purple-900/20 transition-all duration-300">
                            <MessageCircle className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Activity System</h3>
                            <p className="text-sm sm:text-base text-purple-200">Unique activity tracking with rewards and milestones.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-6 sm:py-12 px-4">
                    <div className="max-w-4xl mx-auto text-center flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="https://discord.com/invite/codemoon" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 
                                    text-white rounded-full border border-purple-500 transition-all 
                                    duration-300 text-sm sm:text-base font-medium inline-flex items-center justify-center">
                            Join MOON
                            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </a>

                        <button
                            onClick={() => setShowActivity(!showActivity)}
                            className="w-full sm:w-auto px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 
                                     text-purple-200 rounded-full border border-purple-500/20 transition-all 
                                     duration-300 text-sm sm:text-base inline-flex items-center justify-center">
                            Learn About Activity System
                        </button>
                    </div>
                </section>

                {/* Enhanced Activity System Modal */}
                {showActivity && (
                    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-4 sm:py-8 overflow-y-auto">
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
                             onClick={() => setShowActivity(false)}></div>
                        
                        <div className="relative bg-[#1a103f]/90 rounded-xl sm:rounded-2xl w-full max-w-4xl my-4
                                      backdrop-blur-md border border-purple-500/20 max-h-[90vh] overflow-y-auto">
                            
                            {/* Modal Header - Sticky */}
                            <div className="sticky top-0 bg-[#1a103f]/95 backdrop-blur-md z-20 p-4 sm:p-6 border-b border-purple-500/20">
                                <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center">
                                    <Award className="text-purple-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 flex-shrink-0" />
                                    Activity System
                                </h2>
                                <p className="mt-2 text-sm sm:text-base text-purple-200">
                                    Our comprehensive system to track and reward active community members
                                </p>
                            </div>

                            {/* Tab Navigation - Scrollable on mobile */}
                            <div className="sticky top-[73px] sm:top-[89px] bg-[#1a103f]/95 backdrop-blur-md z-10">
                                <div className="flex overflow-x-auto hide-scrollbar border-b border-purple-500/20">
                                    {['overview', 'milestones', 'inactivity', 'commands'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-shrink-0 px-4 sm:px-6 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                                                ${activeTab === tab
                                                    ? 'text-white border-b-2 border-purple-400'
                                                    : 'text-purple-200 hover:text-white'
                                                }`}
                                        >
                                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content Container */}
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Overview Tab - Mobile Optimized */}
                                {activeTab === 'overview' && (
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                                <MessageCircle className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                                                Message Tracking
                                            </h3>
                                            <ul className="space-y-2 sm:space-y-3 text-purple-200">
                                                <li className="flex items-center">
                                                    <Star className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                                                    <span className="text-sm sm:text-base">Tracks your daily and total messages</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                                                    <span className="text-sm sm:text-base">Daily counter resets every 24 hours</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <Shield className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" />
                                                    <span className="text-sm sm:text-base">Need to maintain regular activity to stay active.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                                <Award className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                                                System Features
                                            </h3>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-1 sm:space-y-2">
                                                    <p className="text-white font-medium text-sm sm:text-base">Daily Activity</p>
                                                    <p className="text-purple-200 text-sm">Stay engaged with the community</p>
                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <p className="text-white font-medium text-sm sm:text-base">Tracking Period</p>
                                                    <p className="text-purple-200 text-sm">3-day activity monitoring</p>
                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <p className="text-white font-medium text-sm sm:text-base">Progress Tracking</p>
                                                    <p className="text-purple-200 text-sm">Real-time message count updates</p>
                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <p className="text-white font-medium text-sm sm:text-base">Automatic Updates</p>
                                                    <p className="text-purple-200 text-sm">Role assignments and removals</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            {/* Milestones Tab */}
                            {activeTab === 'milestones' && (
                                    <div className="space-y-4 sm:space-y-6">
                                        <style>
                                            {`
                                                .shadow-glow-blue {
                                                    text-shadow: 0 0 10px #60A5FA, 0 0 20px #60A5FA, 0 0 30px #60A5FA;
                                                }
                                                
                                                .shadow-glow-red {
                                                    text-shadow: 0 0 10px #EF4444, 0 0 20px #EF4444, 0 0 30px #EF4444;
                                                }
                                                
                                                .shadow-glow-gray {
                                                    text-shadow: 0 0 10px #4B5563, 0 0 20px #4B5563, 0 0 30px #4B5563;
                                                }
                                                
                                                .shadow-glow-white {
                                                    text-shadow: 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF;
                                                }

                                                .perm-tooltip {
                                                    position: absolute;
                                                    top: 100%;
                                                    left: 0;
                                                    background: rgba(17, 24, 39, 0.95);
                                                    border: 1px solid rgba(139, 92, 246, 0.2);
                                                    border-radius: 0.5rem;
                                                    padding: 0.75rem;
                                                    margin-top: 0.5rem;
                                                    opacity: 0;
                                                    visibility: hidden;
                                                    transition: all 0.2s ease;
                                                    z-index: 50;
                                                    width: max-content;
                                                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                                                }

                                                @media (max-width: 640px) {
                                                    .perm-tooltip {
                                                        position: fixed;
                                                        bottom: 1rem;
                                                        left: 1rem;
                                                        right: 1rem;
                                                        top: auto;
                                                        width: auto;
                                                        text-align: center;
                                                        margin: 0;
                                                    }
                                                }

                                                .perm-container:hover .perm-tooltip {
                                                    opacity: 1;
                                                    visibility: visible;
                                                }

                                                .perm-container:active .perm-tooltip {
                                                    opacity: 1;
                                                    visibility: visible;
                                                }
                                            `}
                                        </style>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-500/30">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="relative perm-container">
                                                        <h3 className="text-lg sm:text-xl font-semibold text-blue-400 animate-pulse shadow-glow-blue">Code: Blue Moon</h3>
                                                        <div className="perm-tooltip">
                                                            <p className="text-white font-medium mb-1">Perms:</p>
                                                            <p className="text-purple-200">• Picture Permissions</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-purple-400 text-sm sm:text-base">2,000 messages</span>
                                                </div>
                                                <div className="w-full bg-purple-900/30 rounded-full h-2 mb-4">
                                                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '20%'}}></div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-500/30">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="relative perm-container">
                                                        <h3 className="text-lg sm:text-xl font-semibold text-red-500 animate-pulse shadow-glow-red">Code: Blood Moon</h3>
                                                        <div className="perm-tooltip">
                                                            <p className="text-white font-medium mb-1">Perms:</p>
                                                            <p className="text-purple-200">• Username Change Permissions</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-purple-400 text-sm sm:text-base">4,000 messages</span>
                                                </div>
                                                <div className="w-full bg-purple-900/30 rounded-full h-2 mb-4">
                                                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '40%'}}></div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-500/30">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="relative perm-container">
                                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-500 animate-pulse shadow-glow-gray">Code: Crescent Moon</h3>
                                                        <div className="perm-tooltip">
                                                            <p className="text-white font-medium mb-1">Perms:</p>
                                                            <p className="text-purple-200">• Any Role Color</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-purple-400 text-sm sm:text-base">6,000 messages</span>
                                                </div>
                                                <div className="w-full bg-purple-900/30 rounded-full h-2 mb-4">
                                                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '60%'}}></div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg border border-purple-500/30">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="relative perm-container">
                                                        <h3 className="text-lg sm:text-xl font-semibold text-white animate-pulse shadow-glow-white">Code: Full Moon</h3>
                                                        <div className="perm-tooltip">
                                                            <p className="text-white font-medium mb-1">Perms:</p>
                                                            <p className="text-purple-200 italic">• Coming Soon...</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-purple-400 text-sm sm:text-base">10,000 messages</span>
                                                </div>
                                                <div className="w-full bg-purple-900/30 rounded-full h-2 mb-4">
                                                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '100%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            {/* Inactivity Tab */}
                            {activeTab === 'inactivity' && (
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-500/20">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                                <AlertCircle className="w-5 h-5 mr-2 text-red-400 flex-shrink-0" />
                                                Inactivity Warning System
                                            </h3>
                                            <div className="space-y-4">
                                                {[
                                                    {
                                                        step: 1,
                                                        title: "Initial Warning",
                                                        desc: "You'll receive a notification after 24 hours of inactivity"
                                                    },
                                                    {
                                                        step: 2,
                                                        title: "Inactive Role Assignment",
                                                        desc: "The \"Inactive\" role will be automatically assigned"
                                                    },
                                                    {
                                                        step: 3,
                                                        title: "Reactivation Period",
                                                        desc: "Meet activity requirements for 3 days to remove inactive role"
                                                    },
                                                    {
                                                        step: 4,
                                                        title: "Extended Inactivity",
                                                        desc: "Additional actions may be taken for prolonged inactivity"
                                                    }
                                                ].map(({ step, title, desc }) => (
                                                    <div key={step} className="flex items-start space-x-3">
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-900/30 rounded-full flex items-center 
                                                                    justify-center flex-shrink-0">
                                                            <span className="text-red-400 font-semibold text-sm sm:text-base">{step}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-white font-medium text-sm sm:text-base">{title}</p>
                                                            <p className="text-purple-200 text-sm mt-1">{desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Commands Tab */}
                                {activeTab === 'commands' && (
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="bg-purple-900/20 p-4 sm:p-6 rounded-lg">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center">
                                                <Bot className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0" />
                                                Available Commands
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-purple-900/40 p-3 sm:p-4 rounded-lg">
                                                    <code className="text-purple-200 text-sm font-mono">/m</code>
                                                    <p className="mt-2 text-purple-200 text-sm sm:text-base">
                                                        View your personal message statistics
                                                    </p>
                                                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-purple-300">
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>See your daily message count</span>
                                                        </li>
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>Check your total messages</span>
                                                        </li>
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>View progress towards next milestone</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-purple-900/40 p-3 sm:p-4 rounded-lg">
                                                    <code className="text-purple-200 text-sm font-mono">/m @user</code>
                                                    <p className="mt-2 text-purple-200 text-sm sm:text-base">
                                                        View another user's message statistics
                                                    </p>
                                                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-purple-300">
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>Check their activity status</span>
                                                        </li>
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>See their milestone progress</span>
                                                        </li>
                                                        <li className="flex items-start space-x-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>View their total message count</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Modal Close Button */}
                            <div className="sticky top-0 right-0 flex justify-end p-2 z-30">
                                <button
                                    onClick={() => setShowActivity(false)}
                                    className="w-8 h-8 flex items-center justify-center 
                                            bg-purple-900/80 hover:bg-purple-800 text-purple-200 
                                            hover:text-white rounded-lg transition-all duration-200
                                            border border-purple-500/40 hover:border-purple-500
                                            shadow-lg backdrop-blur-sm"
                                    aria-label="Close modal"
                                >
                                    <span className="text-2xl font-semibold leading-none">&times;</span>
                                </button>
                            </div>
                                                        
                            {/* Add some custom styles for mobile optimization */}
                            <style jsx>{`
                                .hide-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                                .hide-scrollbar {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}</style>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;