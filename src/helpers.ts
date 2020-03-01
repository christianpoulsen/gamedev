import { LeafTask, NodeTask, RootTask, Task } from './tasks';

export const isRoot = (task: Task): task is RootTask => {
	return (task as RootTask)?.text !== undefined;
};

export const isLeaf = (task: Task): task is LeafTask => {
	return (task as LeafTask)?.result !== undefined;
};
