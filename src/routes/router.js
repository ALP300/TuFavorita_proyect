import { Router } from "express";
import { ConsultarProductos } from "../public/services/conexion.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
router.get("/catalogo", (req, res) => {
  res.render("catalogo", { title: "Catálogo" });
});
router.get("/promociones", (req, res) => {
  res.render("promociones", { title: "Tus promos" });
});
router.get("/catalogo", (req, res) => {
  res.render("catalogo", { title: "Catálogo" });
});

router.get("/api/get-producto", async (req, res) => {
  try {
    const producto = await ConsultarProductos();
    res.status(200).json(producto);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

export { router };
