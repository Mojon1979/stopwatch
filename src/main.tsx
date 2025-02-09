import '@/index.css';

import { Stopwatch } from '@Stopwatch/Stopwatch.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Stopwatch />
	</StrictMode>,
);
