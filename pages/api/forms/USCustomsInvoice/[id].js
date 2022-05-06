import { dbConnect } from '../../../../utils/dbConnect'
import USCustomsInvoice from '../../../../models/USCustomsInvoice'

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
        const usCustomsInvoice = await USCustomsInvoice.findById(id)

        if (!usCustomsInvoice) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: usCustomsInvoice })
        console.log("Found the data from the database: ", usCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        console.log("req.body: ", req.body)
        const usCustomsInvoice = await USCustomsInvoice.findByIdAndUpdate(id, req.body.USCustomsInvoice, {
            new: true,
            runValidator: true
        } )

        if (!USCustomsInvoice) {
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: usCustomsInvoice })
        console.log("Found the data updated to the database: ", usCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
        try {
          console.log("id: ", id)
          const usCustomsInvoice = await USCustomsInvoice.deleteOne({_id: id })

        if (!usCustomsInvoice) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })
        console.log("The data deleted: ", usCustomsInvoice)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
        res.status(400).json({ success: false })
  }
}