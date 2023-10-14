import usersController from "../app/http/controllers/usersController.js";

const initRoutes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.post("/register", usersController().register);
  app.post("/login", usersController().login);
};

export default initRoutes;
  