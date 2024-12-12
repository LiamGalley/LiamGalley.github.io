import './scss/root.scss'
import NavBar from './components/nav-bar'
import Footer from './components/footer'
import SplashPage from './components/splash-page'
import emailIcon from './assets/svgs/Black_Email_SVG.svg'
import githubIcon from './assets/svgs/Black_Github_SVG.svg'
import linkedinIcon from './assets/svgs/Black_LinkedIn_SVG.svg'
import websiteIcon from './assets/svgs/Black_WWW_SVG.svg'
import AboutMePage from './components/about-me'
import ResumePage from './components/resume'
import ProjectsPage from './components/projects'

// IMAGES ATTRIBUTIONS TO https://www.iconfinder.com/search/icons?family=eon 
const iconList = [
  { svg: githubIcon, link: "https://github.com/LiamGalley", alt: "Github Icon" },
  { svg: linkedinIcon, link: "https://www.linkedin.com/in/liam-galley/", alt: "LinkedIn Icon" },
  { svg: websiteIcon, link: "LiamGalley.github.io", alt: "WWW Icon" },
  { svg: emailIcon, link: "...", alt: "Email Icon" }
]

function App() {
  return (
    <>
      <NavBar title='LG'></NavBar>
      <SplashPage></SplashPage>
      <AboutMePage></AboutMePage>
      <ResumePage></ResumePage>
      <ProjectsPage></ProjectsPage>
      <Footer iconList={iconList}></Footer>
    </>
  )
}

export default App
