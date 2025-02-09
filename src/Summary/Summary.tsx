import { LapsProps } from '@/types.ts';

type Props = {
	laps: LapsProps[];
	totalTime: number;
};

const Summary = ({ laps, totalTime }: Props) => {
	if (laps.length === 0) return <p>Brak okrążeń.</p>;

	const avgTime = laps.reduce((sum, lap) => sum + lap.time, 0) / laps.length;
	const minTime = Math.min(...laps.map((lap) => lap.time));
	const maxTime = Math.max(...laps.map((lap) => lap.time));

	const formatTime = (ms: number) => {
		const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
		const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
		const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
		return `${minutes}:${seconds}:${milliseconds}`;
	};

	return (
		<div>
			<h2>Podsumowanie</h2>
			<p>Łączny czas: {formatTime(totalTime)}</p>
			<p>Średni czas okrążenia: {formatTime(avgTime)}</p>
			<p>Najszybsze okrążenie: {formatTime(minTime)}</p>
			<p>Najwolniejsze okrążenie: {formatTime(maxTime)}</p>
			<p>Liczba okrążeń: {laps.length}</p>
		</div>
	);
};

export { Summary };
