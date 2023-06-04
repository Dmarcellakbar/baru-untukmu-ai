import { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Tbody,
  Td,
  Tr,
  Input,
  FormControl,
  FormLabel,
  Select,
  useDisclosure,
  Thead,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import Tablehead from '@/component/Tablehead';

const ProductForm = ({
  onAddProduct,
  selectedProduct,
  onUpdateProduct,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [image, setImage] = useState('');
  const [sku, setSKU] = useState('');
  const [colour, setColour] = useState('');
  const [stock, setStock] = useState('');
  const [weight, setWeight] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct.image);
      setSKU(selectedProduct.sku);
      setColour(selectedProduct.colour);
      setStock(selectedProduct.stock);
      setWeight(selectedProduct.weight);
      setStatus(selectedProduct.status);
    }
  }, [selectedProduct]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newProduct = {
      id: selectedProduct ? selectedProduct.id : Date.now(),
      image,
      sku,
      colour,
      stock,
      weight,
      status,
    };
    if (selectedProduct) {
      onUpdateProduct(newProduct);
    } else {
      onAddProduct(newProduct);
    }
    setImage('');
    setSKU('');
    setColour('');
    setStock('');
    setWeight('');
    setStatus('');
  };

  return (
    <div>
      <Container maxW={'80%'} pt={'1rem'} pb={'1rem'} w={'auto'}>
        <TableContainer
          bgColor={'#F2DDC9'}
          borderTopRadius="lg"
          w={{ base: 'full', md: 'full', lg: 'full' }}
        >
          <Table size="sm">
            <Tablehead
              child1={'Image'}
              child2={'SKU'}
              child3={'Colour'}
              child4={'Stock'}
              child5={'Weight (in gram)'}
              child6={'Status'}
              child7={'Action'}
            />

            <Tbody>
              <Tr>
                <Td>
                  <input
                    type="file"
                    onChange={(e: any) => setImage(e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="SK-001"
                    value={sku}
                    onChange={(e: any) => setSKU(e.target.value)}
                  />
                </Td>
                <Td>
                  <Select
                    placeholder="Select Colour"
                    value={colour}
                    onChange={(e: any) => setColour(e.target.value)}
                  >
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Gray">Gray</option>
                    <option value="Navy">Navy</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                  </Select>
                </Td>
                <Td>
                  <Input
                    placeholder="input stock"
                    value={stock}
                    onChange={(e: any) => setStock(e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="input weight"
                    value={weight}
                    onChange={(e: any) => setWeight(e.target.value)}
                  />
                </Td>
                <Td>
                  <Select
                    placeholder="Select Status"
                    value={status}
                    onChange={(e: any) => setStatus(e.target.value)}
                  >
                    <option value="Enable">Enable</option>
                    <option value="Disable">Disable</option>
                  </Select>
                </Td>
                <Td>
                  <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                    {selectedProduct ? 'Update Product' : 'Add Product'}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ProductForm;
