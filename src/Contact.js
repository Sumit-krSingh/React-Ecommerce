import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
  padding: 5rem 0 3rem 0;
  text-align: center;
  .container{
    margin-top: 4rem;

    .contact-form{
      max-width:50rem;
      margin: auto;

      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type ="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 10px;

          &:hover{
            background-color:${({theme}) => theme.colors.bg};
            border: 1px solid ${({theme}) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }

    } 
  }
  `;
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact page</h2>
      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.5862899243555!2d77.99721533866875!3d30.289148209765777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bc98c2a7f09%3A0x57d7707d44e25a14!2sISBT%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1701413778919!5m2!1sen!2sin"
      title="myFrame"
       width="100%" 
       height="300" 
       style={{border:0}}
       allowFullScreen="" 
       loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      <div className="container">
        <div className="contact-form">
          {/* to apply email send function visit formspree website reg. and create form value */}
          <form 
          // action="https://formspree.io/f/xeqdgwnq" create ur own link
          method='POST'
          className='contact-inputs'>
            <input
             type="text"
             name='username'
             placeholder='username'
             required
             autoComplete='off' />
             <input 
             type="email"
              placeholder='email'
              name='Email'
              required
              autoComplete='off'/>
              
              <textarea name="message" 
               cols="30" 
               rows="10"
               placeholder='enter your message'
               required
               autoComplete='off'>

               </textarea>

               <input type="submit" value="send" />


          </form>
        </div>
      </div>
    </Wrapper>
   
  )
}

export default Contact
