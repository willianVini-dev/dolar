import "reflect-metadata"
import express from "express"
import "../src/dataBase/connection"
import {router} from "../src/routes"
import "../src/infra/container"

const app = express()
app.use(express.json())

app.use(router)

app.listen("3030", ()=>{console.log("is DoLaR")})