import { useState } from 'react';
import DemuxedMark from './DemuxedMark';
import Link from 'next/link';

const navItems = [
	{ text: 'Home', href: '/' },
	{ text: 'Submit', href: '/submit' },
	{ text: 'Video Dev', href: 'https://video-dev.org' },
	{ text: 'Demuxed.com', href: 'https://demuxed.com' },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white px-4">
			<div className="container max-w-screen-md mx-auto">
				<div className="flex justify-between items-center py-4">
					<div>
						<Link href="/" className="text-xl font-bold">
							<DemuxedMark height="25" width="25" />
						</Link>
					</div>
					<div className="hidden md:flex items-center">
						{navItems.map((item) => (
							<Link
								href={item.href}
								key={item.href}
								className="text-sm font-semibold text-gray-700 mx-2 hover:underline hover:text-gray-900"
							>
								{item.text}
							</Link>
						))}
					</div>
					<div className="md:hidden flex items-center">
						<button className="text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
							<svg
								className="h-6 w-6"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
				{isOpen &&
					navItems.map((item) => (
						<Link
							href={item.href}
							key={item.href}
							className="block text-sm font-semibold text-gray-700 mx-2 hover:underline hover:text-gray-900"
						>
							{item.text}
						</Link>
					))}
			</div>
		</nav>
	);
}
