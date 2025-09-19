// testConnection.js
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI || "mongodb+srv://pfn:Pfn%212025%24Atlas%23DB@cluster0.4xmoao7.mongodb.net/pfnDB?retryWrites=true&w=majority&appName=Cluster";

async function testConnection() {
  try {
    await mongoose.connect(uri);
    console.log("✅ Connexion MongoDB réussie !");
    await mongoose.disconnect();
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB :", err.message);
  }
}

testConnection();
