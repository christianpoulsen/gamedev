import { LeafTask, NodeTask, RootTask, Task } from './data';

export const isRoot = (task: Task): task is RootTask => {
	return (task as RootTask)?.text !== undefined;
};

export const isLeaf = (task: Task): task is LeafTask => {
	return (task as LeafTask)?.result !== undefined;
};

export const formatMoney = (money: number): string => {
	const MM = 1000000;
	const K = 1000;
	if (money >= MM) {
		return `${Math.floor(money / MM)} MM`;
	} else if (money >= 1000) {
		return `${Math.floor(money / K)} K`;
	}
	return `${money}`;
};
