import { Table, Button, Space, Typography } from 'antd'

const { Title } = Typography

const CarModels = () => {
  // Dummy data for car models
  const models = [
    { key: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { key: 2, brand: 'Ford', model: 'Focus', year: 2021 },
    { key: 3, brand: 'BMW', model: 'X5', year: 2022 },
  ]

  const columns = [
    { title: 'ID', dataIndex: 'key' },
    { title: 'Brand', dataIndex: 'brand' },
    { title: 'Model', dataIndex: 'model' },
    { title: 'Year', dataIndex: 'year' },
    {
      title: 'Action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">Edit</Button>
          <Button type="danger">Delete</Button>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Car Models</Title>
      <Button type="primary" style={{ marginBottom: '20px' }}>
        Add Model
      </Button>
      <Table dataSource={models} columns={columns} />
    </div>
  )
}

export default CarModels
