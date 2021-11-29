import React from 'react'
import ReactTyped from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h1>Welcome to Our Website</h1>
                <ReactTyped
                    className="typed-text"
                    strings={[
                        "Jiunge nasi kuandaa taifa bora",
                        "Tambua haki yako na kuilinda",
                        "Saidia wanao kuzunguka kupitia sisi",
                        "Jifunze sheria kutoka kwa wataaram",
                        "Ni wajibu wako kujua sheria"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="" className="btn-main-info">Contact us</a>
            </div>
        </div>
    )
}

export default Header
