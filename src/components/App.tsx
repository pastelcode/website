import {
  extendTheme,
  withDefaultColorScheme,
  ChakraProvider,
} from '@chakra-ui/react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'

import customizedTheme from '../theme'
import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectsPage from '../pages/ProjectsPage'

const theme = extendTheme(
  customizedTheme,
  withDefaultColorScheme({ colorScheme: 'brand' })
)

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
