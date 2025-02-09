type Props = {
	label: string;
	onClick: () => void;
};

const StopwatchButton = ({ label, onClick }: Props) => {
	return <button onClick={onClick}>{label}</button>;
};

export { StopwatchButton };
