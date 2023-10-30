import { useEffect, useState } from "react";
import { baseUrl } from "../../../URL/URL";
import ProductsCards from "./ProductsCards";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}/all-products`)
            .then(res => res.json())
            .then(result => {
                setProducts(result.products)
            })
    }, [])

    const searchHandler = (e) => {
        e.preventDefault();
        const inputValue = e.target.searchInput.value;
        setSearchValue(inputValue.length > 0)

        fetch(`http://localhost:3001/search-product?search=${inputValue}`)
            .then(res => res.json())
            .then(data => setSearchResult(data.result))
    }

    return (
        <div className="py-10">
            <div className="container mx-auto md:px-10 px-5">
            <h1 className="text-3xl text-center font-bold mt-5">
                Add <span className="text-[#9264E2]">Products</span>
            </h1>

                <div >
                    <form onSubmit={searchHandler} className="mx-auto text-center mt-5 w-5/12 flex gap-5">
                        <input name="searchInput" className="border outline-none px-2 py-2 w-full" placeholder="Search your favorite product" type="text" />
                        <button className="bg-[#3577F0] text-[#fff] px-5">Search</button>
                    </form>
                </div>

                {
                    searchValue === true ?
                        <div className="grid md:grid-cols-4 gap-5 mt-10">
                            {
                                searchResult.length === 0 ?
                                    <h2 className="text-center mt-5 text-2xl font-semibold">Search Result Not Found</h2>
                                    :
                                    searchResult?.map(product => <ProductsCards
                                        key={product?.id}
                                        product={product}
                                    />)
                            }
                        </div>
                        :
                        products?.length === 0 ?
                            <h2 className="text-center mt-5 text-2xl font-semibold">No products available</h2>
                            :
                            <div className="grid md:grid-cols-4 gap-5 mt-10">
                                {
                                    products?.map(product => <ProductsCards
                                        key={product?.id}
                                        product={product}
                                    />)
                                }
                            </div>
                }
            </div>
        </div>
    );
};

export default Products;