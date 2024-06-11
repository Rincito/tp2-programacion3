import mongoose from "mongoose";

const historialSchema = mongoose.Schema(
    {
    city: {
        type: String
    },
    country: {
        type: String
    },
    temperature: {
        type: String
    },
    condition: {
        type: String
    }
    },
    {
        timestamps: true
    })

    const ModelHistorial = mongoose.model("Historial", historialSchema, "historial")
    export default ModelHistorial;