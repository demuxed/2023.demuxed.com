export default function Home() {
	return (
		<div className="bg-white min-h-screen mt-12">
			<div className="container max-w-screen-md mx-auto p-4 min-h-screen flex flex-col justify-center prose lg:prose-xl">
				<h1>Submit a talk proposal for Demuxed 2023</h1>
				<h2 className="mt-4">October 24th & 25th 2023, San Francisco</h2>
				<iframe
					className="airtable-embed"
					src="https://airtable.com/embed/shrM3I6ta6f1P7osG?backgroundColor=white"
					width="100%"
					height="533"
					style={{ background: 'transparent', border: '1px solid #ccc' }}
				></iframe>
				<div>
					<h2>The Process</h2>
					<p>
						Let us say up front, that at this point we're starting to have the best problem any technical conference can
						have: enough fantastic submissions that we can't accept all of them. Every year we have to make really
						difficult decisions about which ones we accept and which ones we don't, and the reasoning for why some make
						it and some don't can vary wildly. Regardless of whether or not your talk is accepted, if you submit one at
						all you're playing a huge part in making the event amazing.
					</p>
					<p>
						That being said, here's a rough outline of how our selection process works. Don't worry, we'll also go over
						a lot of this again as you complete the submission form, so no need to memorize all of this right now.
					</p>
					<h3>1. Get as many excellent submissions from as many people as possible</h3>
					<p>
						We encourage and accept submissions from <strong>everyone</strong> in the industry (mostly technical folks,
						to be fair, but really the bar is anyone that can interest a room full of developers that work with video).
					</p>
					<h3>2. Redact anything that could be identifying</h3>
					<p>
						When submissions close, we'll have someone that's <em>not</em> involved in the selection process go through
						and redact anything identifying in each submission title/description. This can be a host of things based on
						context, but the obvious ones are company name, speaker name, or any gender pronouns.
					</p>
					<h3>3. Individually review each anonymized submission</h3>
					<p>
						The selection committee will then (indvidually) go through and rank each submission 1-10, taking into
						account the following:
					</p>
					<ul>
						<li>The proposal itself (Is it clear and understandable?)</li>
						<li>Relevance to the Demuxed community (Will a room of developers working with video enjoy it?)</li>
						<li>Originality of the topic (Will this talk be new to the audience?)</li>
						<li>Plausible (Is it possible for this talk to be given in the time available?)</li>
					</ul>
					<p>
						In the early years, this part of the process was done as a group in a room. Recently, we've expanded that
						committee to be fully distributed/remote/async. This way we're able to get more of the community involved
						and reviewing content, while avoiding individuals from influencing each other at this stage.
					</p>
					<h3>4. De-anonymize and build a schedule</h3>
					<p>
						A smaller subset of the selection committee from the last round will then meet in person to review the
						ranked and de-anonymized submissions. The goal at this point is to build a coherent and diverse line-up of
						speakers from all backgrounds and speaking experiences.
					</p>
					<h2>Improving your odds at getting picked</h2>
					<p>
						Keep in mind that, at least for the initial selection process, your anonymized submission is competing
						against a pile of other anymous submissions. That means that you can't rely on name recognition if your
						company does really cool stuff or you're known as an amazing speaker.
					</p>
					<h3>Put some effort in (or at least make it look like it)</h3>
					<p>
						This one is probably the most important, and simultaneously the scariest sounding but probably easiest one.
						Don't take this to mean you need to write a 1500 word essay to be selected, but little things like coherent
						sentences and punctuation can go an astonishingly long way. Show the committee you've thought about and
						worked on the topic!
					</p>
					<h3>Talk about something you care about</h3>
					<p>
						Don't just submit a talk that you think the committee wants to see! The personal stories that come out of
						the depths of time spent in command lines, text editors, and, perhaps worst of all, meetings make for the
						best talks.
					</p>
					<h3>Submit a few ideas (separately)</h3>
					<p>
						You're welcome to submit <strong>as many talks</strong> as you want. Seriously. You can even submit the same
						general topic multiple times, but with different angles. The one thing we ask is that you submit each one as
						its own individual submission. If you do submit a few talks, feel free to let us know that we can refer to
						another submission for you personal details like bio, photo, etc. No one wants to type their own bio in
						once, much less 5 times.
					</p>
					<h3>Feel free to submit something weird</h3>
					<p>
						This shouldn't come as a surprise, but we're going to get a few submissions on next-gen codecs, HDR, color
						theory, etc. You should submit the talk you're thinking about on that side of things, of course, but{' '}
						<em>also</em> consider submitting the talk about that time you got your potato clock to display 0.5fps
						video.
					</p>
					<h3>Just do it!</h3>
					<p>
						No really, ignore everything above and just submit the talk you're thinking about! You're better off
						submitting something rather than nothing, and we'll help you polish!
					</p>
				</div>
			</div>
		</div>
	);
}
