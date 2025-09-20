
const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t-gray-600">
            {/* Blush Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100 opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-10 md:flex md:items-start md:justify-between">
                {/* Brand */}
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Shortly Logo"
                            className="h-8 w-auto"
                        />
                        <span className="text-lg font-bold text-indigo-700">Shortly</span>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm leading-6">
                        Create, share, and manage shortened links with ease.
                        A simple and powerful tool for modern web users.
                    </p>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 gap-8 md:w-2/3 md:grid-cols-3">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Product</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-indigo-700">Features</a></li>
                            <li><a href="#" className="hover:text-indigo-700">Pricing</a></li>
                            <li><a href="#" className="hover:text-indigo-700">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-indigo-700">About Us</a></li>
                            <li><a href="#" className="hover:text-indigo-700">Blog</a></li>
                            <li><a href="#" className="hover:text-indigo-700">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-indigo-700">Help Center</a></li>
                            <li><a href="#" className="hover:text-indigo-700">Contact</a></li>
                            <li><a href="#" className="hover:text-indigo-700">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-200 mt-8">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Shortly. All rights reserved.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-indigo-700">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.633 7.997c.013.177.013.355.013.533 0 5.44-4.141 11.72-11.72 11.72-2.33 0-4.5-.685-6.333-1.86.33.038.648.05.99.05 1.94 0 3.73-.66 5.147-1.77a4.14 4.14 0 0 1-3.86-2.87c.254.038.508.064.774.064.37 0 .74-.05 1.086-.14a4.135 4.135 0 0 1-3.313-4.05v-.05c.55.305 1.19.49 1.87.515a4.125 4.125 0 0 1-1.84-3.44c0-.76.204-1.45.56-2.06a11.72 11.72 0 0 0 8.5 4.31 4.666 4.666 0 0 1-.102-.945 4.133 4.133 0 0 1 7.147-2.82 8.135 8.135 0 0 0 2.62-1 4.12 4.12 0 0 1-1.813 2.28 8.245 8.245 0 0 0 2.38-.65 8.93 8.93 0 0 1-2.07 2.14z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-indigo-700">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.48 2 2 6.58 2 12.15c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.16-1.1-1.47-1.1-1.47-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.64-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.38-2.03 1.03-2.75-.1-.27-.45-1.37.1-2.85 0 0 .84-.28 2.75 1.05a9.29 9.29 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.48.2 2.58.1 2.85.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.69.95.69 1.92v2.85c0 .26.18.59.69.48A10.16 10.16 0 0 0 22 12.15C22 6.58 17.52 2 12 2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
