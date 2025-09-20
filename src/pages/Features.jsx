import React from "react";
import { Link, Clipboard, BarChart2, Users, Shield } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Link,
            title: "Quick URL Shortening",
            description:
                "Instantly shorten any URL for easy sharing and tracking.",
        },
        {
            icon: Clipboard,
            title: "Copy & Share",
            description: "Copy your short links to clipboard and share with anyone.",
        },
        {
            icon: BarChart2,
            title: "Analytics Dashboard",
            description:
                "Monitor clicks, top referrers, and recent activity with detailed analytics.",
        },
        {
            icon: Users,
            title: "Unique Visitors",
            description:
                "Track your audience and understand your reach with IP-based visitor stats.",
        },
        {
            icon: Shield,
            title: "Secure & Reliable",
            description:
                "All links are secured, and our service ensures reliable uptime.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Features of Shortly
                </h1>
                <p className="text-gray-600 text-lg">
                    Powerful tools to shorten, share, and track your URLs efficiently.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transform transition"
                    >
                        <div className="p-4 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                            <feature.icon size={36} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg mb-6">
                    Ready to start shortening your URLs?
                </p>
                <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                    Get Started
                </button>

            </div>
        </div>
    );
};

export default Features;
