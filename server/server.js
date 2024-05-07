const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("../server/schemas");
const { authMiddleware } = require("./utils/auth");
const expressPlayground =
  require("graphql-playground-middleware-express").default;

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve GraphQL Playground at /playground route
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
} else {
  // Ensure the Playground route doesn't interfere with React routing in development
  app.get("*", (req, res, next) => {
    if (req.path === "/playground") return next();
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
