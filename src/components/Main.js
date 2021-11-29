import React from 'react'

const Main = () => {
    return (
        <main data-spy="scroll" className="container" data-target="#navbar-example2" data-offset="0">
            <section className="row pages" id="about">
                <div className="col-md-12">
                    <h2>About us</h2>
                </div>
            </section>

            <section className="row pages" id="services">
                <div className="col-md-12">
                    <h2>Our service</h2>
                </div>
            </section>

            <section className="row pages" id="work">
                <div className="col-md-12">
                    <h2>Our work</h2>
                </div>
            </section>

            <section className="row pages" id="portfolio">
                <div className="col-md-12">
                    <h2>Our portfolio</h2>
                </div>
            </section>

            <section className="row pages" id="contact">
                <div className="col-md-12">
                    <h2>Contact us</h2>
                </div>
            </section>
        </main>
    )
}

export default Main
