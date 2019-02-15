import { OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Actions } from './actions';
export declare class GoTableComponent implements OnInit {
    data: any[];
    columns: any[];
    sortableColumns: any[];
    actions: Actions;
    tableDataSource$: BehaviorSubject<any[]>;
    activeColumn: string;
    sortDirection: string;
    constructor();
    ngOnInit(): void;
    sortByColumn(col: string): void;
    sortClass(col: string): {
        'sort-up': boolean;
        'sort-down': boolean;
    };
    private sortDescending;
    private sortAscending;
    private updateTableData;
    private setSortDirection;
}
