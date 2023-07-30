import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const rootStyles = css`
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      box-sizing: border-box;
      background-color: aliceblue;
    }
`

export const AppContainer = styled.div({
    width: '100%',
    height: '100%',
})