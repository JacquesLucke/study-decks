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
const static_files_directory = Path.join(
  web_frontend_build_directory,
  "static"
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

  const add_index_file_route = (path: string) => {
    server.route({
      method: "GET",
      path,
      handler: {
        file: Path.resolve(web_frontend_build_directory, "index.html"),
      },
    });
  };

  // Those paths return the same index.html file. Routing is handled on the client side.
  add_index_file_route("/");
  add_index_file_route("/about");
  add_index_file_route("/login");
  add_index_file_route("/deck/{deck_name*}");

  // Access static files.
  server.route({
    method: "GET",
    path: "/static/{param*}",
    handler: {
      directory: {
        path: static_files_directory,
        index: false,
        listing: false,
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
