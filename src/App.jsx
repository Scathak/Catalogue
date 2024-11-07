import imageRef from "./assets/Ori-banner-01.png";
import { CORE_CONCEPTS } from "./data";

function Header(){

  return (
    <header>
    <img src={imageRef} alt="Banner Origami" />
    <h1>Origami: Your Gateway to Creativity and Mindfulness</h1>
  </header>)
}
function CoreConcept({image, title, description}){
  return(
    <li> 
      <img src={image} alt={title}/>
      <h3> {title}</h3>
      <p> {description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header/>
      <main>
        <div>
          <p>
            Welcome to our exclusive Origami Figures Catalog, a curated collection dedicated to the timeless art of paper folding. Origami, a Japanese art form with roots extending back over a thousand years, is much more than a pastime; it is a journey of creativity, precision, and patience that enhances focus, calms the mind, and brings joy to people of all ages. Each piece within our catalog is thoughtfully designed to inspire enthusiasts and beginners alike to explore the beauty and meditative qualities of origami.
          </p><p>
            Our catalog offers a diverse selection of step-by-step instructions for creating intricate animals, elegant flowers, geometric shapes, and much more. Whether you're looking to foster your creativity, improve your motor skills, or simply find a moment of peace, origami can provide all these benefits and more. Experience the pleasure of transforming a single sheet of paper into a stunning 3D figure — no additional tools required.
          </p><p>
            Download our catalog today and embark on a creative adventure that combines tradition with self-expression. Join us in celebrating origami, an art form that balances simplicity and complexity, offering a rewarding experience with every fold.
          </p>
        </div>
        <section id="core-concepts">
          <h2>Models</h2>
          <ul>
            <CoreConcept {... CORE_CONCEPTS[0]} />
            <CoreConcept {... CORE_CONCEPTS[1]} />
            <CoreConcept {... CORE_CONCEPTS[2]} />
            <CoreConcept {... CORE_CONCEPTS[3]} />
            <CoreConcept {... CORE_CONCEPTS[4]} />
            <CoreConcept {... CORE_CONCEPTS[5]} />
            <CoreConcept {... CORE_CONCEPTS[6]} />
            <CoreConcept {... CORE_CONCEPTS[7]} />
            <CoreConcept {... CORE_CONCEPTS[8]} />
            <CoreConcept {... CORE_CONCEPTS[9]} />
            <CoreConcept {... CORE_CONCEPTS[10]} />
            <CoreConcept {... CORE_CONCEPTS[11]} />
            <CoreConcept {... CORE_CONCEPTS[12]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
