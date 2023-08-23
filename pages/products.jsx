import Layout from "@/components/Layout";
import Link from 'next/link';

const Products = () => {
    return (
        <Layout>
            <Link
                href={'/products/new'}
                className="bg-green-700 text-white rounded-md py-1 px-2"
            >
                Add new products
            </Link>
        </Layout>
    )
}

export default Products;