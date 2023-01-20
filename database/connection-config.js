
import mongoose from 'mongoose';

const connectMongo = async ()=> {
    try { mongoose.set('strictQuery', true);
      const {connection} =  mongoose.connect(process.env.MONGO_URL);


      if (connection.readyState == 1){
          console.log('Database Connected');
      }
    }catch(error){
        return Promise.reject(error);
    }
}

export default connectMongo;