import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
// import Button from '../../component/Button/Button'
import Card from '../../component/Card/Card'
import TomeJarry from "./tom-and-jerry.png"
import Doremon from "./doremon.jpg"
export default function Home(){
    return(
        <>
        <Navbar/>
        <h1 className='heading'>This is the Home Page</h1>
        <br/>
        <div className='CardCaontainer'>
        <Card  imgUrl={TomeJarry} name={'Tome & Jarry'} />
        <Card  imgUrl={Doremon} name={'doremon'}/>
        </div>
        </>
    )

}