import { ReactNode } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import AsideBar from "@components/aside-bar";
import { useRouter } from "next/router";

type Props = {
	children?: ReactNode;
	title?: string;
	menuItems: string[];
};

const Layout = ({ children, title, menuItems }: Props) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Container className="vh-100 py-3">
				<Row className="h-100">
					<Col sm xl="3" className="px-0">
						<AsideBar menuItems={menuItems} />
					</Col>
					<Col className="mh-100 overflow-auto">{children}</Col>
				</Row>
			</Container>
		</>
	);
};

export default Layout;
