import { useEffect } from "react";

export default function Home() {
  let txt;
  useEffect(() => {
    const retrieveScrips = async () => {
      const res = await fetch('../../backend/scriptures.json')
      let scriptures = await res.json()
      txt = scriptures[Math.floor(Math.random() * scriptures.length)];
    };
    retrieveScrips()
  }, [])

  let i = 0;
  const speed = 20;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <main className=" d-flex">
      <section className="home-footer">
        <div className="m-4 w-50 typing-container">
          <button className=" bg-transparent underline " onClick={() => typeWriter()}>Daily Scripture</button>
          <p id="demo"></p>

        </div>
      </section>

      <div id="carouselExampleCaptions" className="carousel slide slide-imgs w-50 h-50  mt-5 shadow-lg p-1 mb-5 bg-body-secondary rounded">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/203512764-nomad-with-their-flock-of-sheep-traveling-across-the-mountains-created-with-generative-ai.jpg" className="d-block w-100 img-slide" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/LASTSUPPER.PNG" className="d-block w-100 img-slide" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/IMGP3292.JPG" className="d-block w-100 img-slide" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <br />
        <article className="card2 p-2 rounded ">
          <h1 id="head" className="underline ">Dedication</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </article>
      </div>
      <img src="/YahushaName.png" />
    </main>
  )
}