import React, { FC } from 'react'
import { Global } from '@emotion/react'

import { rootStyles, AppContainer } from './App.styles.'

export const App: FC = () => (
    <>
        <Global styles={rootStyles}/>
        <AppContainer>
            <h1>You can place your app here :) Or it will place someone else :(</h1>
        </AppContainer>
    </>
)
