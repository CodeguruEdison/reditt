import styled from '../../utils/styled'

const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props:any) => props.theme.widths.md};
  @media (min-width: ${(props:any) => props.theme.breakpoints.lg}) {
    max-width: ${(props:any) => props.theme.widths.lg};
  }
  @media (min-width: ${(props:any) => props.theme.breakpoints.xl}) {
    max-width: ${(props:any) => props.theme.widths.xl};
  }
`

export default Container