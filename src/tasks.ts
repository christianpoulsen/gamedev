export interface Consequence {
	time?: number;
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

export const tasks: Task[] = [
	{
		id: 1127,
		title: 'Interview Potential Customers',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		text: 'Find and interview 5 potential customers (parents)',
		question: 'What would you ask them about?',
		options: [
			{
				decision: 'Their kids current usage of technology',
				next: 1128,
				consequence: { time: 2 },
			},
			{
				decision: 'Their needs/challenges when raising their kids',
				next: 1129,
				consequence: { time: 2 },
			},
			{
				decision: 'Their suggestions for product features for the smartwatch',
				next: 11210,
				consequence: { time: 2 },
			},
			{
				decision: 'Why talk to the parents? The users are more important. Interview 5 kids',
				next: 11211,
				consequence: { time: 2 },
			},
		],
	},
	{
		id: 1128,
		title: 'Interview Potential Customers',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: "All 5 parents tell you that their kids like to either play games or watch TV on their tablets. What's your conclusion?",
		options: [
			{
				decision: 'A key feature of the smartwatch should be playing games',
				consequence: { cd: 2 },
			},
			{
				decision: 'A key feature of the smartwatch should be watching TV shows',
				consequence: { cd: 2 },
			},
			{ decision: 'You find the results inconclusive', consequence: { cd: 2 } },
		],
	},
	{
		id: 1129,
		title: 'Interview Potential Customers',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: '3 parents think its demanding to keep an eye on their kids. 2 parents think they spend a lot of time on their upbringing. Whats your conclusion?',
		options: [
			{
				decision: 'A key feature of the smartwatch should be tracking kids',
				consequence: { cd: 2 },
			},
			{
				decision: 'A key feature of the smartwatch should be reminders and habit building',
				consequence: { cd: 2 },
			},
			{ decision: 'You find the results inconclusive', consequence: { cd: 2 } },
		],
	},
	{
		id: 11210,
		title: 'Interview Potential Customers',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: 'All 5 parents do think the smartwatch should include features like fitnesstracking, calls and messaging. Whats your conclusion?',
		options: [
			{
				decision: 'A key feature of the smartwatch should be tracking the daily fitness level',
				consequence: { cd: 1 },
			},
			{
				decision: 'A key feature of the smartwatch should be communication',
				consequence: { cd: 1 },
			},
			{ decision: 'You find the results inconclusive', consequence: { cd: 1 } },
		],
	},
	{
		id: 11211,
		title: 'Interview Potential Customers',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: "You can't communicate with the kids, but you observe them using devices for gaming and watching TV shows. What's your conclusion?",
		options: [
			{
				decision: 'A key feature of the smartwatch should be playing games',
				consequence: { cd: 1 },
			},
			{
				decision: 'A key feature of the smartwatch should be watching TV shows',
				consequence: { cd: 1 },
			},
			{ decision: 'You find the results inconclusive', consequence: { cd: 1 } },
		],
	},
	{
		id: 11317,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		text: 'To gain insight in your customers needs for your product, you build a fake webshop and advertise it',
		question: 'Your campaing consists of a fake webpage/webshop and an online advertisement campaign. How much do you want to do yourself?',
		options: [
			{
				decision: 'We will do it all ourselve',
				next: 11319,
				consequence: { time: 10 },
			},
			{
				decision: 'The webpage/webshop',
				next: 11318,
				consequence: { time: 4, money: -15000 },
			},
			{
				decision: 'The online advertisement campaign',
				next: 11319,
				consequence: { time: 6, money: -5000 },
			},
			{
				decision: 'We will pay for both',
				next: 11318,
				consequence: { time: 1, money: -18000 },
			},
		],
	},
	{
		id: 11318,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'Which of the following product key features would you like to test?',
		options: [
			{
				decision: 'Communicating with the kids',
				next: 11321,
				consequence: { time: 8 },
			},
			{
				decision: 'The possiblity to play games and watch videos',
				next: 11321,
				consequence: { time: 8 },
			},
			{
				decision: 'Supporting healthy habit formation',
				next: 11322,
				consequence: { time: 8 },
			},
		],
	},
	{
		id: 11319,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'Which of the following product key features would you like to test?',
		options: [
			{
				decision: 'Communicating with the kids',
				next: 11323,
				consequence: { time: 6 },
			},
			{
				decision: 'The possiblity to play games and watch videos',
				next: 11324,
				consequence: { time: 6 },
			},
			{
				decision: 'Supporting healthy habit formation',
				next: 11325,
				consequence: { time: 6 },
			},
		],
	},
	{
		id: 11320,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway:
				"Your average Cost Per Click for your most popular adds is 13,25 DKK and 1,7% sign up for a pre-order. Each sign up cost 780 DKK. The consultants proclaim it's too high a price - the result is negative.",
			sum: ResultSum.NEGATIVE,
			cd: 2,
		},
	},
	{
		id: 11321,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway:
				"Your average Cost Per Click for your most popular adds is 12,5 DKK and 2,2% sign up for a pre-order. Each sign up cost 570 DKK. The consultants proclaim it's too high a price - the result is negative.",
			sum: ResultSum.NEGATIVE,
			cd: 2,
		},
	},
	{
		id: 11322,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway:
				'Your average Cost Per Click for your most popular adds is 1,25 DKK and 3,9% sign up for a pre-order. Each sign up cost 32 DKK. The consultants are very happy with the result',
			sum: ResultSum.POSITIVE,
			cd: 5,
		},
	},
	{
		id: 11323,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question:
			'Your average Cost Per Click for your most popular adds is 13,25 DKK and 1,7% sign up for a pre-order. Each sign up cost 780 DKK. Do you find the result of the Fake Door/Smoke Test',
		options: [
			{ decision: 'Inconclusive' },
			{ decision: 'Positive' },
			{ decision: 'Negative', consequence: { cd: 2 } },
			{
				decision: 'Get a consultant to review result',
				next: 11326,
				consequence: { time: 1, money: 8000, cd: 2 },
			},
		],
	},
	{
		id: 11324,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question:
			'Your average Cost Per Click for your most popular adds is 12,5 DKK and 2,2% sign up for a pre-order. Each sign up cost 570 DKK. Do you find the result of the Fake Door/Smoke Test',
		options: [
			{ decision: 'Inconclusive' },
			{ decision: 'Positive' },
			{ decision: 'Negative', consequence: { cd: 2 } },
			{
				decision: 'Get a consultant to review result',
				next: 11327,
				consequence: { time: 1, money: 8000, cd: 2 },
			},
		],
	},
	{
		id: 11325,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question:
			'Your average Cost Per Click for your most popular adds is 2,75 DKK and 3,9% sign up for a pre-order. Each sign up cost 70 DKK. Do you find the result of the Fake Door/Smoke Test',
		options: [
			{ decision: 'Inconclusive' },
			{ decision: 'Positive', consequence: { cd: 2 } },
			{ decision: 'Negative' },
			{
				decision: 'Get a consultant to review result',
				next: 11328,
				consequence: { time: 1, money: 8000, cd: 2 },
			},
		],
	},
	{
		id: 11326,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: 'After reviewing your add campaign the consultants conclude that the result is negative. The interest among your potential customers is not strong enough',
			sum: ResultSum.NEGATIVE,
		},
	},
	{
		id: 11327,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: 'After reviewing your add campaign the consultants conclude that the result is negative. The interest among your potential customers is not strong enough',
			sum: ResultSum.NEGATIVE,
		},
	},
	{
		id: 11328,
		title: 'Fake Door/Smoke Test',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway:
				'After reviewing your add campaign the consultants conclude that the result is positve. The interest among your potential customers suggests strong interest in the product',
			sum: ResultSum.POSITIVE,
		},
	},
];
