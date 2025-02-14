import { useState } from 'react'
import qwerty from './assets/qwerty.svg'
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
                <h1>정제되고 체계적으로. <br /> <div className='qwerty-color'>QWERTY</div> 답게.</h1>
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

    </>
  )
}

export default App
