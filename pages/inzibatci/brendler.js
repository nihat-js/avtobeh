// // pages/admin/brands.js
// "use client"
// import { Button, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
// import { useState } from 'react';
// import Layout from '../../components/Layout';

//  const BrandsPage = () => {
//   // const [brands, setBrands] = useState([
//   //   { id: 1, name: 'Toyota' },
//   //   { id: 2, name: 'Honda' },
//   // ]);
//   const brands = [
//     {id : 1 , name : "Toyota"},
//   ]

//   // const handleAddBrand = () => {
//   //   // logic to add a new brand
//   //   const newBrand = prompt('Enter the brand name:');
//   //   if (newBrand) {
//   //     setBrands([...brands, { id: brands.length + 1, name: newBrand }]);
//   //   }
//   // };

//   // const handleEditBrand = (id) => {
//   //   const newName = prompt('Enter new brand name:');
//   //   if (newName) {
//   //     setBrands(brands.map(brand => (brand.id === id ? { ...brand, name: newName } : brand)));
//   //   }
//   // };

//   // const handleDeleteBrand = (id) => {
//   //   if (confirm('Are you sure you want to delete this brand?')) {
//   //     setBrands(brands.filter(brand => brand.id !== id));
//   //   }
//   // };

//   return (
//     <Layout>
//       <Button colorScheme="teal" mb="4" onClick={() => handleAddBrand}>
//         Add Brand
//       </Button>
//       <Table variant="simple">
//         <TableCaption>Brands List</TableCaption>
//         <Thead>
//           <Tr>
//             <Th>Brand Name</Th>
//             <Th>Actions</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {brands.map(brand => (
//             <Tr key={brand.id}>
//               <Td>{brand.name}</Td>
//               <Td>
//                 <Button colorScheme="blue" onClick={() => handleEditBrand(brand.id)} mr="2">
//                   Edit
//                 </Button>
//                 <Button colorScheme="red" onClick={() => handleDeleteBrand(brand.id)}>
//                   Delete
//                 </Button>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Layout>
//   );
// };

