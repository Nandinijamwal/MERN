const ImageProduct=(props)=>{
    const {title,products}=props;
    return (
        <div className="Prod-add">
            <h4>{title}</h4>
            <div className="container1-parent">
            {products.map((element)=>{
                return(
                    <div className="products-con">
                        <h4>{element.title}</h4>
                        <img src={element.imgsrc}
                />
            </div>
                )
            })}
            </div>
        </div>
    )
}

export default ImageProduct