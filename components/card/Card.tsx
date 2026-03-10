import { CardProps } from "../../types/Card";

function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-xl rounded-[10px] min-w-70.5 ">
      <div className="">{children}</div>
    </div>
  );
}

export default Card;

{
/*
    you can create a card component with header, content and tabs.
    its reusable and customizable- you can use it with tables or normal cards by 
    you can use it in any page or component.
    Here is an example of how to use Card component:

    <Card>
        <CardHeader>
            <CardTitle>
                <p>icon</p>
                <p>card 2 title</p>
            </CardTitle>

            <CardTabs
                Tabs={[
                    { id: "tab1", label: "Tab 1" },
                    { id: "tab2", label: "Tab 2" },
                    { id: "tab3", label: "Tab 3" },
                ]}
            />
        </CardHeader>

        <CardContent>
            <h1>card 2</h1>
            <p>description of card 2</p>
        </CardContent>
    </Card> 
*/
}
