import pool from "../database/database";
import bcrypt from "bcrypt";
import { PlayerInterface } from "./player.interface";

export class PlayerModel {
    id:number;
    pseudo:string;
    password:string;
    best_score:number;

    constructor(id: number, pseudo: string, password: string, best_score: number) {
        this.id = id;
        this.pseudo = pseudo;
        this.password = password;
        this.best_score = best_score;
    }

    static async findAll(): Promise<PlayerInterface[]> {
        try {
            const dbClient = await pool.connect();
            const { rows } = await dbClient.query(`SELECT * FROM "player"`);
            return rows;
        } catch (error: any) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async findById(id: number): Promise<PlayerInterface> {
        try {
            const dbClient = await pool.connect();
            const { rows } = await dbClient.query(`SELECT * FROM "player" WHERE id=$1`, [id]);
            return rows[0];
        } catch (error: any) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async createPlayer(data: any): Promise<PlayerInterface> {
        try {
            console.log(data);
            const password: string = await bcrypt.hash(data.password, 10);
            data.password = password
            const dbClient = await pool.connect();
            const { rows } = await dbClient.query(`SELECT * FROM new_player($1)`, [data]);
            return rows[0];
        } catch (error: any) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async scoreUpdate(data: any): Promise<PlayerInterface> {
        try {
            //console.log(this);
            const dbClient = await pool.connect();
            const { rows } = await dbClient.query(`SELECT * FROM score_update($1)`, [data]);
            return rows[0];
        } catch (error: any) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async delete(id: number): Promise<PlayerInterface> {
        try {
            const dbClient = await pool.connect();
            const { rows } = await dbClient.query(`DELETE FROM "player" WHERE id=$1`, [id]);
            return rows[0];
        } catch (error: any) {
            console.log(error);
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

}