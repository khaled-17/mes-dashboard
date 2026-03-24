import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircleSmall, Warehouse, Rocket, SlidersHorizontal, CircleCheck, ScanBarcode } from 'lucide-react';
import Shelf from "./shelf";

function SideCard() {
  return (
    <>
      <div>
        <Card className="min-w-95 h-full">
          
          <CardContent className="px-6">
            {/* ALERTS */}
            <div>
              <CardHeader className="px-6 pl-0 mb-2">
                <CardTitle className="flex items-center gap-5 ">
                  <CircleSmall fill="#EC5967" stroke="none"/>   
                  <span className="text-lg text-[#EC5967] font-extrabold">ALERTS</span>
                </CardTitle>
              </CardHeader>
              <div className="overflow-y-auto h-90 border-b border-border">
                <Shelf icon={<Warehouse color="#D0D7DA" size={30}/>} iconName="Warehouse" description="Confirm mass on machine" id="4017702"/>
                <Shelf icon={<Rocket color="#D0D7DA" size={30}/>} iconName="machine" description="Machine stoppage" id="4017702"/>
                <Shelf icon={<Rocket color="#D0D7DA" size={30}/>} iconName="machine" description="Machine stoppage" id="4017702"/>
                <Shelf icon={<Rocket color="#D0D7DA" size={30}/>} iconName="machine" description="Machine stoppage" id="4017702"/>
                <Shelf icon={<SlidersHorizontal color="#D0D7DA" size={30}/>} iconName="Preformance" description="Low production yield count" id="4017702"/>
                <Shelf icon={<Warehouse color="#D0D7DA" size={30}/>} iconName="Warehouse" description="Confirm mass on machine" id="4017702"/>
                <Shelf icon={<Warehouse color="#D0D7DA" size={30}/>} iconName="Warehouse" description="Confirm mass on machine" id="4017702"/>
              </div>
            </div>
            {/* NOTIFICATIONS */}
            <div>
              <CardHeader className=" mt-6 pl-0">
                <CardTitle className="flex items-center gap-5 ">
                  <CircleSmall fill="#00D1DE" stroke="none"/>   
                  <span className="text-lg text-[#00D1DE] font-extrabold">NOTIFICATIONS</span>
                </CardTitle>
              </CardHeader>
              <div className="overflow-y-auto h-90 mt-4">
                <Shelf icon={<CircleCheck color="#D0D7DA" size={30}/>} iconName="Done" description="Job Order is Ready" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
                <Shelf icon={<ScanBarcode color="#D0D7DA" size={30}/>} iconName="Product" description="High production scrap" id="4017702"/>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SideCard;
