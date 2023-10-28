import ProductsCards from "./ProductsCards";


const Products = () => {

    const products = [
        {
            id: 1,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
        {
            id: 2,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
        {
            id: 3,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
        {
            id: 4,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
        {
            id: 5,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
        {
            id: 6,
            name: 'Shuvo Deb',
            ownerImage: 'https://i.ibb.co/HzhTzkr/Photo-Room-20230619-161249.png',
            productImage: 'https://i.ibb.co/C69SsfL/product-08.webp',
            title: 'I will translate english to japanese or japanese to',
            details: 'I will translate english to japanese or japanese to',
            price: '20'
        },
    ]

    return (
        <div className="py-10">
            <div className="container mx-auto md:px-10 px-5">
                <h1 className="text-3xl text-center font-bold">
                    Explore our <span className="text-[#9264E2]">Products</span>
                </h1>

                <div className="grid md:grid-cols-4 gap-5 mt-10">
                    {
                        products?.map(product => <ProductsCards
                            key={product?.id}
                            product={product}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;