import React, { useState } from 'react';

import { Dialog, Divider } from '@material-ui/core';

import { Option, Stats, Task, tasks } from '@/data';
import Ending from '@/Ending';
import GameBoard from '@/GameBoard';
import Introduction from '@/Introduction';

enum STAGE {
	INTRODUCTION,
	PLAYING,
	ENDING,
}

const App: React.FC = () => {
	const [log, setLog] = useState([] as Task[]);
	const [stats, setStats] = useState({ money: 1000000, cd: 0, pr: 0, time: 1 } as Stats);

	const [stage, setStage] = useState<STAGE>(STAGE.INTRODUCTION);

	switch (stage) {
		case STAGE.INTRODUCTION: {
			return <Introduction />;
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
