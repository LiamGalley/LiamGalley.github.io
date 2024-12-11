import './scss/root/root.scss'
import NavBar from './components/nav-bar'
import Footer from './components/footer'
import emailIcon from './assets/Black_Email_SVG.svg'
import githubIcon from './assets/Black_Github_SVG.svg'
import linkedinIcon from './assets/Black_LinkedIn_SVG.svg'
import websiteIcon from './assets/Black_WWW_SVG.svg'

// IMAGES ATTRIBUTIONS TO https://www.iconfinder.com/search/icons?family=eon 
const iconList = [
  { svg: githubIcon, link: "https://github.com/LiamGalley", alt: "Github Icon" },
  { svg: linkedinIcon, link: "https://www.linkedin.com/in/liam-galley/", alt: "LinkedIn Icon" },
  { svg: websiteIcon, link: "...", alt: "WWW Icon" },
  { svg: emailIcon, link: "...", alt: "Email Icon" }
]

function App() {
  return (
    <>
      <NavBar title='LG'></NavBar>
      <Footer iconList={iconList}></Footer>
    </>
  )
}

export default App
