import express from "express"
import routeNotFound from "./3-middlware/RouteNotFound"
import catchAll from "./3-middlware/catchAll"
import appConfig from "./2-utils/appConfig"
import giftShop from "./6-controllers/giftShopController"






const server = express()
server.use(express.json())
server.use("/api",giftShop)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port${appConfig.port}`)))
