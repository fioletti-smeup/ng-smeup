export interface Comp {
	id: string;
	title: string;
	type: string;
	comps: Comp[];
	content: string;
	loaded: boolean;
    horizontal: boolean;
}