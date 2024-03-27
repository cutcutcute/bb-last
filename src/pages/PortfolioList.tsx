import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../widgets/bars/header";
import { AnimatePresence } from "framer-motion";
import { Settings } from "../shared/consts/Settings";
import Network from "../features/Network";
import { MainLoading } from "../widgets/loading/mainLoading";
import { PresentationComponent } from "../shared/PresentaTion";
import { Footer } from "../widgets/bars/footer";

const PortfolioScroll = React.lazy(()=>import("../shared/portfolio/PortfolioScroll"));

const PortfolioList = (): React.JSX.Element => {

    const {category} = useParams()


    const [projects, setProjects] = useState<any[]>([])

    const [isPresent, setIsPresent] = useState<boolean>(true);

   useEffect(()=>{
      const timer = setTimeout(()=>{setIsPresent(false)}, 3000)
      return ()=>{clearTimeout(timer)}
   }, [])
  




    useEffect(()=>{
        const fetchData = async () => {
            const categoryIndex: number = category === Settings.LIVING_SPACES_CATEGORY?Settings.LIVING_SPACES_INDEX:Settings.PUBLIC_AREAS_INDEX;
            const res = Network.getProjectsByCategory(categoryIndex);
            res
                .then((response)=>{
                    return setProjects(response)
                })

                .catch((error)=>{
                    console.log(error);
                    setProjects([]);
                })
        }

        fetchData();
        
     
    }, [])

    return <>
        <AnimatePresence>
            {isPresent && (
                <PresentationComponent notSlide={true}/>
            )}
        </AnimatePresence>

        <Header color="#000" backgroundColor="#fff"/>
        <Suspense fallback={<MainLoading/>}>
            <PortfolioScroll projects={projects}/>
        </Suspense>
   
        </>
}

export default PortfolioList;