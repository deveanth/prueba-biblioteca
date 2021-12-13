import { ReactNode, useEffect } from "react";
import { Container } from "react-bootstrap";
import Layout from "@components/layout";
import { useRouter } from "next/router";

type Props = {
	animation: string;
	children?: ReactNode;
};
const Index = ({ animation, children }: Props) => {
	const router = useRouter();
	useEffect(() => {
		if (router.asPath === "/") router.replace("/prestar-libro");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const menuItem = [
		"Prestar libro",
		"Devolver libro",
		"CRUD usuarios",
		"CRUD libros",
		"Listar prestamos",
	];
	return (
		<Layout title="Library Test" menuItems={menuItem}>
			<Container className={`h-100 bg-light ${animation}`}>
				{children}
			</Container>
		</Layout>
	);
};

export default Index;
