import React, { useState } from 'react';

import { Dialog, Divider } from '@material-ui/core';

import tasks from '@/data';
import Ending from '@/Ending';
import GameBoard from '@/GameBoard';
import Introduction from '@/Introduction';
import { Option, Stats, Task } from '@/types';

enum STAGE {
	INTRODUCTION,
	PLAYING,
	ENDING,
}

const App: React.FC = () => {
	const [log, setLog] = useState([] as Task[]);
	const [stats, setStats] = useState({ money: 1000000, cd: 0, pr: 0, time: 1 } as Stats);

	const [stage, setStage] = useState<STAGE>(STAGE.INTRODUCTION);
	const nextStage = () => setStage(prevStage => prevStage + 1);

	switch (stage) {
		case STAGE.INTRODUCTION: {
			return <Introduction onNextStage={nextStage} />;
		}
		case STAGE.PLAYING: {
			return <GameBoard log={log} stats={stats} onChangeLog={setLog} onChangeStats={setStats} />;
		}
		case STAGE.ENDING: {
			return <Ending />;
		}
	}
};

export default App;
