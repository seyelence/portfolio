import './Contact.css'


const contact = {
  email: 'thamany.valbrune001@umb.edu',
}

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
    <h1 className="subtitle"> CONTACT </h1>
    <br/>
    <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn-border'>
          My Email
        </span>
      </a>
    </section>
  )
}

export default Contact