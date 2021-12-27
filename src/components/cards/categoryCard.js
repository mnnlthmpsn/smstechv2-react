import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {

    return (
        <div className="product product-7 text-center">
            <figure className="product-media">
                <Link to={`${category.attributes.slug}`} state={{ categoryName: category.attributes.title }}>
                    <img src={category.attributes.thumbnail.data.attributes.url} alt={category.attributes.title} className="product-image" />
                </Link>
            </figure>

            <div className="product-body">
                <h3 className="product-title"><a href="product.html">{category.attributes.title}</a></h3>
            </div>
        </div>
    )
}

export default CategoryCard