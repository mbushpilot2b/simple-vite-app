import { useRouteError, Link } from 'react-router-dom'
import { theme, Button, Result as _Result, Space, Typography } from 'antd'
import styled from 'styled-components'
import { Routes } from '../../Routes'
import { ResultStatusType } from 'antd/es/result'

const { Title } = Typography

const Result = styled(_Result)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & .ant-result-image {
    margin-bottom: 0;
    margin 0;
  }
`

interface ErrorProps {
  statusText?: string
  message?: string
  status?: ResultStatusType
}

export const ErrorBoundary = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const error = useRouteError() as ErrorProps
  console.error(error)

  const Extra = (
    <Space align="center" direction="vertical" size="large">
      <Title level={5}>{error?.statusText ?? error?.message ?? 'Unknown Error'}</Title>
      <Link to={Routes.ROOT}>
        <Button type="primary">Back Home</Button>
      </Link>
    </Space>
  )

  return <Result status={error.status ?? '500'} title={error.status ?? '500'} subTitle="Sorry, something went wrong." extra={Extra} style={{ background: colorBgContainer, height: '100vh' }} />
}
