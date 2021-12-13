import Link from "next/link";

type Props = {
	menuItems: string[];
};

const AsideBar = ({ menuItems }: Props) => {
	return (
		<aside className="h-100 bg-primary rounded-3">
			<span className="d-block text-center py-3 fs-2 text-light">
				<i className="bi bi-book-half"></i> Test Library
			</span>
			<nav className="container">
				{menuItems.map((item) => (
					<Link key={item} href={`/${item.replace(" ", "-").toLowerCase()}`}>
						<a className="d-block pt-5 text-light fs-4 text-decoration-none">
							{item}
						</a>
					</Link>
				))}
			</nav>
			<span className="fixed-bottom fs-3">Deveant</span>
		</aside>
	);
};

export default AsideBar;
