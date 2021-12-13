import { ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { Form, Row, Col, Container, ListGroup, Table } from "react-bootstrap";
import { Book, User } from "@types";
import LendBookPage from "./index";
import { findBookByAvailable } from "@helpers/book-api";
import { findUserByName } from "../helpers/user-api";
import { lendBook } from "@helpers/book-exchange-api";

const LendBook = () => {
	const [userName, setUserName] = useState("");
	const [books, setBooks] = useState<Book[]>();
	const [user, setUser] = useState<User>();
	const [error, setError] = useState<any>();

	const listBook = async () => {
		try {
			const res = await findBookByAvailable(true);
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

	const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const handleOnClickLendBook = async (
		event: MouseEvent<HTMLButtonElement>
	) => {
		if (user) {
			await lendBook(Number(event.currentTarget.id), user.id);
			await listBook();
		}
	};

	const handleOnClickLoginUser = async (
		event: MouseEvent<HTMLButtonElement>
	) => {
		const res = await findUserByName(userName);
		const data = await res.json();
		console.log(data);
		if (data.error) {
			setError(data);
			setUser(undefined);
		} else {
			setError(undefined);
			setUser(data);
		}
		setUserName("");
	};

	return (
		<LendBookPage animation="animate__animated animate__fadeIn animate__faster">
			<Form className="text-center pt-3 mb-3">
				<Row className="justify-content-center">
					<Col sm lg={6}>
						<Form.Control
							value={userName}
							size="sm"
							onChange={handleChangeUserName}
							type="text"
							placeholder="Nombre de usuario"
						/>
						{error ? (
							<span className="d-block text-danger mt-2 animate__animated animate__fadeIn animate__faster">
								{error.error}
							</span>
						) : null}
						<span
							onClick={handleOnClickLoginUser}
							style={{ cursor: "pointer" }}
							className="badge bg-dark mt-2"
						>
							Iniciar sesión
						</span>
					</Col>
				</Row>
			</Form>
			<Container className="text-center mt-5">
				<span className="fs-3 text-dark">Lista de libros Disponibles</span>
				{books ? (
					<Table
						striped
						bordered
						size="sm"
						hover
						variant="dark"
						className="animate__animated animate__fadeIn animate__faster"
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
									{user && (
										<td className="animate__animated animate__fadeIn animate__faster">
											<span
												onClick={handleOnClickLendBook}
												id={book.id.toString()}
												style={{ cursor: "pointer" }}
												className="badge bg-light"
											>
												Pedir
											</span>
										</td>
									)}
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<span className="d-block m-5 fs-3 text-dark fw-bold animate__animated animate__heartBeat animate__slow animate__infinite">
						Todos los libros no están disponibles
					</span>
				)}
			</Container>
		</LendBookPage>
	);
};
export default LendBook;
