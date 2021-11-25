import React , {useEffect} from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import '../prev-4/prev-4.css'
import hoverimg from '../prev-4/hoverimg.png'

const Prev4 = () => {
    useEffect(() => {
        aos.init({ duration: 3000 });
        
    }, [])
    return (
        <div>
            <div className="container-fluid container-4">
                <div className="row">
                    <div className="col-12 text-prev-4 d-flex align-items-center justify-content-center flex-column">
                        <p data-aos="fade-down" className='prev-4-1'>“We create fortified, interactive blueprints that impact businesses”</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prev4
