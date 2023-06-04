import Tablehead from '@/component/Tablehead';
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
  Container,
  Heading,
} from '@chakra-ui/react';

const ProductList = ({ products, onDeleteProduct, onEditProduct }: any) => {
  if (products.length === 0) {
    return (
      <>
        <Heading
          color={'#000'}
          fontSize={'16px'}
          fontWeight={'400'}
          fontFamily={'Comfortaa'}
          textAlign={'center'}
          pt={'2rem'}
        >
          No variant please add new variant
        </Heading>
      </>
    );
  }

  return (
    <>
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

            <Tbody color={'#000'}>
              {products.map((product: any) => (
                <Tr key={product.id}>
                  <Td textAlign={'left'}>{product.image}</Td>
                  <Td textAlign={'right'}>{product.sku}</Td>
                  <Td textAlign={'right'}>{product.colour}</Td>
                  <Td textAlign={'right'}>{product.stock}</Td>
                  <Td textAlign={'right'}>{product.weight}</Td>
                  <Td textAlign={'right'}>{product.status}</Td>
                  <Td textAlign={'right'}>
                    <Button
                      colorScheme="teal"
                      size="sm"
                      mr={'1rem'}
                      onClick={() => onEditProduct(product.id)}
                    >
                      Update
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => onDeleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default ProductList;
