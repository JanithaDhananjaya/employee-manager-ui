function handler(req, res){
    if (req.method === 'POST'){
        const data = req.body;

        const { first_name, last_name, email, number, gender, photo} = data;
    }
}

export default handler;