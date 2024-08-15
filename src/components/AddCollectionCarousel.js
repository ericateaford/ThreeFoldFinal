import Sage from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Sage.png";
import citrine from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/citrine.png";
import candle from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/candle.png";

function AddCollectionCarousel() {
    return (
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
           <div> <h3 class="carouselheading  text-start">Add to Your Collection</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card mb-5">
        <img src={Sage} class="card-img-top" alt="..."/>
        <div class="card-body">
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={citrine} class="card-img-top" alt="..."/>
        <div class="card-body">
        </div>
      </div>
      <div class="card d-none d-md-block">
        <img src={candle} class="card-img-top" alt="..."/>
        <div class="card-body">
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

  export default AddCollectionCarousel;
        