import Rocks from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Rocks.png";
import Stars from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Stars.png";
import Moon from "/Users/ericateaford/Downloads/ReactApp/my-app/src/images/Moon.png";



function SuggestedArticlesCarousel() {
    return (
 
 <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div> <h3 class="carouselheading text-start">Suggested Articles</h3> </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
      <div class="card mb-5">
      <img src={Rocks} class="planner card-img-top" alt="..." />
        <div class="card-body">
         
        </div>
      </div>
      <div class="card d-none d-md-block">
      <img src={Stars} class="planner card-img-top" alt="..." />
        <div class="card-body">
         
        </div>
      </div>
      <div class="card d-none d-md-block">
      <img src={Moon} class="planner card-img-top" alt="..." />
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

  export default SuggestedArticlesCarousel;