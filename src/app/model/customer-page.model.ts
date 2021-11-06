import { Customer } from './customer.model';

export class CustomerPage {

    private _customers: Customer[];
    private _totalElements: string;
    private _totalPages: string;

	constructor(customers: Customer[], totalElements: string, totalPages: string) {
		this._customers = customers;
		this._totalElements = totalElements;
		this._totalPages = totalPages;
	}

    /**
     * Getter customers
     * @return {Customer[]}
     */
	public get customers(): Customer[] {
		return this._customers;
	}

    /**
     * Getter totalElements
     * @return {string}
     */
	public get totalElements(): string {
		return this._totalElements;
	}

    /**
     * Getter totalPages
     * @return {string}
     */
	public get totalPages(): string {
		return this._totalPages;
	}

    /**
     * Setter customers
     * @param {Customer[]} value
     */
	public set customers(value: Customer[]) {
		this._customers = value;
	}

    /**
     * Setter totalElements
     * @param {string} value
     */
	public set totalElements(value: string) {
		this._totalElements = value;
	}

    /**
     * Setter totalPages
     * @param {string} value
     */
	public set totalPages(value: string) {
		this._totalPages = value;
	}

}
