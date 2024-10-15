import styled from 'styled-components'

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
`

export function DashboardPage() {
  return (
    <CenteredContainer>
      <h1>Dashboard</h1>
    </CenteredContainer>
  )
}
