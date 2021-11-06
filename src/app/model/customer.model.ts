export class Customer {

    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _address: string;
    private _city: string;
    private _country: string;
    private _email: string;
    private _image: string; 
    
    constructor(id: string, firstName: string, lastName: string, address: string, city: string, country: string, email: string, image: string) {
		this._id = id;
		this._firstName = firstName;
		this._lastName = lastName;
		this._address = address;
		this._city = city;
		this._country = country;
		this._email = email;
		this._image = image;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Getter address
     * @return {string}
     */
	public get address(): string {
		return this._address;
	}

    /**
     * Getter city
     * @return {string}
     */
	public get city(): string {
		return this._city;
	}

    /**
     * Getter country
     * @return {string}
     */
	public get country(): string {
		return this._country;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter image
     * @return {string}
     */
	public get image(): string {
		return this._image;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

    /**
     * Setter address
     * @param {string} value
     */
	public set address(value: string) {
		this._address = value;
	}

    /**
     * Setter city
     * @param {string} value
     */
	public set city(value: string) {
		this._city = value;
	}

    /**
     * Setter country
     * @param {string} value
     */
	public set country(value: string) {
		this._country = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter image
     * @param {string} value
     */
	public set image(value: string) {
		this._image = value;
	}
    
}
