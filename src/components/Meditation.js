import Meditate from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Meditate.png";
import lotscandle from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/lotscandle.png";
import Yoga from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Yoga.png";

function Meditation() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div> <h3 class="carouselheading text-start">Meditation</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card">
        <img src={Meditate} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={lotscandle} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={Yoga} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
    
    );
  }

  export default Meditation;
        