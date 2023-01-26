import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';


export default function InputForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fm2rxu5', 'template_w30rodv', form.current, 'A79AgFIjaoTWd3gMP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.clear()
    };

  return (
    <div>
        <form onSubmit={sendEmail} ref={form}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' />
            <label htmlFor="">Email</label>
            <input type="email" name="email"  />
         <button>Send</button>
        </form>
        



    </div>
  )
}
