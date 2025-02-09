import { Container } from '@Container/Container.tsx';
import { LapTable } from '@LapTable/LapTable.tsx';
import { StopwatchButton } from '@StopwatchButton/StopwatchButton.tsx';
import { Summary } from '@Summary/Summary.tsx';
import { TimerDisplay } from '@TimerDisplay/TimerDisplay.tsx';
import { useEffect, useState } from 'react';

import { LapsProps } from '@/types.ts';

const Stopwatch = () => {
	const [totalTime, setTotalTime] = useState<number>(0);
	const [lapTime, setLapTime] = useState<number>(0);
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [laps, setLaps] = useState<LapsProps[]>([]);
	const [showSummary, setShowSummary] = useState(false);

	useEffect(() => {
		if (!isRunning) return;

		const interval = setInterval(() => {
			setTotalTime((prevTotalTime) => prevTotalTime + 100);
			setLapTime((prevLapTime) => prevLapTime + 100);
		}, 100);

		return () => clearInterval(interval);
	}, [isRunning]);

	const handleStartStop = () => {
		if (isRunning) {
			setShowSummary(true);
			setIsRunning(false);
		} else {
			setShowSummary(false);
			setTotalTime(0);
			setLapTime(0);
			setLaps([]);
			setIsRunning(true);
		}
	};

	const handleReset = () => {
		setTotalTime(0);
		setLapTime(0);
		setLaps([]);
	};

	const handleLap = () => {
		setLaps([...laps, { lap: laps.length + 1, time: lapTime }]);
		setLapTime(0);
	};

	return (
		<Container title="Stopwatch">
			{showSummary ? (
				<>
					<Summary laps={laps} totalTime={totalTime} />
					<StopwatchButton
						label={isRunning ? 'Stop' : 'Start'}
						onClick={handleStartStop}
					/>
				</>
			) : (
				<>
					<TimerDisplay time={totalTime} label="Łączny czas" />
					<TimerDisplay time={lapTime} label="Okrążenie" />
					<div>
						<StopwatchButton
							label={isRunning ? 'Stop' : 'Start'}
							onClick={handleStartStop}
						/>
						<StopwatchButton onClick={handleReset} label="Reset" />
						{isRunning && <StopwatchButton onClick={handleLap} label="Lap" />}
					</div>

					{laps.length > 0 && <LapTable laps={laps} />}
				</>
			)}
		</Container>
	);
};

export { Stopwatch };
