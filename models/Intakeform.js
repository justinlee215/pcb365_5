import mongoose from "mongoose";

const IntakeformSchema = new mongoose.Schema(
  {
    shipperName: {
      type: String,
      // required: [true, "shipperName is required"],
      trim: true,
      maxlength: [50, "shipperName must be less than 50 characters"],
    },
    shipperContact: {
      type: String,
      // required: [true, "shipperContact is required"],
      trim: true,
      maxlength: [40, "shipperContact must be less than 40 characters"],
    },
    shipperAddress: {
      type: String,
      // required: [true, "shipperAddress is required"],
      trim: true,
      maxlength: [100, "shipperAddress must be less than 100 characters"],
    },
    shipperPhone: {
      type: Number,
      // required: [true, "shipperPhone is required"],
      trim: true,
      maxlength: [20, "shipperPhone must be less than 20 characters"],
    },
  },
  { collection: "intakeform" }
);

module.exports =
  mongoose.models.Intakeform || mongoose.model("Intakeform", IntakeformSchema);
