import mongoose from "mongoose";

const cirugiaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  instrumental: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instrumental",
    },
  ],
});

module.exports = mongoose.model("Cirugia", cirugiaSchema);
