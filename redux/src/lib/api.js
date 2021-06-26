import axios from "axios";


const client = axios.create({
    baseURL:'http://localhost:5000/api/users',
});


export const loginAPI= async (dataToSubmit) => {
    try{
        const {data} = await client.post("/login",dataToSubmit);
        console.log('[SUCCESS] POST LOGIN',data);
        return data;
    }catch(e){
        console.error('[FAIL] POST LOGIN',e);
    }
};
