import Crud from "@components/crud";
import {
	createBook,
	findAllBook,
	removeBook,
	updateBook,
} from "@helpers/book-api";

const Book = () => {
	return (
		<Crud
			create={createBook}
			findAll={findAllBook}
			remove={removeBook}
			update={updateBook}
			message="libro"
			icon="bi-book"
		></Crud>
	);
};

export default Book;
