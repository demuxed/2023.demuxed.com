import { createElement } from 'react';

interface HeaderProps {
	size: number;
	children: React.ReactNode;
	className: string;
}

function sizeToElement(size: number) {
	switch (size) {
		case 1:
			return { el: 'h1', className: 'text-6xl' };
		case 2:
			return { el: 'h2', className: 'text-3xl' };
		case 3:
			return { el: 'h3', className: 'text-2xl' };
		case 4:
			return { el: 'h4', className: 'text-xl' };
		case 5:
			return { el: 'h5', className: 'text-lg' };
		default:
			return { el: 'h2', className: 'text-3xl' };
	}
}

export default function Header(props: HeaderProps) {
	const elDetails = sizeToElement(props.size);
	return createElement(elDetails.el, { className: `${elDetails.className} ${props.className}` }, props.children);
}
