import { useState } from "react";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false); // toggle mode
    const [form, setForm] = useState({ email: "", password: "", name: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            console.log("Registering:", form);
            // Call signup API
        } else {
            console.log("Logging in:", form);
            // Call login API
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                    {isSignUp ? "Create Account" : "Sign In"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name only in signup */}
                    {isSignUp && (
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="********"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>

                {/* Toggle link */}
                <p className="text-sm text-gray-600 mt-6 text-center">
                    {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}
