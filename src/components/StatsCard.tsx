import React from 'react'
import { Card, Statistic, Tag, Typography } from 'antd'
import { ArrowDownOutlined, ArrowUpOutlined, DollarOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const { Text } = Typography

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 16px;
`

const TagWrapper = styled.div`
  margin-top: 8px;
`

interface StatsCardProps {
  title: string
  value: number
  prefix: React.ReactNode
  percentChange: number
  format?: string
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, prefix, percentChange, format }) => {
  const isPositive = percentChange > 0

  return (
    <StyledCard>
      <Statistic title={title} value={value} prefix={prefix} precision={2} formatter={(val) => (format === 'currency' ? `$${val}` : val?.toString())} />
      <TagWrapper>
        <Tag color={isPositive ? 'green' : 'red'}>
          {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          <Text>{Math.abs(percentChange)}% from last month</Text>
        </Tag>
      </TagWrapper>
    </StyledCard>
  )
}
