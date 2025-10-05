import { Router } from "express";

const router = Router()

router.get("/", (req, res)=>{
    res.render("index",{title: "Home"})
});
router.get("/catalogo", (req, res)=>{
    res.render("catalogo",{title: "Catálogo"})
});

export {router};