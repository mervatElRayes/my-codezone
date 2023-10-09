import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from "./Product"
import { useTranslation } from "react-i18next";
function ProductDetails() {
  const {t} = useTranslation();
  const api_url = "https://fakestoreapi.com/products"
  const [product, setProduct] = useState({})
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
    .then((res) => res.json())
    .then((product) => setProduct(product))
  }, [])
  return (
  <Product product={product} showButton={false} />
  )
}

export default ProductDetails