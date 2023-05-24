import React from "react"
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import "./form.css"

function Form () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_52ro6my', 'template_rangkvp', form.current, 'fEYtSB0Xb1npJfmrf')
        .then(function(result){
            alert("Thanks for applying, we will send a response to your gmail.")
            console.log(result.text);
        })
        }
    return(
        <>
            <form ref={form}onSubmit={sendEmail}>
            <h2>To Apply, fill the form below</h2>
            <div>
              <label for="position">
                Select Postition
              </label><br/>
                <select id="position">
                    <option>Secretary</option>
                </select>
            </div>
                <div>
                <label for="name">Name:</label><br/>
                    <input id="name" name="name" type="text" placeholder="name" required/>
                </div>

                <div>
                <label for="number">Number:</label><br/>
                <input id="number" name="number" type="phone" placeholder="phone number" required/>
                </div>

                <div>
                <label for="email">Email:</label><br/>
                <input id="email" name="email" type="email" placeholder="email address" required/>
                </div>

                
                <div>
                <label for="ssn">social security number:</label><br/>
                <input id="ssn" name="ssn" type='text' placeholder="ssn" required/>
                </div>

                
                

                <div>
                <label for="address">Zip Code:</label><br/>
                     <textarea id="address" name="address" type="number"/>
                </div>
               <div>
                
                 <label for="file"> Upload Your CV Here</label><br/>
                <input id="file" name="file" type="file"/><br/>

<div>
                <label for="image">Drivers Licence or any form of ID:</label><br/>
                <input id="image" name="file2" type="file"  required/>
                </div>

                <button type="submit"> Submit </button>
                </div>
            </form>
        </>
    )
}

export default Form