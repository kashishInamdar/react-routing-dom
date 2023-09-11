import './Card.css'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
export default function Card({imgUrl, name }){
    return(
        <>
        <div className="card">
            <img src={imgUrl} alt="img"  className='card-img ' />
            <h1>{name}</h1> 
            <Link to={'/about'} ><Button text={'Know More'}/></Link>
        </div>
        </>
    );
}

export function AboutCard({imgUrl, name , containt}){
    return(
    <div className='about-card d-flex'>
        <div>
        <img src={imgUrl} alt="img" className='about-card-img' />
        </div>
        <div>
            <h1>{name} </h1>
            <p className='about-card-containt' >{containt}</p>
        </div>
    </div>
    );
}

