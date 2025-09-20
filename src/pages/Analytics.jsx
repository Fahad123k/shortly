import { useContext, useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MousePointerClick, Link, Clock, UserIcon } from "lucide-react";

import { ApiContext } from "../contexts/ApiContext";

const Analytics = () => {
    const [shortId, setShortId] = useState("");



    const { stats, loading, error, fetchStats } = useContext(ApiContext);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchStats(shortId);
        setShortId("")
        if (!shortId.trim()) return;
        setCurrentId(shortId.trim());
    };

    return (

        <div className="min-h-screen bg-gray-50 p-8 mt-16">

            <h4 className="text-xl font-bold text-gray-800 mb-6">Analytics Dashboard</h4>

            {/* Search */}
            <form
                onSubmit={handleSearch}
                className="mb-8 flex flex-col sm:flex-row gap-4"
            >
                <input
                    type="text"
                    value={shortId}
                    onChange={(e) => setShortId(e.target.value)}
                    placeholder="Enter Short ID"
                    className=" w-full sm:w-[40%]  p-3 rounded-lg border  border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                    Search
                </button>
            </form>

            {loading && <div className="p-4 text-gray-700">Loading stats...</div>}
            {error && <div className="p-4 text-red-500">{error}</div>}
            {stats && (
                <>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Stats for <span className="text-indigo-600">{stats.shortId}</span>
                    </h2>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-4">
                            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                                <Link size={28} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Total Clicks</p>
                                <p className="text-xl font-semibold">{stats.clickCount}</p>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-4">
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <MousePointerClick size={28} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Last Accessed</p>
                                <p className="text-sm font-semibold">
                                    {stats.lastAccessed
                                        ? new Date(stats.lastAccessed).toLocaleString()
                                        : "Never"}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-4">
                            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                                <Clock size={28} />
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Recent Clicks</p>
                                <p className="text-xl font-semibold">{stats.recentClicks.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* Top Referrers */}
                    <div className="bg-white shadow rounded-2xl p-6 mb-8">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Referrers</h2>
                        {stats.topReferrers.length > 0 ? (
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={stats.topReferrers}>
                                    <XAxis dataKey="domain" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#6366F1" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <p className="text-gray-500">No referrers yet</p>
                        )}
                    </div>

                    {/* Recent Clicks */}

                    <div className="bg-white shadow rounded-2xl p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Clicks</h2>
                        <ul className="divide-y divide-gray-200">
                            {Object.entries(stats.recentClicks).map(([name, click]) => (
                                <li key={name} className="py-2 text-gray-600 flex justify-between">
                                    <span>{new Date(click.timestamp).toLocaleString()}</span>
                                    <span className="text-gray-400">{click.ip}</span>
                                </li>
                            ))}
                        </ul>

                    </div>


                    {/* Unique Visitors */}
                    <div className="bg-white shadow rounded-2xl p-6 flex items-center gap-4 mt-2">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                            <UserIcon size={28} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Unique Visitors</p>
                            <p className="text-xl font-semibold">{stats.uniqueVisitors}</p>
                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default Analytics;
