import Navigation from '@/components/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white">
			<Navigation />
			{children}
		</div>
	);
}
