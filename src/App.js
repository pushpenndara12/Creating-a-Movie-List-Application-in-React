import pic1 from "./emage/avatar.jpg";
import pic4 from "./emage/avengers_infinity_war.jpg";
import pic5 from "./emage/jurassic_world.jpg";
import pic3 from "./emage/star_wars_the_force_awakens.jpg";
import pic2 from "./emage/titanic.jpg";
import './style.css'
function App() {
  const data=[
    {
      "id": 1,
      "title": "Avatar",
      "distributor": "20th Century Fox",
      "year": 2009,
      "amount": "$2,787,965,087",
      "img": {
        "src": pic1,
        "alt": "avatar"
      },
      "ranking": 1
    },
    {
      "id": 2,
      "title": "Titanic",
      "distributor": "20th Century Fox",
      "year": 1997,
      "amount": "$2,187,463,944",
      "img": {
        "src": pic2,
        "alt": "titanic"
      },
      "ranking": 2
    },
    {
      "id": 3,
      "title": "Star Wars: The Force Awakens",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2015,
      "amount": "$2,068,223,624",
      "img": {
        "src": pic3,
        "alt": "star_wars_the_force_awakens"
      },
      "ranking": 3
    },
    {
      "id": 4,
      "title": "Avengers: Infinity War",
      "distributor": "Walt Disney Studios Motion Pictures",
      "year": 2018,
      "amount": "$2,048,359,754",
      "img": {
        "src": pic4,
        "alt": "avengers_infinity_war"
      },
      "ranking": 4
    },
    {
      "id": 5,
      "title": "Jurassic World",
      "distributor": "Universal Pictures",
      "year": 2015,
      "amount": "$1,671,713,208",
      "img": {
        "src": pic5,
        "alt": "jurassic_world"
      },
      "ranking": 5
    }
  ]

  return (
    <>
    <div className="divmain">MovieList</div>
    <div className="photo">
       {
        data.map((data)=>{
          return <div className="card"><img src={data.img.src} alt={data.img.alt} height={350} width={257} /><h4>
            {`#${data.id}-${data.title}`}<br></br>{`(${data.year})`}</h4>
            <hr></hr>
            <h5>{`Distributor:${data.distributor}`}</h5><hr></hr>
            <h5>{`Amount:${data.amount}`}</h5>
            </div>
        })
       }
       
    </div>
    </>
  );
}

export default App;
