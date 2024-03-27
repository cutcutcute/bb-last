


import axios from "axios"
import { error } from "console";
import { Settings } from "../shared/consts/Settings";


class Network{

    private static baseUrl: string = Settings.BACKEND_DOMAIN; // Change for deoloy on Settings.BACKEND_DEPLOY_DOMAIN


    public static async addProject(dataForm : FormData){
        try{
            const response = await axios({
                method:"POST",
                url: `${Network.baseUrl}/portfolio/add`,
                headers: {"Content-Type": "multipart/form-data"},
                data: dataForm
            })
            alert("Запись успешно сохранена");
        } catch(error){
            alert("Произошла ошибка в процессе обработки вашего запроса");
        } finally {
            window.location.reload();
        }
    }


    public static async getPortfolioData(): Promise<any[]>{
        console.log(`url - ${Network.baseUrl}`);
        const response = axios({
                  method: "GET",
                  url: `${Network.baseUrl}/portfolio`
                })
    
          return response
                .then((response) => response.data)
                .catch((error)=> {
                  console.log(error);
                  return []
                })   
        
    }


    public static async deleteProject(id: number): Promise<boolean>{
        const formData: FormData = new FormData();
        formData.append("projectId",  String(id));
        return axios({
            method:"DELETE",
            url: `${Network.baseUrl}/portfolio/delete`,
            data: formData,
            headers: {"Content-Type":  "multipart/form-data"}
        })
            .then((response) => {
                window.location.reload();
                return true;
            })
            .catch(error => {
                alert(error);
                return false;
            })
        
    }

    public static async getProject(id: number): Promise<any>{
        console.log(`id: ${id}`)
        return axios({
            method:"GET",
            url: `${Network.baseUrl}/portfolio/info`,
            params: {projectId: id},
            headers: {"Content-Type": "application/json"}
        })
           
    }

    public static async getProjectsByCategory(categoryIndex: number) : Promise<any[]>{
        return axios({
            method: "GET",
            url: `${Network.baseUrl}/portfolio`,
            params: {categoryIndex: categoryIndex}  
        })
            .then(response => {
                console.log(`response data - ${response}`)
                return response.data
            })
            .catch(error => {
                console.log(`response error - ${error}`)
                return []
            })
    }
}

export default Network;