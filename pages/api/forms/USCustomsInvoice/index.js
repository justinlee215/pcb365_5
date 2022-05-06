import { dbConnect } from '../../../../utils/dbConnect'
import USCustomsInvoice from '../../../../models/USCustomsInvoice'

export default async function (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const usCustomsInvoice = await USCustomsInvoice.find({})
        res.status(200).json({ success: true, data: usCustomsInvoice })
        console.log("This is all the data from the database: ", usCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log("req.body: ", req.body)
        const usCustomsInvoice = await USCustomsInvoice.create(req.body.USCustomsInvoice)
        console.log("Invoice created: ", usCustomsInvoice)
        res.status(201).json({ success: true, data: usCustomsInvoice })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}