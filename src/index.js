require("dotenv").config();

const app = require("./app");
const apolloServer = require("./apollo");
const { connectDB } = require("./db");
const { graphqlUploadExpress } = require("graphql-upload");

async function main() {
  // connecting to Mongodb
  await connectDB();

  // add the upload middleware
  app.use(graphqlUploadExpress());

  // Starting the apollo Server
  await apolloServer.start();

  // Apollo server setup
  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => {
    res.send("Not Found");
  });

  // Start http server
  app.listen(3000);
  console.log("Server on port 3000");
}

main();
