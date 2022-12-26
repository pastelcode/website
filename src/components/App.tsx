import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

import HomePage from '../pages/HomePage'
import Footer from './footer/Footer'
import NavBar from './navbar/NavBar'

import ContactPage from '../pages/ContactPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProjectsPage from '../pages/ProjectsPage'
import customizedTheme from '../theme'

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

export default App
