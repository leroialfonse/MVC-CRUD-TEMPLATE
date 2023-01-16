const ItemList = require('../models/itemlist')

module.exports = {
    // remember: if you're talking to your db, pop an async to allow for the app to twait for responses.
    getEdit : async (req,res) => {
        const id= req.params.id
        console.log(id)
        try {
            const items = await ItemList.find()
            res.render("edit.ejs", {itemList: items, idItem: id})
        } catch (err) {
            if (err) return res.status(500).send(err)
        }
    },
    deleteItem: async (req,res) => {
        const newItem = new ItemList(
            {
                textinput: req.body.textinput,
                numinput: req.body.numinput
            }
        )
        try {
            await newItem.save()
            console.log(newItem)
            res.redirect("/")
        } catch(err) {
            if (err) return res.status(500).send(err)
            res.redirect("/")
        }
    },
    updateItem: async (req,res) => {
        const newItem = new ItemList(
            {
                textinput: req.body.textinput,
                numinput: req.body.numinput
            }
        )
        try {
            await newItem.save()
            console.log(newItem)
            res.redirect("/")
        } catch(err) {
            if (err) return res.status(500).send(err)
            res.redirect("/")
        }
    }
}