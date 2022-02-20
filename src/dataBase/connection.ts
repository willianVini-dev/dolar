import {createConnection} from "typeorm"
createConnection().then().catch(()=>{console.log('error connection')}); 
