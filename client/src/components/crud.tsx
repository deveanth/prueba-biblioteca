import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import Main from "@pages/index";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

type Prop = {
	create: any;
	findAll: any;
	remove: any;
	update: any;
	message: string;
	icon: string;
};
const Crud = ({ create, findAll, remove, update, message, icon }: Prop) => {
	const [createName, setCreateName] = useState("");
	const [updateName, setUpdateName] = useState("");
	const [list, setList] = useState<any[]>();
	const [errorCreate, setErrorCreate] = useState<any>();
	const [errorUpdate, setErrorUpdate] = useState<any>();

	const listItem = async () => {
		try {
			const res = await findAll();
			const data = await res.json();
			if (data.length > 0) {
				setList(data);
			} else {
				setList(undefined);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		listItem();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleChangeCreateName = (event: ChangeEvent<HTMLInputElement>) => {
		setCreateName(event.target.value);
	};
	const handleChangeUpdateName = (event: ChangeEvent<HTMLInputElement>) => {
		setUpdateName(event.target.value);
	};
	const handleOnClickCreate = async (event: MouseEvent<HTMLButtonElement>) => {
		const res = await create(createName);
		const data = await res.json();
		if (data.error) {
			setErrorCreate(data);
		} else {
			setErrorCreate(undefined);
		}
		setCreateName("");
		setList(undefined);
		await listItem();
	};
	const handleOnClickRemove = async (event: MouseEvent<HTMLButtonElement>) => {
		await remove(Number(event.currentTarget.id));
		setList(undefined);
		await listItem();
	};
	const handleOnClickUpdate = async (event: MouseEvent<HTMLButtonElement>) => {
		const res = await update(Number(event.currentTarget.id), updateName);
		const data = await res.json();
		if (data.error) {
			setErrorUpdate(data);
		} else {
			setErrorUpdate(undefined);
		}
		setUpdateName("");
		setList(undefined);
		await listItem();
	};

	return (
		<Main animation="animate__animated animate__fadeIn animate__faster">
			<Form className="text-center pt-3 mb-3">
				<Row className="justify-content-center">
					<Col sm lg={6}>
						<Form.Control
							value={createName}
							size="sm"
							onChange={handleChangeCreateName}
							type="text"
							placeholder={`Nombre ${message}`}
						/>
						{errorCreate ? (
							<span className="d-block text-danger mt-2">
								{errorCreate.error}
							</span>
						) : null}
						<span
							onClick={handleOnClickCreate}
							style={{ cursor: "pointer" }}
							className="badge bg-dark mt-2"
						>
							{`Crear ${message}`}
						</span>
					</Col>
				</Row>
			</Form>
			<Form>
				<Row className="justify-content-center">
					<Col sm lg={6}>
						<Form.Label>{`Cambiar nombre ${message} presionando actualizar`}</Form.Label>
						<Form.Control
							className="fs-5 my-3"
							value={updateName}
							onChange={handleChangeUpdateName}
							size="sm"
							type="text"
							placeholder={`nombre de ${message} actualizado`}
						/>
						{errorUpdate && (
							<span className="d-block text-danger mt-2 fs-5">
								{errorUpdate.error}
							</span>
						)}
					</Col>
				</Row>
			</Form>
			<Container className="text-center">
				{list ? (
					<Table
						striped
						bordered
						hover
						size="sm"
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
							{list.map((index) => (
								<tr key={index.id}>
									<td>
										{" "}
										<i className={`text-light bi ${icon}`}></i>
									</td>

									<td>{index.id}</td>
									<td>{index.name}</td>
									<td>
										<span
											id={index.id.toString()}
											onClick={handleOnClickRemove}
											style={{ cursor: "pointer" }}
											className="badge bg-danger"
										>
											Eliminar
										</span>
									</td>
									<td>
										<span
											id={index.id.toString()}
											onClick={handleOnClickUpdate}
											style={{ cursor: "pointer" }}
											className="badge bg-success"
										>
											Actualizar
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<span className="d-block m-5 fs-3 text-dark fw-bold animate__animated animate__heartBeat animate__slow animate__infinite">
						{`No existen ${message}s registrados`}
					</span>
				)}
			</Container>
		</Main>
	);
};

export default Crud;
