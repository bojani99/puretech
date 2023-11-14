import {Row, Col} from 'react-bootstrap'
import products from '../../products.ts'
import React from 'react'

const HomeScreen:React.FC = () => {
  return (
   <>
    <div>Latest Products</div>
<Row>
{products.map((product) => (
<Col sm={12} md={6} lg={4} xl={3}>
    <h3>{product.name}</h3>
</Col>
)
     )}
</Row>
   </>
  )
}

export default HomeScreen