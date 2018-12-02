import React, { useState } from 'react'
import { Footer } from '../molcules/Footer'
import { Header } from '../molcules/Header'
import { Counter } from '../organisms/Counter'

export const App = () => (
  <React.Fragment>
    <Header />
    <Counter />
    <Footer />
  </React.Fragment>
)
