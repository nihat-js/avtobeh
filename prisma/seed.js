const { carModels } = require("@/config/models");
const { Prisma } = require("@prisma/client");
const { default: prisma } = require(".");

carModels.forEach((model, index) => {
    
    prisma.carModel.create({
        data: {
            id: index + 1,
            model: model
        }
    });
});