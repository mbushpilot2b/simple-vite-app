import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { StatsCard } from '../../components/StatsCard'
import { ConversionCard } from '../../components/ConversionCard'

const DashboardContainer = styled.div`
  padding: 24px;
  min-height: 100vh;
`

const StyledRow = styled(Row)`
  margin-bottom: 24px;
`

export function DashboardPage() {
  // Dummy data
  const revenue = 152350.75
  const revenueChange = 12.5
  const orders = 1234
  const ordersChange = -5.2
  const visitors = 50000
  const conversionSteps = [
    { name: 'View Product', percent: 65 },
    { name: 'Add to Cart', percent: 40 },
    { name: 'Place Order', percent: 25 },
    { name: 'Repeat Purchase', percent: 10 },
  ]

  return (
    <DashboardContainer>
      <StyledRow gutter={16}>
        <Col xs={24} sm={12}>
          <StatsCard title="Revenue" value={revenue} prefix={<DollarOutlined />} percentChange={revenueChange} format="currency" />
        </Col>
        <Col xs={24} sm={12}>
          <StatsCard title="Orders" value={orders} prefix={<ShoppingCartOutlined />} percentChange={ordersChange} />
        </Col>
      </StyledRow>
      <Row>
        <Col span={24}>
          <ConversionCard visitors={visitors} steps={conversionSteps} />
        </Col>
      </Row>
    </DashboardContainer>
  )
}
