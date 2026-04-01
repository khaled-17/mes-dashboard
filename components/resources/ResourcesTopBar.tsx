

import BreadcrumbsComponent from "../BreadcrumbComponent"
import { Button } from "../ui/button"




const ResourcesTopBar = () => {
  return (
    <div className="flex justify-between">
        <BreadcrumbsComponent  />

  
     <Button>Add Resource</Button>
     
   


       
    </div>
  )
}

export default ResourcesTopBar