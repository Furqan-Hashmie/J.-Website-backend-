import Product from '../Models/productSchema.js';


export const getallItem =async  (req, res, next) => {
  try {
    const getpro = await Product.find({})
    res.json({
        message: getpro
    })
  } catch (error) {
     res.json({
        message: error
     })
  }
}
export const deleteallItem =async  (req, res, next) => {
  try {
    const deletepro = await Product.findOneAndDelete()
    res.json({
        message: deletepro
          })
  } catch (error) {
     res.json({
        message: "product could not be deleted"
     })
  }
}
export const getItembyid =async (req, res, next) => {
    const {id} = req.params;
    try {
     const product = await Product.findById(id)
     res.json({
         message:product
     })
    } catch (error) {
     res.json({
         message:error
     })
    }
}

export const createNewItem = async (req , res , next ) => {
    try {
      const {title , description , price , category , imageUrl} = req.body
      const newProduct = new Product({
        title,
        description,
        price,
        category,
        image: imageUrl
      });
      await newProduct.save();
    } catch (error) {
      console.log("Something Went Wrong While Creating New Product",error);
  }
  }
export const updateItem = (req, res, next) => {
    res.send(item)
}
// export const deleteItem = async (req, res, next) => {
//   try {
//       const { id } = req.params;
//       await Product.findByIdAndDelete(id);
//       res.status(200).json({
//           success: true,
//           message: 'Product deleted successfully'
//       });
//   } catch (error) {
//       res.status(500).json({
//           success: false,
//           message: 'Product could not be deleted'
//       });
//   }
// };
export const deleteItem =  async function(req,res){
 try {
  const {id} = req.params;

  await Product.findByIdAndDelete(id);
   res.json({
       message: 'Product deleted successfully'
   })
 } catch (error) {
  console.log("product not deleted",error);
 }
  }