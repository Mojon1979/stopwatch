type Props = {
	lap: number;
	time: number;
};

const LapRow = ({ lap, time }: Props) => {
	const formatTime = (ms: number) => {
		const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
		const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
		const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
		return `${minutes}:${seconds}:${milliseconds}`;
	};

	return (
		<tr key={lap}>
			<td>{lap}</td>
			<td>{formatTime(time)}</td>
		</tr>
	);
};
export { LapRow };
