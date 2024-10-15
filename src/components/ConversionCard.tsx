import React from 'react'
import { Card, Progress, Typography } from 'antd'
import styled from 'styled-components'

const { Title, Text } = Typography

const StyledCard = styled(Card)`
  width: 100%;
`

const ProgressWrapper = styled.div`
  margin-bottom: 16px;
`

interface ConversionStep {
  name: string
  percent: number
}

interface ConversionCardProps {
  visitors: number
  steps: ConversionStep[]
}

export const ConversionCard: React.FC<ConversionCardProps> = ({ visitors, steps }) => {
  return (
    <StyledCard>
      <Title level={4}>Visitor Conversion</Title>
      <Text>Total Visitors: {visitors.toLocaleString()}</Text>
      {steps.map((step, index) => (
        <ProgressWrapper key={index}>
          <Text>{step.name}</Text>
          <Progress percent={step.percent} size="small" />
        </ProgressWrapper>
      ))}
    </StyledCard>
  )
}
