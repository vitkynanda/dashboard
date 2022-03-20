import Layout from "components/Layout";
import ProductsTable from "components/Table/products-table";

export default function Products() {
  return (
    <Layout title="Products">
      <div className="space-y-2">
        <p className="font-semibold text-xl text-gray-600">Products Table</p>
        <ProductsTable />
      </div>
    </Layout>
  );
}
