import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home() {
	return (
		<>
			<main className="w-full  bg-white dark:bg-gray-900">
				<div className="container relative flex flex-col  px-6 py-8 mx-auto">
					<section className="flex items-center flex-1">
						<div className="flex flex-col w-full ">
							<h1 className="text-4xl md:text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
								<span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
									Coming
								</span>

								<span className="text-transparent bg-gradient-to-tr bg-clip-text from-primary-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
									Soon
								</span>
							</h1>

							<p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
								Discover the best products and find the latest
								and most popular items, read reviews, and make
								informed purchasing decisions!
							</p>

							<p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">
								We will back soon :)
							</p>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
