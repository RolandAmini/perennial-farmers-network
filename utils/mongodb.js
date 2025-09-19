// utils/mongodb.js
import mongoose from "mongoose";

let isConnected = false; // Suivi de la connexion

export async function connectDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("✅ MongoDB connecté:", conn.connection.host);
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error);
    throw new Error("Impossible de se connecter à MongoDB");
  }
}
