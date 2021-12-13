import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import BookExchange_ from "./index";
import { BookExchange } from "@types";
import { FindAllBookExchange } from "@helpers/book-exchange-api";

const ListarPrestamos = () => {
	const [booksExchange, setBookExchange] = useState<BookExchange[]>();

	const formatDate = (_date: string) => {
		const time = Date.parse(_date);
		const date = new Date(time);
		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	};

	const listBookExchange = async () => {
		try {
			const res = await FindAllBookExchange();
			const data = await res.json();
			if (data.length > 0) {
				setBookExchange(data);
			} else {
				setBookExchange(undefined);
			}
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		listBookExchange();
	}, []);

	return (
		<BookExchange_ animation="animate__animated animate__fadeIn animate__faster">
			<Container className="text-center">
				<span className="fs-3 text-dark">Lista de libros prestados</span>
				{booksExchange ? (
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
								<th>Fecha</th>
								<th>Nombre usuario</th>
								<th>Nombre libro</th>
								<th>Tipo de préstamo</th>
							</tr>
						</thead>
						<tbody>
							{booksExchange.map((bookExchange) => (
								<tr key={bookExchange.id}>
									<td>
										{" "}
										<i className="bi bi-arrow-left-right text-light"></i>
									</td>
									<td>{bookExchange.id}</td>
									<td>{formatDate(bookExchange.date)}</td>
									<td>{bookExchange.nameUser}</td>
									<td>{bookExchange.nameBook}</td>
									<td>{bookExchange.typeBookExchange}</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<span className="d-block m-5 fs-3 text-dark fw-bold animate__animated animate__heartBeat animate__slow animate__infinite">
						No existe prestamos registrados
					</span>
				)}
			</Container>
		</BookExchange_>
	);
};

export default ListarPrestamos;
