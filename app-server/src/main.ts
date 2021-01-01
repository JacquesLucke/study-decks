import * as Hapi from "@hapi/hapi";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

/* Use init function, because await cannot be used outside of functions yet. */
const init_server = async () => {
  const server = Hapi.server({ port: 3000, host: "0.0.0.0" });

  server.route({
    method: "GET",
    path: "/",
    handler: (request) => {
      return "Hello World!";
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init_server();
