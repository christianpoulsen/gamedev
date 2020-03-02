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
	{
		id: 1131,
		title: 'Mechanical Turk Prototype',
		text: 'Replace complex and expensive computers or machines with human beings',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'Which value proporsition do you want to test?',
		options: [
			{ decision: 'Fitness Tracking', next: 1132, consequence: { time: 2 } },
			{ decision: 'Tracking/Monitor Kids', next: 1133, consequence: { time: 2 } },
			{ decision: 'Good habit formation', next: 1134, consequence: { time: 2 } },
		],
	},
	{
		id: 1132,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'You note down all activity through a day for a few kids and present it visually to their parents. How many kids will you include in the test?',
		options: [
			{ decision: '2 children', next: 1135, consequence: { time: 2 } },
			{ decision: '4 children', next: 1135, consequence: { time: 4 } },
		],
	},
	{
		id: 1133,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'You observe a kid at the playground and warn the parent each time the kid runs too far away. How many kids will you observe?',
		options: [
			{ decision: '2 children', next: 1136, consequence: { time: 2 } },
			{ decision: '4 children', next: 1136, consequence: { time: 4 } },
		],
	},
	{
		id: 1134,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'You make a simple cardboard device that shows a few habits. The parents use it to remind their kids. How many kids will you include in the test?',
		options: [
			{ decision: '2 children', next: 1137, consequence: { time: 2 } },
			{ decision: '4 children', next: 1137, consequence: { time: 4 } },
		],
	},
	{
		id: 1135,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'How do you find the kids?',
		options: [
			{ decision: 'Ask in your social circle', next: 1138, consequence: { time: 1, cd: 1 } },
			{ decision: 'Find some strangers whom finds your project interesting', next: 1139, consequence: { time: 3, cd: 3 } },
		],
	},
	{
		id: 1136,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'How do you find the kids?',
		options: [
			{ decision: 'Ask in your social circle', next: 11310, consequence: { time: 1, cd: 1 } },
			{ decision: 'Find some strangers whom finds your project interesting', next: 11311, consequence: { time: 3, cd: 3 } },
		],
	},
	{
		id: 1137,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		question: 'How do you find the kids?',
		options: [
			{ decision: 'Ask in your social circle', next: 11312, consequence: { time: 1, cd: 1 } },
			{ decision: 'Find some strangers whom finds your project interesting', next: 11313, consequence: { time: 3, cd: 4 } },
		],
	},
	{
		id: 1138,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: "You only get positive feedback. All your friends think it's a great idea",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 1139,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: 'All 3 parents find it interesting, but they are unsure what to use the data for',
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11310,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: "You only get positive feedback. All your friends think it's a great idea",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 11311,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: '4/5 parents tell you they have a hard time not keeping watch themselve. The last parent found the idea great',
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11312,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway: "You only get positive feedback. All your friends think it's a great idea",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 11313,
		title: 'Mechanical Turk Prototype',
		type: TaskType.PRODUCT_DEVELOPMENT,
		result: {
			takeAway:
				"All 5 parents observed an interesting change. The simple 'watch' made the upbringing a lot easier, as their kids found it easier to accept the instructions on the 'watch'",
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11212,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		text: 'You want to gain insight in your customers behaviour, and find that a questionaire is the best option',
		question: 'How will you secure a high number of resondents?',
		options: [
			{ decision: 'Post it on Social Media?', next: 11213, consequence: { time: 1 } },
			{ decision: "Post the questionaire in different groups on social media associated with parents' associations", next: 11214, consequence: { time: 2 } },
			{ decision: 'Send it to parents in your social group and ask them to forward it', next: 11215, consequence: { time: 1 } },
		],
	},
	{
		id: 11213,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: 'What would you like to ask in the questionnaire?',
		options: [
			{ decision: 'Questions related to challenges of raising children', next: 11216, consequence: { cd: 2 } },
			{ decision: 'Is playing games and watching video important for their kids', next: 11217, consequence: { cd: 1 } },
			{ decision: 'How a fitness tracker for their kids should be visually presented', next: 11218 },
		],
	},
	{
		id: 11214,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: 'What would you like to ask in the questionnaire?',
		options: [
			{ decision: 'Questions related to challenges of raising children', next: 11219, consequence: { cd: 5 } },
			{ decision: 'Is playing games and watching video important for their kids', next: 11220, consequence: { cd: 1 } },
			{ decision: 'How a fitness tracker for their kids should be visually presented', next: 11221 },
		],
	},
	{
		id: 11215,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		question: 'What would you like to ask in the questionnaire?',
		options: [
			{ decision: 'Questions related to challenges of raising children', next: 11222, consequence: { cd: 2 } },
			{ decision: 'Is playing games and watching video important for their kids', next: 11223, consequence: { cd: 1 } },
			{ decision: 'How a fitness tracker for their kids should be visually presented', next: 11224 },
		],
	},
	{
		id: 11216,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway:
				"You received 16 responses to the questionaire. The distribution between answers are as follows: 37% think the upbringing part is the most challenging. 24% find keeping an eye on their kids challenging. 29% find it difficult to adhere to the children's bedtime. 10% think entertaining their kids is time consuming",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 11217,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: "You get 8 responses to the questionaire. 50% think its important. 37,5% do not think it's important. 12,5% don't know",
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11218,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: 'You get 13 responses. All of them are different',
			sum: ResultSum.NEGATIVE,
		},
	},
	{
		id: 11219,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway:
				"You received 430 responses to the questionaire. The distribution between answers are as follows: 42% think the upbringing part is the most challenging. 22% find keeping an eye on their kids challenging. 23% find it difficult to adhere to the children's bedtime. 13% think entertaining their kids is time consuming",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 11220,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: "You get 217 responses to the questionaire. 47% think it's important. 45% do not think it's important. 8% don't know",
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11221,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: 'You get 134 responses. All of them are different',
			sum: ResultSum.NEGATIVE,
		},
	},
	{
		id: 11222,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway:
				"You received 16 responses to the questionaire. The distribution between answers are as follows: 37% think the upbringing part is the most challenging. 25% find keeping an eye on their kids challenging. 19% find it difficult to adhere to the children's bedtime. 19% think entertaining their kids is time consuming",
			sum: ResultSum.POSITIVE,
		},
	},
	{
		id: 11223,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: "You get 8 responses to the questionaire. 50% think it's important. 37,5% do not think it's important. 12,5% don't know",
			sum: ResultSum.NEUTRAL,
		},
	},
	{
		id: 11224,
		title: 'Customer Survey',
		type: TaskType.CUSTOMER_DEVELOPMENT,
		result: {
			takeAway: 'You get 11 responses. All of them are different',
			sum: ResultSum.NEGATIVE,
		},
	},
];
