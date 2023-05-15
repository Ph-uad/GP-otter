import React from 'react'
import { Navbar,  Brand, CTA } from './components'
import { Blog,Header, Feature, Footer, Possibility, WhatGp3 } from './container'

const App = () => {
    return (
        <div className='App'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGp3 />
            <Feature />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}

export default App