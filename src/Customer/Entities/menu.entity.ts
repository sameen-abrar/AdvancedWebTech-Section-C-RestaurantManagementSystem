import { Entity, EntitySchema } from "typeorm";


export const menuEntity = new EntitySchema({
    name: "menu",
    columns:
    {
        id: {
            name:"id",
            type: Number,
            primary: true,
            generated: true,
        },
        FoodName: {
            name:"Food_Name",
            type: "varchar",
            length: 50,
            nullable: false
        },
        Type: {
            name:"Type",
            type: "varchar",
            length: 50,
            nullable: false
        },
        Ingredients:{
            name: "ingredients",
            type: "varchar",
            length: 50,
            nullable: true
        },
        Description:{
            name: "Description",
            type: "varchar",
            length: 50,
            nullable: true
        },
        SpiceLevel:{
            name: "SpiceLevel",
            type: "varchar",
            length: 50,
            nullable: true
        },
        Price:{
            name: "Price",
            type: Number,
            nullable: false
        }

    }
})