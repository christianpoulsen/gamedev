export interface Consequence {
	time?: number;
	pr?: number;
	cd?: number;
	money?: number;
}

export type Stats = Required<Consequence>;

export interface Option {
	decision: string;
	next?: number;
	consequence?: Consequence;
}

export enum TaskType {
	CUSTOMER_DEVELOPMENT,
	PRODUCT_DEVELOPMENT,
}

export enum ResultSum {
	NEGATIVE,
	POSITIVE,
	NEUTRAL,
}

export interface DecisionResult extends Consequence {
	takeAway: string;
	sum: ResultSum;
}

export interface RootTask {
	id: number;
	title: string;
	type: TaskType;
	text: string;
	question: string;
	options: Option[];
}
export interface NodeTask {
	id: number;
	title: string;
	type: TaskType;
	question: string;
	options: Option[];
}

export interface LeafTask {
	id: number;
	title: string;
	type: TaskType;
	result: DecisionResult;
}

export type Task = RootTask | NodeTask | LeafTask;
