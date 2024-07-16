import React from 'react'
import Row from './components/Grid/Row'
import Col from './components/Grid/Col'
import './styles/app.scss'
import Button from './components/Button'

const App: React.FC = () => {
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold mb-6'>Qui Showcase</h1>

      <Row gutter={[20, 20]}>
        <Col span={{ xs: 24 }} className='bg-blue-500 text-white p-4'>
          100%
        </Col>
      </Row>

      <Row gutter={[20, 20]} className='my-4'>
        <Col span={{ xs: 6 }} className='bg-blue-500 text-white p-4'>
          25%
        </Col>
        <Col span={{ xs: 6 }} className='bg-blue-200 p-4'>
          25%
        </Col>
        <Col span={{ xs: 6 }} className='bg-blue-500 text-white p-4'>
          25%
        </Col>
        <Col span={{ xs: 6 }} className='bg-blue-200 p-4'>
          25%
        </Col>
      </Row>

      <Row gutter={[20, 20]} className='my-4'>
        <Col span={{ xs: 8 }} className='bg-blue-500 text-white p-4'>
          33.33%
        </Col>
        <Col span={{ xs: 8 }} className='bg-blue-200 p-4'>
          33.33%
        </Col>
        <Col span={{ xs: 8 }} className='bg-blue-500 text-white p-4'>
          33.33%
        </Col>
      </Row>

      <Row gutter={[20, 20]} className='my-4'>
        <Col span={{ xs: 12 }} className='bg-blue-500 text-white p-4'>
          50%
        </Col>
        <Col span={{ xs: 12 }} className='bg-blue-200 p-4'>
          50%
        </Col>
      </Row>

      <Row gutter={[20, 20]} className='my-4'>
        <Col span={{ xs: 16 }} className='bg-blue-500 text-white p-4'>
          66.66%
        </Col>
        <Col span={{ xs: 8 }} className='bg-blue-200 p-4'>
          33.33%
        </Col>
      </Row>

      <h2 className='text-xl font-bold mt-8 mb-6'>Responsive</h2>
      <Row>
        <Col
          span={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          className='bg-blue-500 text-white p-4'
        >
          25%
        </Col>
        <Col
          span={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          className='bg-blue-200 p-4'
        >
          25%
        </Col>
        <Col
          span={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          className='bg-blue-500 text-white p-4'
        >
          25%
        </Col>
        <Col
          span={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          className='bg-blue-200 p-4'
        >
          25%
        </Col>
      </Row>

      <h2 className='text-xl font-bold mt-8 mb-6'>Button</h2>
      <Button
        type='primary'
        onClick={() => {
          alert('Button clicked')
        }}
      >
        คลิกที่นี่
      </Button>
    </div>
  )
}

export default App
