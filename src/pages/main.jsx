import { useState, useEffect } from 'react'
import qwerty from '../assets/qwerty.svg'
import curriculum from '../assets/curriculum.svg'
import './main.css'

import student1 from '../assets/student/김도현.png'
import student2 from '../assets/student/염승엽.png'
import student3 from '../assets/student/쿼티짱.png'
import student4 from '../assets/student/최진호.png'
import student5 from '../assets/student/남윤지.png'
import student6 from '../assets/student/쿼티짱.png'
import student7 from '../assets/student/쿼티짱.png'
import student8 from '../assets/student/쿼티짱.png'
import student9 from '../assets/student/쿼티짱.png'

function main() {
  const [activeSection, setActiveSection] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const sections = ['home', 'curriculum', 'members', 'apply'];
  
  const handleWheel = (e) => {
    if (transitioning) return;
    
    const currentIndex = sections.indexOf(activeSection);
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < sections.length) {
      setTransitioning(true);
      const nextSection = sections[nextIndex];
      setActiveSection(nextSection);
      document.getElementById(nextSection).scrollIntoView({ behavior: 'smooth' });
      
      setTimeout(() => {
        setTransitioning(false);
      }, 1000);
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (transitioning) return;
    
    setTransitioning(true);
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, transitioning]);
  
  return (
    <div className="app-container">
      <header className="App-header">
        <img src={qwerty} alt="Qwerty" className="header-logo" />
        <ul className="nav-links">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#curriculum" 
              onClick={(e) => handleNavClick(e, 'curriculum')}
              className={activeSection === 'curriculum' ? 'active' : ''}
            >
              커리큘럼
            </a>
          </li>
          <li>
            <a 
              href="#members" 
              onClick={(e) => handleNavClick(e, 'members')}
              className={activeSection === 'members' ? 'active' : ''}
            >
              부원
            </a>
          </li>
          <li>
            <a 
              href="#apply" 
              onClick={(e) => handleNavClick(e, 'apply')}
              className={activeSection === 'apply' ? 'active' : ''}
            >
              지원하기
            </a>
          </li>
        </ul>
      </header>

      <section id="home" className={`home section ${activeSection === 'home' ? 'active' : ''}`}>
        <div className="container">
          <h1>정제되고 체계적으로 <br /> <div className='qwerty-color'>QWERTY</div> 답게</h1>
          <p>
            QWERTY 는 선린인터넷 고등학교의 일반 웹 동아리 입니다.<br />
            2023년에 신설 동아리로 보다 정제되고 체계적인<br />
            활동을 목표로 합니다.
          </p>
        </div>

        <div className='logo-container'>
          <img src={qwerty} alt="Qwerty" className="pages-logo" />
          <h1 className='qwerty-color'>QWERTY</h1>
        </div>
      </section>

      <section id="curriculum" className={`curriculum section ${activeSection === 'curriculum' ? 'active' : ''}`}>
        <div className="curriculum-container">
          <h1>풀스택 개발을 위한<br /><div className='qwerty-color'>QWERTY</div>만의 커리큘럼</h1>
          <p>
            QWERTY 에서는 웹 개발에 필요한 <br/>
            다양한 언어와 프로그래밍 기술을 배웁니다.<br/>
            <br/>
            HTML 같은 기초적인 언어부터 Node.js, MySQL, React 등<br/>
            여러 언어와 도구를 사용하여 웹개발자를 목표로 하는<br/>
            친구들에게 도움을 줍니다.
          </p>
        </div>

        <div className='curriculumlist-container'>
          <img src={curriculum} alt="Qwerty" className="curriculum-logo" />
          <ul className='curriculum-list'>
            <li>HTML, CSS, Java Script</li>
            <li>Node.JSm, React</li>
            <li>Express.js, MySQL</li>
          </ul>
          <a href='/curriculum' className='curriculum-btn'>
            커리큘럼 확인하기
          </a>
        </div>
      </section>

      <section id="members" className={`members section ${activeSection === 'members' ? 'active' : ''}`}>
        <h1>부원 소개</h1>
        <h2>QWERTY 6기</h2>
        <div className="members-grid">
          <div className="member">
            <img src={student1} alt="Student 1" />
            <div className="member-info">
              <h2>김도현</h2>
              <p>backend developer</p>
            </div>
          </div>
          <div className="member">
            <img src={student2} alt="Student 2" />
            <div className="member-info">
              <h2>염승엽</h2>
              <p>부장</p>
            </div>
          </div>
          <div className="member">
            <img src={student3} alt="Student 3" />
            <div className="member-info">
              <h2>정여진</h2>
              <p>부부장</p>
            </div>
          </div>
          <div className="member">
            <img src={student4} alt="Student 4" />
            <div className="member-info">
              <h2>최진호</h2>
              <p>buwon</p>
            </div>
          </div>
          <div className="member">
            <img src={student5} alt="Student 5" />
            <div className="member-info">
              <h2>남윤지</h2>
              <p>게임만드는<br/>피곤한 그림쟁이</p>
            </div>
          </div>
          <div className="member">
            <img src={student6} alt="Student 6" />
            <div className="member-info">
              <h2>김동완</h2>
              <p>김동완</p>
            </div>
          </div>
          <div className="member">
            <img src={student7} alt="Student 7" />
            <div className="member-info">
              <h2>이동규</h2>
              <p>이동규</p>
            </div>
          </div>
          <div className="member">
            <img src={student8} alt="Student 8" />
            <div className="member-info">
              <h2>김나우</h2>
              <p>김나우</p>
            </div>
          </div>
          <div className="member">
            <img src={student9} alt="Student 9" />
            <div className="member-info">
              <h2>최진호</h2>
              <p>최진호</p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className={`apply section ${activeSection === 'apply' ? 'active' : ''}`}>
        <h1>문의 및 지원 안내</h1>
        <div className='apply-container'>
          <div className='box'>
            <h2>@sunrin_qwerty</h2>
          </div>
          <div className='box'>
            <h2>?월 ??일 ~ ?월 ??일</h2>
          </div>
        </div>
        <div className='apply-btn'>
          <a href='#apply' onClick={(e) => (e, alert("아직 지원할수 없어요"))}>지원하기</a>
        </div>
      </section>
    </div>
  )
}

export default main