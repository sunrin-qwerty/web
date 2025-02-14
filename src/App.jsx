import { useState } from 'react'
import qwerty from './assets/qwerty.svg'
import curriculum from './assets/curriculum.svg'
import './App.css'

function App() {

  return (
    <>
        <header className="App-header">
            <img src={qwerty} alt="Qwerty" className="header-logo" />
            <ul className={"nav-links"}>
                <li><a href="#">Home</a></li>
                <li><a href="#ca">커리큘럼</a></li>
                <li><a href="#">부원</a></li>
                <li><a href="#">지원하기</a></li>
            </ul>
        </header>

        <section className="home">
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

        <section className="curriculum">

          <div className="container">
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

          <div className='curriculum-container'>
            <img src={curriculum} alt="Qwerty" className="curriculum-logo" />
            <ul className='curriculum-list'>
              <li>HTML, CSS, Java Script</li>
              <li>Node.JSm, React</li>
              <li>Express.js, MySQL</li>
            </ul>
            <a href='#' className='curriculum-btn'>커리큘럼 확인하기</a>
          </div>
        </section>

    </>
  )
}

export default App
