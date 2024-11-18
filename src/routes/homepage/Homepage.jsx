import React from 'react'
import './homepage.scss'
import Searchbar from '../../components/searchBar/Searchbar'
const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='textContainer'>
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consectetur dolore non veritatis quibusdam molestias enim unde blanditiis optio? Quo minus ratione esse ut vero voluptas. Optio voluptate ullam libero?
                    </p>
                    <Searchbar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgContainer'>
                <img src="/bg.png" alt="" />
            </div>
        </div>

    )
}

export default Homepage