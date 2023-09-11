import Navbar from '../../component/Navbar/Navbar'
import './Contact.css'

function Form(){
    return(
        <div className='form'>
            <div>
           name :  <input type='text' className='input' />
            </div>
            <div>
            address : <input type='text' /><br/>
            </div>
            <div>
           Email : <input type='text' /><br/>
           </div>
           <div>
            Message : <input type='text' /><br/>
        </div>

        </div>
    )
}

export default function Contact(){
    return(
        <>
        <Navbar/>
        <h1 className='heading'>This is the Contact Page</h1>
        <br/>
       <Form />
        </>
    )

}