import * as Hapi from "@hapi/hapi";
import * as Path from "path";
import * as fs from "fs";

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
const initial_study_decks = JSON.parse(
  fs.readFileSync("./initial_study_decks.json", "utf-8")
);
console.log(initial_study_decks);

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
  add_index_file_route("/deck/{deck_id}/{task_id?}");

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
    path: "/api/deck/{deck_id}",
    handler: (request) => {
      const deck_id = request.params.deck_id;
      const study_deck = initial_study_decks[deck_id];
      return {
        author: "Jacques Lucke",
        tasks: [
          {
            type: "multiple-choice",
            question: study_deck.tasks[0].body,
            answers: ["yes", "no", "maybe"],
          },
          {
            type: "just-text",
            text: `Just some text with ${request.params.deck_id}`,
          },
          {
            type: "multiple-choice",
            question: `Another question: ${request.params.deck_id}`,
            answers: ["10%", "50%", "70%", "80%", "100%"],
          },
        ],
      };
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init_server();
