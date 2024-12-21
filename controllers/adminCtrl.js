const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const adminCtrl = {
  
  getAllAdmins: async (req, res) => {
    try {
      const admins = await prisma.admin.findMany({
        include:{
          role:true,
          createdRoles:true,
          updatedRoles:true,  
          createdAdmins:{
            include:{
              password:false
            }
          },
          updatedAdmins:{
            include:{
              password:false
            }
          },
          password:false,
        }
      });

      res.status(200).json({
        status: "success",
        admins,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};

module.exports = adminCtrl;
