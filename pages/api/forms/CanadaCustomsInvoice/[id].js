import { dbConnect } from '../../../../utils/dbConnect'
import CanadaCustomsInvoice from '../../../../models/CanadaCustomsInvoice'

export default async function handler (req, res) {
  const { 
      method,
      query: { id }
     } = req

  await dbConnect()

  switch (method) {
    case 'GET':
        console.log("findingId:", id)
      try {
        const canadaCustomsInvoice = await CanadaCustomsInvoice.findById(id)

        if (!canadaCustomsInvoice) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: canadaCustomsInvoice })
        console.log("Found the data from the database: ", canadaCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        console.log("req.body: ", req.body)
        const canadaCustomsInvoice = await CanadaCustomsInvoice.findByIdAndUpdate(id, req.body.canadaCustomsInvoice, {
            new: true,
            runValidator: true
        } )

        if (!canadaCustomsInvoice) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: canadaCustomsInvoice })
        console.log("Found the data updated to the database: ", canadaCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
        try {
          console.log("id: ", id)
          const canadaCustomsInvoice = await CanadaCustomsInvoice.deleteOne({_id: id })

        if (!canadaCustomsInvoice) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
        console.log("The data deleted: ", canadaCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
        res.status(400).json({ success: false })
  }
}