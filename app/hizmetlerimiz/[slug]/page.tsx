import React from "react";
import ServicePage from "../servicePage";


const Page = ({params}:{params: {slug:string}})=>{
  return (
    <>
    <div className="h-[110rem]">
      <ServicePage params = {{slug:params.slug}}/>
    </div>
    </>
  )
}
export default Page;