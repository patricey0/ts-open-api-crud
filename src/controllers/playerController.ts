import { Request, Response } from "express";
import { PlayerModel } from "../models/player.model";
import { PlayerInterface } from "../models/player.interface";

const playerController = {

    getAllPlayers: async (_req: Request, res: Response) => {
        try {
            const players: PlayerInterface[] = await PlayerModel.findAll();
            res.json(players);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    getOnePlayer:async (req:Request, res: Response) => {
        try {
            const wantedPlayer: PlayerInterface = await PlayerModel.findById(+req.params.id);
            res.json(wantedPlayer);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    createNewPlayer: async (req: Request, res: Response) => {
        try {
            console.log(req.body);
            const newPlayerData: PlayerInterface = req.body;
            // console.log(newPlayerData);
            const newPlayer = await PlayerModel.createPlayer(newPlayerData);
            res.json(newPlayer);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    scoreUpdate: async (req: Request, res: Response) => {
        try {
            const scorePlayerToUpdate: PlayerInterface = await PlayerModel.scoreUpdate({id:+req.params.id, ...req.body});
            res.json(scorePlayerToUpdate);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    deletePlayer:async (req: Request, res: Response) => {
        try {
            await PlayerModel.delete(+req.params.id);
            res.json(`Player id:${+req.params.id} has been deleted.`);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export default playerController;