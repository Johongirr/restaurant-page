function createContact(){
    const container = document.querySelector('.header__text-box');
    const div = document.createElement('div');
    div.innerHTML =
    `
          
    <section class="contact" id="contact">
    <h2 class="contact__title">
        Contact Us
    </h2>
   
        <div class="contact__form">
   
            <form>
                <div class="contact__grid d-grid-2">
                <div class="contact__inputs">
                    <label for="name">Name</label>
                    <input type="text" id="name"   class="contact__input" placeholder="Name...">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" class="contact__input" placeholder="Subject...">
                    
                    <label for="email">Email</label>
                    <input type="email" id="email" class="contact__input" placeholder="Email...">
                    
                </div>
                <div class="contact__message">
                    <label for="message">Message</label>
                    <textarea  id="message" class="contact__input" placeholder="Message..."></textarea>
                </div>
            </div>
                <input type="submit" value="Send message" class="btn btn-submit">
            </form>
        </div>
        
    
</section>


    `
    container.appendChild(div);

}
 
export default createContact;