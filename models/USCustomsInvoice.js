import mongoose from "mongoose"

const USCustomsInvoiceSchema = new mongoose.Schema({
        formType: {
                type: String,
                required: [true, "formType is required"],
                trim: true,
                maxlength: [30, 'formType must be less than 30 characters']
        },
        shipperName: {
                type: String,
                required: [true, "shipperName is required"],
                trim: true,
                maxlength: [50, 'shipperName must be less than 50 characters']
        },
        shipperContact: {
                type: String,
                required: [true, "shipperContact is required"],
                trim: true,
                maxlength: [40, 'shipperContact must be less than 40 characters']
        },
        shipperAddress: {
                type: String,
                required: [true, "shipperAddress is required"],
                trim: true,
                maxlength: [100, 'shipperAddress must be less than 100 characters']
        },
        shipperPhone: {
                type: Number,
                required: [true, "shipperPhone is required"],
                trim: true,
                maxlength: [20, 'shipperPhone must be less than 20 characters']
        },

        exporterName: String,
        exporterContact: String,
        exporterAddress: String,
        exporterPhone: String,

        otherRefNosName: String,
        consigneePhone: String,
        consigneeAddress: String,
        consigneeIRS: String,

        buyerPhone: String,
        buyerAddress: String,
        buyerIRS: String,
  
}, {collection: 'us_customs_invoice_submission'})

module.exports = mongoose.models.USCustomsInvoice || mongoose.model('USCustomsInvoice', USCustomsInvoiceSchema)

