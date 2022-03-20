import Layout from "components/Layout";
import UsersTable from "components/Table/users-table";
// import UsersTable from "components/UsersTable/users-table";

export default function Users() {
  return (
    <Layout title="Users">
      <div>Hello Users</div>
      <UsersTable />
    </Layout>
  );
}
