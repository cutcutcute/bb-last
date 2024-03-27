
interface ISettings{
    BACKEND_DOMAIN: string,
    BACKEND_DEPLOY_DOMAIN: string,

    LIVING_SPACES_INDEX: number,
    PUBLIC_AREAS_INDEX: number,
    LIVING_SPACES_CATEGORY: string,
    PUBLIC_AREAS_CATEGORY: string
}



export const Settings: ISettings = {

    BACKEND_DOMAIN: "http://localhost:8080",
    BACKEND_DEPLOY_DOMAIN: "http://194.190.152.238:8080",

    // Consts for portfolio Navigation
    LIVING_SPACES_INDEX:1,
    PUBLIC_AREAS_INDEX:2, 
    LIVING_SPACES_CATEGORY: "living-spaces",
    PUBLIC_AREAS_CATEGORY: "public-areas"
}