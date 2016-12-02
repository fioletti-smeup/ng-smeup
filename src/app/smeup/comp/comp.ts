export class Comp {
	id: string;
	title: string;
	type: string;
	comps: Comp[];
	content: string;
	loaded: boolean;
	direction: string;

	get isSmeupComp(): string {
		return 'prova';
	}
}
