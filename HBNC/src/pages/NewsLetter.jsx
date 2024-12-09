export default function NewsLetter() {
  
  return (

    <div className="d-flex">
      <form className="w-25 m-5 newsLetter-form">
        <div className="container">
          <h2>Subscribe to our Newsletter</h2>
          <p className="sub-text">Please sign up for our latest Newsletters, and keep up to date with our latest entries. We will be submitting new content weekly. <b>Shaluam</b></p>
        </div>

        <div className="container" style={{ backgroundColor: "grey"  }}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email address" name="mail" required />
        </div>

        <div className="container">
          <input type="submit" />
        </div>
      </form>

      <section className="update newsLett-ft card p-2 ">
        <h2>Stay up to date</h2>
        <h3>(Vision)</h3>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the
           1500s, when an unknown printer took a galley of type and scrambled it to
           make a type specimen book. It has survived not only five centuries, but
           also the leap into electronic typesetting, remaining essentially
           unchanged. It was popularised in the 1960s with the release of Letraset
           sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     
          <h3>(Study Material)</h3>
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active">
              I am active
            </button>
            <button type="button" className="list-group-item list-group-item-action">First</button>
            <button type="button" className="list-group-item list-group-item-action">Second</button>
            <button type="button" className="list-group-item list-group-item-action">Third</button>
            <button type="button" className="list-group-item list-group-item-action">Fourth</button>
        </div>
      </section>

    </div>
  )
}