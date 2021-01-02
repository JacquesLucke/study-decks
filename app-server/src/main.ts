import * as Hapi from "@hapi/hapi";
import * as Path from "path";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

const public_directory = Path.dirname(Path.dirname(__dirname));
const web_frontend_dist_directory = Path.join(
  public_directory,
  "web-frontend",
  "dist"
);
console.log("Public Directory: " + public_directory);

/* Use init function, because await cannot be used outside of functions yet. */
const init_server = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "0.0.0.0",
  });
  await server.register(require("@hapi/inert"));

  server.path(public_directory);

  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: web_frontend_dist_directory,
      },
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init_server();