import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import DemuxedLogo from '@/components/DemuxedLogo';
import Header from '@/components/Header';

export default function Home() {
	return (
		<div className="bg-white min-h-screen">
			<div className="container max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center">
				<DemuxedLogo className="w-1/2" />
				<Header size={1} className="font-bold mt-8 mb-6">
					The conference for
					<br /> video devs
				</Header>
				<Header size={2} className="font-semibold mb-10">
					<span className="whitespace-nowrap">
						<CalendarIcon className="h-8 w-8 inline align-top" /> October 24-26, 2023
					</span>
					<span className="whitespace-nowrap sm:ml-4">
						<MapPinIcon className="h-8 w-8 inline align-top" /> San Francisco
					</span>
				</Header>
				<div className="prose prose-xl">
					<p>
						Get out the calendar (app) and start adding some blocks, because it's time to start prepping for the 9th
						edition of the best damn conference for video engineers on the planet. Demuxed 2023 starts after lunch on{' '}
						<strong>October 24th and goes through October 26th</strong> in the same venue as last year:{' '}
						<Link href="https://bespokesf.co/events-overview">Bespoke</Link> (and, well...the Internet).
					</p>

					<p>
						Never heard of or been to Demuxed before? Great! We're glad you're here. Demuxed is a single-track
						conference and community for and by developers that work with online video. This one's for all the folks
						that have annoyed their friends by pausing a streaming movie to look at artifacts or opened the dev tools to
						check out a player. If you've ever even <em>considered</em> quoting an open source movie (or can even name
						one for that matter), you'll fit right in: We're the folks that love (and sometimes hate) the #1 use of the
						Internet, and this is where we get together and talk about building it.
					</p>

					<p>
						Tickets will go on sale over the summer, but in the meantime: we'd love for you to get involved! The{' '}
						<Link href="/submit">call for proposals is now open</Link> (hence the "submit" button below). The selection
						process will bias for speakers that are able to attend in person, but please submit a talk either way, we're
						open to getting creative for good content.
					</p>

					<p>
						We're also looking for sponsors, so if you're looking to get your company involved in the community, or just{' '}
						<span title="p.s. I'm open to fancy dinners and stuff">personally want to flex</span>,{' '}
						<Link href="mailto:sponsor@demuxed.com">drop us an email</Link> (the other button below) and we'll send you
						the prospectus.
					</p>
				</div>
				<div className="flex flex-col md:flex-row mt-8 gap-8">
					<Link
						href="/submit"
						className="md:w-1/2 bg-black text-white text-center border-2 border-black py-4 px-8 hover:bg-white hover:text-black hover:border-black hover:underline"
					>
						Submit a talk
					</Link>
					<Link
						href="mailto:sponsor@demuxed.com"
						className="md:w-1/2 bg-white text-black text-center border-2 border-black py-4 px-8 hover:bg-black hover:text-white hover:border-black hover:underline"
					>
						Sponsor
					</Link>
				</div>
			</div>
		</div>
	);
}
