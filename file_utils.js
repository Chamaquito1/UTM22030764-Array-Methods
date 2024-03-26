import fs from "fs";

export const readJson = (jsonPath) =>{
try{
    const jsonData = fs.readFileSync(jsonPath)
    const data = JSON.parse(jsonData)
    return data
}catch(e){
    console.log(e)

}
}
export const updateJson = (newData, jsonPath) =>{
    try{
        const jsonData = fs.readFileSync(jsonPath)
        const data = JSON.stringify(newData)
        const newJson = fs.writeFileSync(jsonPath, data)
        return newJson;
        
    }catch(e){
        console.log(e)
    
    }
    }

