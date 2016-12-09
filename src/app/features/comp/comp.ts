import { Table } from './matrix/table';
import { Tree } from './tree/tree';
import { IML } from './iml/iml';

export class Comp {
    id: string;
    title: string;
    type: string;
    comps: Comp[];
    content: string;
    loaded: boolean;
    direction: string;
    table: Table;
    tree: Tree;
    iml: IML;
}
