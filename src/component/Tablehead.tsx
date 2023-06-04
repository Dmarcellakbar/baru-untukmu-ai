import { Tr, Text, Th, Thead } from '@chakra-ui/react';
import React from 'react';

export default function TableAsset({
  child1,
  child2,
  child3,
  child4,
  child5,
  child6,
  child7,
}: any) {
  return (
    <Thead bgColor={'#F2DDC9'}>
      <Tr>
        <Th>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child1}
          </Text>
        </Th>
        <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child2}
          </Text>
        </Th>
        <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child3}
          </Text>
        </Th>
        <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child4}
          </Text>
        </Th>
        <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child5}
          </Text>
        </Th>
        <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child6}
          </Text>
        </Th>
        <Th textAlign={'center'}>
          <Text fontSize={'14px'} fontWeight={'700'} color={'teal'}>
            {child7}
          </Text>
        </Th>
      </Tr>
    </Thead>
  );
}
