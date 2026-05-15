import { submitContactForm } from "../actions/contactAction"
function contactPage() {
  return (
    <div>
      <form action={submitContactForm}>
         <label>Name : </label>
         <input type="text" name="name" placeholder="Enter your name"
         required/>
          <label>Email : </label>
         <input type="email" name="email" placeholder="Enter your Email"
         required/>
          <label>Message : </label>
         <textarea name="message" rows={5} placeholder="Enter your message"></textarea>
          <button type="submit">SUBMIT</button> 
         </form>
    </div>
  )
}

export default contactPage
