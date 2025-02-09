import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ title: string }>;

const Container = ({ children, title }: Props) => {
	return (
		<div
			style={{
				width: 800,
				height: 500,
				margin: '0 auto',
				padding: 20,
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<h1>{title}</h1>
			{children}
		</div>
	);
};

export { Container };
