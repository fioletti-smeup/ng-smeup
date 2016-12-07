import { Table } from './matrix/table';

export class Comp {
    id: string;
    title: string;
    type: string;
    comps: Comp[];
    content: string;
    loaded: boolean;
    direction: string;
    table: Table;
}
