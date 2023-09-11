import Navbar from '../../component/Navbar/Navbar'
import Button from '../../component/Button/Button'
import { AboutCard } from '../../component/Card/Card'
import Doremon from './doraemon.jpg'
import TomeJarry from './tomeJarry.jpeg'
export default function About(){
    return(
        <>
        <Navbar/>
        <h1 className='heading'>This is the About Page</h1>
        <br/>
        <AboutCard imgUrl={TomeJarry} name={'Tom and Jarry'}  containt={'Tom and Jerry is a classic animated series created by William Hanna and Joseph Barbera. It features the comedic rivalry between a clever cat named Tom and a mischievous mouse named Jerry. The show is known for its slapstick humor and lack of dialogue, relying on physical comedy to entertain viewers. It first aired in 1940 and has since become an iconic and beloved part of animation history'}/>
        <br/>
        <br/>
        <AboutCard imgUrl={Doremon} name={'DoreMone'}  containt={'"Doraemon" is a popular Japanese manga and anime series created by Fujiko F. Fujio. It revolves around the adventures of a robotic cat named Doraemon, who travels back in time to help a young boy named Nobita Nobi with his everyday problems. Doraemon possesses futuristic gadgets from the future, which he uses to assist Nobita and his friends in various situations, leading to humorous and heartwarming stories. The series explores themes of friendship, family, and personal growth while providing entertaining and imaginative content for viewers of all ages.'}/>
        <Button text="About Page"/>
        </>
    )

}