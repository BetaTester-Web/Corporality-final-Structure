import React , {useEffect} from 'react'
import '../LogoText/LogoTest.css'
import aos from 'aos'

const LogoText = () => {
    useEffect(() => {
        aos.init({ duration: 3000});

    }, [])
    return (
        <div>
            <div data-aos="fade-down" className="container text-in-container-icons">
                <div className="row">
                    <p className="Partner-program-1-text">Our powerful partner ecosystem</p>
                </div>
                <div className="row">
                    <p className="Partner-program-2-text">Our sales and marketing network capabilities accelerate product strategies to achieve faster go-to-market, greater visibility
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LogoText
