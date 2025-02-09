import { LapRow } from '@LapTable/LapRow.tsx';

import { LapsProps } from '@/types.ts';

type Props = {
	laps: LapsProps[];
};

const LapTable = ({ laps }: Props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Okrążenie</th>
					<th>Czas</th>
				</tr>
			</thead>
			<tbody>
				{laps.map(({ lap, time }) => (
					<LapRow lap={lap} time={time} />
				))}
			</tbody>
		</table>
	);
};

export { LapTable };
