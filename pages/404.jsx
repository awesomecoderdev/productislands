"use client";

import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import Head from "next/head";

export default function Custom404() {
	return (
		<>
			<Head>
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				<meta
					name="description"
					content="Discover a World of Possibilities - ProductIslands, Your Non-Stop Destination for Amazing Products and Deals!"
				/>
				<link rel="icon" href="/favicon.ico" />
				<title>404 | Not Found</title>
			</Head>
			<main className="bg-white dark:bg-gray-900 ">
				<div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
					<div className="wf-ull lg:w-1/2">
						<p className="text-sm font-medium text-blue-500 dark:text-blue-400">
							404 error
						</p>
						<h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
							<span className="mx-0.5 text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
								Page
							</span>
							<span className="mx-0.5 text-transparent bg-gradient-to-tr bg-clip-text from-primary-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
								not
							</span>
							<span className="mx-0.5 text-transparent bg-gradient-to-tr bg-clip-text from-primary-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
								found
							</span>
						</h1>
						<p className="mt-4 text-gray-500 dark:text-gray-400">
							Sorry, the page you are looking for doesn&rsquo;t
							exist.Here are some helpful links:
						</p>

						<div className="flex items-center mt-6 gap-x-3">
							<Link
								href="/"
								className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-5 h-5 rtl:rotate-180"
								>
									<path
										strokeLinecap="round"
										d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
									/>
								</svg>

								<span>Go back</span>
							</Link>
						</div>
					</div>

					<div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
						<div className="w-full max-w-lg lg:mx-auto">
							<Image
								src="https://merakiui.com/images/components/illustration.svg"
								alt="Not Found"
								className="z-10"
								height={1000}
								width={1000}
								priority
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
