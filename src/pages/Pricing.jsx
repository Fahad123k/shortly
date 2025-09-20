import React from "react";

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            description: "Basic features to get started",
            features: [
                "Unlimited short URLs",
                "Basic analytics",
                "Community support",
            ],
            popular: false,
        },
        {
            name: "Pro",
            price: "$9.99/mo",
            description: "For professionals and small teams",
            features: [
                "All Free features",
                "Advanced analytics",
                "Custom branded links",
                "Priority support",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Contact Us",
            description: "Custom solutions for large teams",
            features: [
                "All Pro features",
                "Dedicated account manager",
                "API access",
                "Unlimited users",
            ],
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Choose the plan that fits you
                </h1>
                <p className="text-gray-600 text-lg">
                    Flexible pricing for individuals and teams.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`bg-white rounded-2xl shadow-md p-8 flex flex-col ${plan.popular ? "border-4 border-indigo-600 scale-105" : ""
                            } transition-transform`}
                    >
                        {plan.popular && (
                            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm uppercase self-start mb-4">
                                Most Popular
                            </span>
                        )}
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {plan.name}
                        </h2>
                        <p className="text-gray-500 mb-6">{plan.description}</p>
                        <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>

                        <ul className="mb-6 space-y-2 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-600">
                                    <svg
                                        className="w-5 h-5 text-green-500 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-3 rounded-lg text-white font-medium transition ${plan.popular
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-gray-600 hover:bg-gray-700"
                                }`}
                        >
                            {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
