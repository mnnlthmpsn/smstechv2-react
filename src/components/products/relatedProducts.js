import ItemCard2 from "../cards/itemCard2"

const RelatedProducts = () => {
    return (
        <div className="container trending">

            <div className="row">
                <div className="col-6 col-md-3">
                    <ItemCard2 />
                </div>
                <div className="col-6 col-md-3">
                    <ItemCard2 />
                </div>
                <div className="col-6 col-md-3">
                    <ItemCard2 />
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts