import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white">
			<Navigation />
			{children}
			<Footer />
		</div>
	);
}
