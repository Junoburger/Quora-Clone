import "reflect-metadata";
import { createKoaServer, Action } from "routing-controllers";
import AnswerController from "./answers/controller";
import QuestionController from "./answers/controller";
import UsersController from "./users/controller";
import LoginController from "./logins/controller";
import setupDb from "./db";
import { verify } from "./jwt";

const app = createKoaServer({
  controllers: [
    AnswerController,
    QuestionController,
    UsersController,
    LoginController
  ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");
      return !!(token && verify(token));
    }
    return false;
  }
});

setupDb()
  .then(_ => app.listen(4000, () => console.log("Listening on port 4000")))
  .catch(err => console.error(err));

//   docker run -p 5432:5432 -e POSTGRES_PASSWORD=secret --name=postgres postgres
// docker run -it --rm --link postgres:postgres postgres psql -h postgres -U postgres
