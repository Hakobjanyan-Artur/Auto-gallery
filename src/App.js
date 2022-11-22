import './App.css'
import { Routes, Route} from 'react-router-dom'
import {useState}  from 'react'
import Home from './Components/Home/Home'
import Posts from './Components/Posts/Posts'
import About from './Components/About/About'
import HomeWrapper from './pages/HomeWrapper'
import Chat from './Components/Chat/Chat'
import Error from './pages/Error'
import UniqPost from './Components/UniqPost/UniqPost'

function App() {
  const [styleFix, setStyleFix] = useState(false)
  const [search, setSearch] = useState('')
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'BMW',
      img: `https://cdn.bmwclub.ru/data/photos/l/302/302042-1570176196-bed3a78dba791f7c54109cab3dcdb19f.jpg`,
      about: `The BMW X6 features a unique appearance`,
      aboutAll: `BMW M Performance Parts allow you to give your BMW X6 the maximum amount of motor racing character. Choose from optically enhanced design features for the exterior as well as attractive forged and light alloy wheels. With Original BMW Accessories, you adapt your BMW to your personal wishes: the products are perfectly matched to the BMW X6 in terms of quality, design and performance.`
    },
    {
      id: '2',
      title: 'Mercedes',
      img: `https://roadres.com/gallery/2020/12/foto-s-class-w223_114.jpg`,
      about: `Ultimate luxury for a new era`,
      aboutAll: `Excellent comfort and ultimate luxury – especially in the rear – are the top-most priority. Innovative details and exquisite materials make the Mercedes Maybach S Class a refuge that offers the brand's hallmark experience of luxury.`
    },
    {
      id: '3',
      title: 'AUDI',
      img: `https://a.d-cd.net/ZIAAAgJfzOA-1920.jpg`,
      about: `Premium quattro® Tiptronic®`,
      aboutAll: `Due to ongoing parts shortage issues impacting global production, the availability of some equipment, options or features may be limited. Please contact your local Audi Dealer for more information, and be sure to verify the vehicle you purchase includes all expected features and equipment. Thank you for your patience as we work to navigate these limitations`
    },
    {
      id: '4',
      title: `Porsche`,
      img: `https://uncrate.com/p/2021/11/porsche-panamera-platinum-edition-1.jpg`,
      about: `Dear Family Express`,
      aboutAll: `The Panamera soldiers on into 2022 with more power than ever before and without the outdated 3.0-liter single-turbo V6 dragging the entry-level models down. There's a wide variety of models to choose from in both standard and long-wheelbase format, with gas and hybrid power outputs ranging from 325 horsepower to 552 hp`
    },
    {
      id: '5',
      title: `Wolkswagen`,
      img: `https://natachku.ru/images/Foto1/20/2022_Volkswagen_Touareg_EDITION_20-1.jpg`,
      about: `Space and comfort`,
      aboutAll: `You and your passengers are sure to feel comfortable, as luxurious design meets exceptional functionality in the Touareg. The spacious luggage compartment and electrically operated rear lid ensure maximum flexibility.`
    },
    {
      id: '6',
      title: `TOYOTA`,
      img: `https://nadomkrat.ru/wp-content/uploads/2021/12/6b803aa3ed8f5cf17a55bfb8fbb7d87526ca98ef.jpg`,
      about: `ON-ROAD AND OFF, YOU CAN DRIVE AS YOU WISH`,
      aboutAll: `Pride of the Land with its infinite power, makes its own way wherever the destination is. Land Cruiser, with its rich history and fascinating present, is ready to write new success stories with its high performance and captivating luxury for those seeking excellence.`
    },
    {
      id: '7',
      title: `Lexus`,
      img: `https://auto.ironhorse.ru/wp-content/uploads/2012/02/LX570-2015.jpg`,
      about: `EXPLORE & CUSTOMIZE`,
      aboutAll: `Completely reimagined for 2022, the all-new LX represents the next chapter of flagship luxury. Its exterior, a study in sophistication and strength, exhibits a silhouette that perfectly complements any road, on-road or off`
    },
    {
      id: '8',
      title: 'Cadilac',
      img: `https://www.newestcarsdesign.com/wp-content/uploads/2020/11/pricing-2022-cadillac-escalade-platinum_1.jpg`,
      about: `FEATURES THAT MAKE A MODERN MASTERPIECE`,
      aboutAll: `Exciting, bold, iconic—move through the world in a vehicle befitting your status. In motion and at rest, Escalade demands attention with exceptional physicality and magnificent design. Witness as luxury transforms into legendary.`
    },
    {
      id: '9',
      title: 'Tesla',
      img: `https://wallpapershome.ru/images/pages/pic_h/21790.jpg`,
      about: `Interior of the Future`,
      aboutAll: `A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.`
    },
    {
      id: '10',
      title: 'Nissan',
      img: `https://motor.ru/imgs/2021/09/14/08/4891129/117be3d487bb95160b87bb9f25f21513ee63323a.jpg`,
      about: `Still crazy popular after all these years.`,
      aboutAll: `Revealed last spring, the Special Edition comes with the Nismo-exclusive Stealth Gray exterior paint, new 20-inch Rays forged aluminum wheels with red accents, as well as a new clear-coated carbon fiber hood with exposed carbon weave.`
    },
    {
      id: '11',
      title: 'Ferrari',
      img: `https://www.supercars.net/blog/wp-content/uploads/2020/07/2020-Ferrari-F8-Tributo-011-1600.jpg`,
      about: `The Evolution Of Excellence`,
      aboutAll: `The F8 Tributo says it all in its name; it's a tribute to all the great mid-engined V8 supercars produced by Ferrari over the years, including the F40, F430, and 458. Not only is it stunningly beautiful, but it's powered by the most potent non-special edition V8 engine ever produced by Ferrari, and kicks out a massive 710 horsepower from its 3.9 liters of capacityThe F8 Tributo says it all in its name; it's a tribute to all the great mid-engined V8 supercars produced by Ferrari over the years, including the F40, F430, and 458. Not only is it stunningly beautiful, but it's powered by the most potent non-special edition V8 engine ever produced by Ferrari, and kicks out a massive 710 horsepower from its 3.9 liters of capacity`
    },
    {
      id: '12',
      title: 'Bugatti',
      img: `https://reedr.ru/wp-content/uploads/2019/08/s1200-2.jpg`,
      about: `MODERN COACHBUILDING AT ITS BEST`,
      aboutAll: `Powered by BUGATTI's iconic 8.0-liter W16 engine –with an output of 1,500 PS and 1,600 Nm– the Divo combines incomparable coachbuilding quality with an exhilarant driving experience.`
    },
    {
      id: '13',
      title: 'Lamborghini',
      img: `https://a.d-cd.net/rSAAAgOd1-A-1920.jpg`,
      about: `CHOOSE YOUR URUS`,
      aboutAll: `A declaration of freedom, Urus enables you to discover any terrain, from track to sand, ice, gravel or rocks. It is the absolute all-round super sports car and more. It allows you to explore new paths and new ways to express yourself—to accept challenges confidently and to live life to the fullest. You are not afraid to go far: this is what you aspire to. Unlock any road, unlock your personality.`
    },
    {
      id: '14',
      title: 'Bentley',
      img: `https://carsweek.ru/upload/resize_cache/iblock/15d/870_400_2/15d2917407e5e085e1864a8e8e6d3ce6.jpg`,
      about: `THE BENTAYGA RANGE`,
      aboutAll: `No other SUV can compete with the Bentayga when it comes to craftsmanship, comfort or sheer exhilaration. Available with a 4.0 litre V8 petrol engine, a 6.0 litre W12 petrol engine or a 3.0 litre hybrid, it is a luxury SUV without compare.`
    },
    {
      id: '15',
      title: 'Rolls Royce',
      img: `https://www.morendi.ru/pictures/product/big/18932_big.jpg`,
      about: `SUPREME LIBERTY`,
      aboutAll: `This is freedom absolute. The first all-terrain SUV from Rolls-Royce makes luxury off-road travel a reality for the first time. Pinnacle luxury is now effortless, everywhere.`
    }
  ])
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeWrapper styleFix={styleFix} search={search} setSearch={setSearch}/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About setStyleFix={setStyleFix}/>} />
        <Route path='posts'>
          <Route index element={<Posts posts={posts} search={search} />}/>
          <Route path=':id' element={<UniqPost posts={posts}/>}/>
        </Route>
        <Route path='chat' element={<Chat />} />
        </Route>
        <Route path='*' element={<Error />} />
    </Routes>
    </div>    
  )
}

export default App
