// components/Header.js

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
    { name: "My Urls", to: "/allurl" },
    { name: "Features", to: "/features" },
    { name: "Pricing", to: "/pricing" },
    { name: "Analytics", to: "/analytics" },
    { name: "Sign In", to: "/sign" },
];


const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="absolute inset-x-0 top-0 z-50">

            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 flex items-center">
                        <span className="sr-only">URL Shortener</span>
                        <img
                            alt="logo"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                        <span className="ml-2 font-bold text-indigo-600">Shortly</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.to} className="text-sm font-semibold text-gray-700">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5 flex items-center">
                            <img
                                alt="logo"
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                            <span className="ml-2 font-bold text-indigo-600">Shortly</span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>

    );
};

export default Header;