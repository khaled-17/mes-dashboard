import { BreadCrumbComponent } from "../BreadcrumbComponent"
import { Button } from "../ui/button"




const ResourcesTopBar = () => {
  return (
    <div className="flex justify-between">
        <BreadCrumbComponent  />

  
     <Button>Add Resource</Button>
     
   


       
    </div>
  )
}

export default ResourcesTopBar