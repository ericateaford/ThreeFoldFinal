import Planner from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Planner.png";
import Citrine from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/citrine.png";
import teaset from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/teaset.png";

function DailyRitualCarousel() {
    return (

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div> <h3 class="carouselheading text-start">Daily Ritual</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card mb-5">
      <img src={Planner} class="planner card-img-top" alt="..." />
        <div class="card-body">
        </div>
      </div>
      <div class="card d-none d-md-block">
      <img src={Citrine} class="planner card-img-top" alt="..." />
        <div class="card-body">
        </div>
      </div>
      <div class="card d-none d-md-block">
      <img src={teaset} class="planner card-img-top" alt="..." />
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
  <div>

  </div>
</div>


    );
  }

  export default DailyRitualCarousel;
        