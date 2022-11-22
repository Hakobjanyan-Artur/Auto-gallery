import './Home.css'
import { useState } from 'react'

function Home () {
    const [homeImg, setHomeImg] = useState([
        {
            id: '1',
            img: 'https://a.d-cd.net/foAAAgLHYuA-1920.jpg'
        },
        {
            id: '2',
            img: 'https://i.pinimg.com/originals/7a/07/54/7a07549a028a4e05af70a1ec707a7440.jpg'
        },
        {
            id: '3',
            img: 'https://i.ytimg.com/vi/3qbumJccoDM/maxresdefault.jpg'
        },
        {
            id: '4',
            img: 'http://www.ativusdesign.com/resources/sites/6/6.974.01.jpg'
        },
        {
            id: '5',
            img: 'https://rusinfo.info/wp-content/uploads/2/0/2/202edbcb677090ae06d6e5396e07702e.jpg'
        },
        {
            id: '6',
            img: 'http://www.canadianautoreview.ca/images/car_photos/2016-cadillac-escalade-platinum/normal/escalade-platinum-fs3.jpg'
        }
    ])
    return (
        <>
        <div className="homeHeader">
            <h1>Home</h1>
            <hr />
        </div>
        <div className="homeSection">
                    <p className='sectionTitle'>this is an introductory site for viewing and getting information about different cars</p>
                <div className="container">
            <div className="carImg">
                    {homeImg.map(el => <div className='divImg' key={el.id}><img src={el.img} alt="" /></div>)}
            </div>
                </div>
        </div>
        
        </>
    )
}

export default Home