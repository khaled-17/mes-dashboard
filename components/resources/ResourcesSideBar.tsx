

import { Input } from "../ui/input"


const ResourcesSideBar = () => {
  return (
   <aside>
     <div className="flex flex-col gap-4 w-75">
       
       <Input placeholder="Search by Material Name - Type" className="bg-white rounded-md shadow-md" />
       <div className="bg-white h-80  w-full rounded-md shadow-md">

       </div>
       <div className="bg-white h-80  w-full rounded-md shadow-md">

       </div>

     </div>
   </aside>
  )
}

export default ResourcesSideBar