import { 
ChakraProvider,
Box
} from '@chakra-ui/react'
import './App.css'
import Header from './components/General/Header'
import ScrollToTop from './components/General/ScrollToTop'
import { MobileNavigation } from './components/General/Navigation'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import NFT from './pages/NFT'
import Token from './pages/Token'
import Calculator from './pages/Calculator'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/General/Footer'


function App() {

  return (
    <ChakraProvider>
      <Box minH={'100dvh'} minW={'320px'}>
          <ScrollToTop />
          <Header />
          <Box minH={'100dvh'} minW={'320px'} maxW={'100dvw'} mt={'1rem'} mb={'6rem'} p={'1rem'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nft" element={<NFT />} />
              <Route path="/token" element={<Token />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/about" element={<About />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <MobileNavigation />
          <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
