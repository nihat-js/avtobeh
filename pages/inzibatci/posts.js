import { Table, Button, Space, Typography } from 'antd'

const { Title } = Typography

const UserPosts = () => {
  const posts = [
    { key: 1, user: 'John', title: 'New Car Review', date: '2024-12-01' },
    { key: 2, user: 'Alice', title: 'Best Car for Families', date: '2024-11-29' },
  ]

  const columns = [
    { title: 'ID', dataIndex: 'key' },
    { title: 'User', dataIndex: 'user' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Date', dataIndex: 'date' },
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
      <Title level={3}>User Posts</Title>
      <Button type="primary" style={{ marginBottom: '20px' }}>
        Create Post
      </Button>
      <Table dataSource={posts} columns={columns} />
    </div>
  )
}

export default UserPosts
