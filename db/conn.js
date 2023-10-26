const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://bulbovas:vUVjjfpSHgdc7TKc@cluster0.ij5acqp.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("### Conectado ao Banco ###");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
