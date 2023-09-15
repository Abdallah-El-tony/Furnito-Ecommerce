
const Form = () => {
  return (
    <div className="col-md-8">
        <h2 className='mb-4'>Send us an Email</h2>
        <form action="">
            <label htmlFor="name" className='mb-2'>Your Name</label>
            <input type="text" className='form-control py-3' id='name' name='name' placeholder='Your Name' />
           
            <label htmlFor="email" className='mt-4 mb-2'>Your Email</label>
            <input type="email" className='form-control' id='email' name='email' placeholder='Your Email' />
            
            <label htmlFor="message" className='mt-4 mb-2'>Your Message</label>
            <textarea name="message" className='form-control mb-2' id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
            
            <input type="submit" className='custom-btn mt-3 py-2 px-4' value='Send Message'/>
        </form>
    </div>
  )
}

export default Form