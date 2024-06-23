import MovieSearchAppImg from "@assets/images/movie-search-app.png";
import QuizzicalAppImg from "@assets/images/quizzical.png";
import { MY_GITHUB_URL } from "@constants";

export const PERSONAL_PROJECTS = [
  {
    title: "Quizzical",
    role: "Developer",
    description:
      "It was my first project, I built after learning React. It is a quiz website in which basics of react such as conditional rendering, use of hooks like useState and useEffect are used.",
    src: QuizzicalAppImg,
    link: `${MY_GITHUB_URL}/QuizApp`,
  },
  {
    title: "Movie Search App",
    role: "Developer",
    description:
      "This Project was created with the purpose of developing a frontend for a movie search app and implementing concepts of error handling, conditional rendering, custom validity message and React hooks.",
    src: MovieSearchAppImg,
    link: `${MY_GITHUB_URL}/Movie-Search-App`,
  },
];
