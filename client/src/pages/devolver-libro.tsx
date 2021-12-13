import { MouseEvent, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Book } from "@types";
import ReturnBookPage from "./index";
import { findBookByAvailable } from "@helpers/book-api";
import { returnBook } from "@helpers/book-exchange-api";

const LendBook = () => {
	const [books, setBooks] = useState<Book[]>();

	const listBook = async () => {
		try {
			const res = await findBookByAvailable(false);
			const data = await res.json();
			if (data.length > 0) {
				setBooks(data);
			} else {
				setBooks(undefined);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		listBook();
	}, []);

	const handleOnClickReturnBook = async (
		event: MouseEvent<HTMLButtonElement>
	) => {
		await returnBook(Number(event.currentTarget.id));
		await listBook();
	};

	return (
		<ReturnBookPage animation="animate__animated animate__fadeIn animate__faster">
			<Container className="text-center">
				<span className="fs-3 text-dark">Lista de libros prestados</span>
				{books ? (
					<Table
						striped
						bordered
						size="sm"
						hover
						variant="dark"
						className="mt-5 animate__animated animate__fadeIn animate__faster"
					>
						<thead>
							<tr>
								<th>*</th>
								<th>ID</th>
								<th>Nombre</th>
							</tr>
						</thead>
						<tbody>
							{books.map((book) => (
								<tr key={book.id}>
									<td>
										{" "}
										<i className="bi bi-book text-light"></i>
									</td>

									<td>{book.id}</td>
									<td>{book.name}</td>
									<td>
										<span
											onClick={handleOnClickReturnBook}
											id={book.id.toString()}
											style={{ cursor: "pointer" }}
											className="badge bg-light"
										>
											Devolver
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<span className="d-block m-5 fs-3 text-dark fw-bold animate__animated animate__heartBeat animate__slow animate__infinite">
						Todos los libros están disponibles
					</span>
				)}
			</Container>
		</ReturnBookPage>
	);
};
export default LendBook;
