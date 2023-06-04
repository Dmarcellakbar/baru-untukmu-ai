import { useState, useEffect } from 'react';
import ProductForm from './FormProduct';
import ProductList from './ListProduct';
import { Box, Button, Heading, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import bg from '../../assets/image/bghero.webp';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct: any) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleDeleteProduct = (productId: any) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleEditProduct = (productId: any) => {
    const productToEdit = products.find((product) => product.id === productId);
    setSelectedProduct(productToEdit);
  };

  const handleUpdateProduct = (updatedProduct: { id: any }) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        }
        return product;
      });
      return updatedProducts;
    });
    setSelectedProduct(null);
  };

  return (
    <div>
      <section
        style={{
          backgroundImage: `url('${bg.src}')`,
          width: '100vw',
          height: '100vh',
          maxWidth: '100%',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <Heading
          color={'#000'}
          fontSize={{ base: '18px', md: '18px', lg: '24px' }}
          fontWeight={'400'}
          fontFamily={'Comfortaa'}
          textAlign={'center'}
          pt={'2rem'}
        >
          Variant Detail
        </Heading>

        <ProductForm
          onAddProduct={handleAddProduct}
          selectedProduct={selectedProduct}
          onUpdateProduct={handleUpdateProduct}
        />
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      </section>
    </div>
  );
};

export default HomePage;
