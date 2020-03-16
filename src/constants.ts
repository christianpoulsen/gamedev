import andy from '@/casino-manager.png';
import peter from '@/scientist-with-task.png';
import vera from '@/woman-2.png';
import alex from '@/woman.png';

interface Cofounder {
	img: string;
	name: string;
}

export const cofounders: Cofounder[] = [
	{ img: alex, name: 'Alex' },
	{ img: andy, name: 'Andy' },
	{ img: vera, name: 'Vera' },
	{ img: peter, name: 'Peter' },
];
