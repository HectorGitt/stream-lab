import { v4 as uuidv4 } from "uuid";

//import cover
import Destroyer from "./cover/movie1.jpg";
import Skull from "./cover/movie2.jpg";
import Voyager from "./cover/movie3.jpg";
import Imagine from "./cover/movie4.jpg";
import Express from "./cover/movie5.jpg";
import Rampage from "./cover/movie6.jpg";
import Extract from "./cover/movie7.jpg";
import You from "./cover/movie8.jpg";
import See from "./cover/movie9.jpg";
import Time from "./cover/movie10.jpg";

function movieDb() {
  return [
    {
      name: "The Destroyer",
      cover: Destroyer,
      duration: "1hr 50min",
      id: uuidv4(),
      active: true,
      genre: "Adventure",
    },
    {
      name: "King of Skull",
      cover: Skull,
      duration: "2hr 50min",
      id: uuidv4(),
      active: false,
      genre: "Action",
    },
    {
      name: "Spaceman The Voyager",
      cover: Voyager,
      duration: "1hr 32min",
      id: uuidv4(),
      active: false,
      genre: "Sci-fi",
    },
    {
      name: "I Can Only Imagine",
      cover: Imagine,
      duration: "2hr 31min",
      id: uuidv4(),
      active: false,
      genre: "Romance",
    },
    {
      name: "The Express",
      cover: Express,
      duration: "2hr 11min",
      id: uuidv4(),
      active: false,
      genre: "Action",
    },
    {
      name: "Rampage",
      cover: Rampage,
      duration: "2hr 20min",
      id: uuidv4(),
      active: false,
      genre: "Sci-fi",
    },
    {
      name: "The Extraction",
      cover: Extract,
      duration: "1hr 32min",
      id: uuidv4(),
      active: false,
      genre: "Adventure",
    },
    {
      name: "You",
      cover: You,
      duration: "3hr 10min",
      id: uuidv4(),
      active: false,
      genre: "Adventure",
    },
    {
      name: "See",
      cover: See,
      duration: "2hr 10min",
      id: uuidv4(),
      active: false,
      genre: "Action",
    },
    {
      name: "In Time",
      cover: Time,
      duration: "3hr 2min",
      id: uuidv4(),
      active: false,
      genre: "Adventure",
    },
  ];
}
export default movieDb;
