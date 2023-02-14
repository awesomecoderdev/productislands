import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: {
		default:
			process.env.APP_NAME + " |  Map to Quality Products and Deals!",
		template: "%s | " + process.env.APP_NAME,
	},
};

export default function RootLayout({ children, params }) {
	console.log("params", params);
	return (
		<html lang="en">
			<body className="antialiased text-slate-500 dark:text-slate-400  bg-zinc-50 dark:bg-slate-900 h-full min-h-screen flex flex-col justify-between items-center ">
				<header className="w-full bg-white dark:bg-gray-900">
					<div className="container relative flex flex-col px-6 py-8 mx-auto">
						<nav className="md:flex md:items-center md:justify-between">
							<div className="flex items-center justify-between">
								<Link href="/">
									<div className="flex items-center pointer-events-none">
										<h1 className="font-extrabold text-center text-xl mx-1">
											<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
												Product
											</span>
											<span className="mx-1 text-transparent bg-gradient-to-tr bg-clip-text from-primary-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
												Islands
											</span>
										</h1>
									</div>
								</Link>
							</div>
							<div
								// x-cloak:className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"
								className="absolute  hidden inset-x-0 z-20 w-full px-6 py-8 mt-8 space-y-6 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 top-16 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center"
							>
								<button className="w-full px-5 py-3 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 md:w-auto md:mx-6 hover:bg-gray-200 dark:hover:bg-gray-700">
									<Link
										href="mailto:awesomecoder.dev@gmail.com"
										className="flex items-center justify-center -mx-1"
									>
										<p className="mx-1 text-sm text-gray-600 dark:text-white pointer-events-none">
											Contact Us
										</p>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="w-4 h-4 mx-1 text-gray-600 dark:text-white pointer-events-none"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
											/>
										</svg>
									</Link>
								</button>
							</div>
							<Link
								href="mailto:awesomecoder.dev@gmail.com"
								className="absolute block right-4 top-6 md:hidden sm:w-40 w-auto md:mx-6 px-5 py-3 transition-colors duration-300 bg-gray-100 rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
							>
								<div className="flex items-center justify-center -mx-1">
									<p className="mx-1 text-sm text-gray-600 dark:text-white pointer-events-none hidden sm:block ">
										Contact Us
									</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="w-4 h-4 mx-1 text-gray-600 dark:text-white pointer-events-none"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
								</div>
							</Link>
						</nav>
					</div>
				</header>

				{children}

				<footer className="w-full bg-white dark:bg-gray-900">
					<div className="container relative flex flex-col px-6 py-8 mx-auto">
						<div className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
							<p className="cursor-pointer text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400">
								<span className="text-lg mx-1">©</span>
								ProductIslands
							</p>

							<div className="mt-4 -mx-4 md:mt-0">
								<Link
									target="_blank"
									href="https://www.facebook.com/productislands"
									className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
								>
									Facebook
								</Link>

								<Link
									target="_blank"
									href="https://www.instagram.com/productislands/"
									className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
								>
									Instagram
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
