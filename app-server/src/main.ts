import * as Hapi from "@hapi/hapi";
import * as Path from "path";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

const public_directory = Path.dirname(Path.dirname(__dirname));
const web_frontend_build_directory = Path.join(
  public_directory,
  "web-frontend",
  "build"
);
console.log("Public Directory: " + public_directory);

/* Use init function, because await cannot be used outside of functions yet. */
const init_server = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "0.0.0.0",
  });
  await server.register(require("@hapi/inert"));

  server.path(public_directory);

  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: web_frontend_build_directory,
      },
    },
  });

  server.route({
    method: "GET",
    path: "/question",
    handler: (request) => {
      return { question: "Is this a question?", answers: ["a", "bb", "ccc"] };
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init_server();
