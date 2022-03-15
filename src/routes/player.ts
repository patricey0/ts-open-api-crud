import express from "express";
import {Request, Response} from "express";
import playerController from "../controllers/playerController";

const router = express.Router();

router.get('/players', playerController.getAllPlayers);
router.get('/player/:id', playerController.getOnePlayer);
router.post('/player/create', playerController.createNewPlayer);
router.patch('/player/:id/update/score', playerController.scoreUpdate);
router.delete('/player/:id', playerController.deletePlayer);

export default router;