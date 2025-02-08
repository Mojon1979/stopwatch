import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ title: string }>;

const Container = ({ children, title }: Props) => {
	return (
		<div
			style={{
				width: 800,
				margin: '0 auto',
				padding: 20,
				textAlign: 'center',
			}}
		>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export { Container };
