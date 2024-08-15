import notes from "./images/Notes.png";
import Searchbarsearch from "./images/Searchbarsearch.png";
import Circleadd from "./images/Circleadd.png";
import Footer from './components/Footer.js'
import Header from './components/Header.js' 



const Notes = () => {
  return (

<div>
<Header />
<div class="col-6 mx-auto">
<img src={Searchbarsearch} class="Searchbarsearch mt-5 mb-5" alt="logo" />
<img src={notes} class="Notes mb-5" alt="logo" />
<img src={Circleadd} class="Notes" alt="logo" />
</div>
<Footer /> 

</div>



);
}
export default Notes;