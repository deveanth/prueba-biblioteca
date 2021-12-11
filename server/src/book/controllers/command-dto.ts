export interface CreatedBookDTO {
	name: string;
}

export interface UpdateBookDTO {
	name?: string;
	available?: boolean;
}
