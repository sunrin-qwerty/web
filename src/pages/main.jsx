import { useState, useEffect } from 'react'
import qwerty from '../assets/qwerty.svg'
import curriculum from '../assets/curriculum.svg'
import './main.css'
import arrow from '../assets/arrow-right.svg'
import studentList from '../assets/student.json'

function Main() {
  const [activeSection, setActiveSection] = useState('home')
  const [transitioning, setTransitioning] = useState(false)
  const [students, setStudents] = useState([])

  const sections = ['home', 'curriculum', 'members', 'apply']

  useEffect(() => {
    setStudents(studentList)
  }, [])

  const handleWheel = (e) => {
    if (transitioning) return

    const currentIndex = sections.indexOf(activeSection)
    const direction = e.deltaY > 0 ? 1 : -1
    const nextIndex = currentIndex + direction

    if (nextIndex >= 0 && nextIndex < sections.length) {
      setTransitioning(true)
      const nextSection = sections[nextIndex]
      setActiveSection(nextSection)
      document.getElementById(nextSection).scrollIntoView({ behavior: 'smooth' })

      setTimeout(() => {
        setTransitioning(false)
      }, 1000)
    }
  }

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    if (transitioning) return

    setTransitioning(true)
    setActiveSection(sectionId)
    const sectionElement = document.getElementById(sectionId)
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }

    setTimeout(() => {
      setTransitioning(false)
    }, 1000)
  }

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [activeSection, transitioning])

  return (
    <div className="app-container">
      <header className="App-header">
        <img src={qwerty} alt="Qwerty" className="header-logo" />
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className={activeSection === section ? 'active' : ''}
              >
                {section === 'home' ? 'Home' : section === 'curriculum' ? '커리큘럼' : section === 'members' ? '부원' : '지원하기'}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section id="home" className={`home section ${activeSection === 'home' ? 'active' : ''}`}>
        <div className="container">
          <h1>
            정제되고 체계적으로 <br /> <div className="qwerty-color">QWERTY</div> 답게
          </h1>
          <p>
            QWERTY 는 선린인터넷 고등학교의 일반 웹 동아리 입니다.<br />
            2023년에 신설 동아리로 보다 정제되고 체계적인<br />
            활동을 목표로 합니다.
          </p>
        </div>

        <div className="logo-container">
          <img src={qwerty} alt="Qwerty" className="pages-logo" />
          <h1 className="qwerty-color">QWERTY</h1>
        </div>
      </section>

      <section id="curriculum" className={`curriculum section ${activeSection === 'curriculum' ? 'active' : ''}`}>
        <div className="curriculum-container">
          <h1>
            풀스택 개발을 위한<br />
            <div className="qwerty-color">QWERTY</div>만의 커리큘럼
          </h1>
          <p>
            QWERTY 에서는 웹 개발에 필요한 <br />
            다양한 언어와 프로그래밍 기술을 배웁니다.<br />
            <br />
            HTML 같은 기초적인 언어부터 Node.js, MySQL, React 등<br />
            여러 언어와 도구를 사용하여 웹개발자를 목표로 하는<br />
            친구들에게 도움을 줍니다.
          </p>
        </div>

        <div className="curriculumlist-container">
          <img src={curriculum} alt="Qwerty" className="curriculum-logo" />
          <ul className="curriculum-list">
            <li>
              <img src={arrow} alt="Arrow" />
              HTML, CSS, JS
            </li>
            <li>
              <img src={arrow} alt="Arrow" />
              Node.JS, React
            </li>
            <li>
              <img src={arrow} alt="Arrow" />
              Express.js, MySQL
            </li>
          </ul>
          <a href="/curriculum" className="curriculum-btn">
            커리큘럼 확인하기
          </a>
        </div>
      </section>

      <section id="members" className={`members section ${activeSection === 'members' ? 'active' : ''}`}>
        <h1>부원 소개</h1>
        <h2>QWERTY 6기</h2>
        <div className="members-grid">
          {students.map((student, index) => (
            <div className="member" key={index}>
              <img src={student.image} alt={student.name} />
              <div className="member-info">
                <h2>{student.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: student.role }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className={`apply section ${activeSection === 'apply' ? 'active' : ''}`}>
        <h1>문의 및 지원 안내</h1>
        <div className="apply-container">
          <div className="box">
            <h2>@sunrin_qwerty</h2>
          </div>
          <div className="box">
            <h2>?월 ??일 ~ ?월 ??일</h2>
          </div>
        </div>
        <div className="apply-btn">
          <a href="#apply" onClick={(e) => (e, alert('아직 지원할수 없어요'))}>
            지원하기
          </a>
        </div>
        <footer>
          <p>©2025 OpenAI, Claude</p>
        </footer>
      </section>
    </div>
  )
}

export default Main
