import Crud from "@components/crud";
import {
	createUser,
	findAllUser,
	removeUser,
	updateUser,
} from "@helpers/user-api";

const User = () => {
	return (
		<Crud
			create={createUser}
			findAll={findAllUser}
			remove={removeUser}
			update={updateUser}
			message="usuario"
			icon="bi-person-circle"
		></Crud>
	);
};

export default User;
