import React from "react";
import {Link} from "react-router-dom"
import { useTranslation } from "react-i18next";


function Product(props) {
  const {t} = useTranslation();
  const { product, showButton } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="pricePorduct">{t('Price')}: {product.price} $ </p>
          {showButton && (
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              {t('Details')}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
