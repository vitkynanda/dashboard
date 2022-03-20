import Layout from "components/Layout";
import UsersTable from "components/Table/users-table";
// import UsersTable from "components/UsersTable/users-table";

export default function Users() {
  return (
    <Layout title="Users">
      <div className="space-y-2">
        <p className="font-semibold text-xl text-gray-600">Users Table</p>
        <UsersTable />
      </div>
    </Layout>
  );
}
