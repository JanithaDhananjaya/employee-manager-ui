import connectMongo from "@/database/connection-config";

export default async function handler(req, res){
   connectMongo();
   res.status(200).json({name: 'Jjsk'});
}