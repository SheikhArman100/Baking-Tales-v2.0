import Button from "@/Components/Button";
import Card from "@/Components/Card";
import { ArrowRight, Plus, Star } from "lucide-react";
import cakeIcon from "../../public/assets/cakeIcon.svg";
import cakeBgRemove from "../../public/assets/cake1_bgRemove.png";
import cake1 from "../../public/assets/cake1.jpg"

const FeaturedItem = () => {
  return (
    <section className="w-full h-full py-8 px-2 md:px-[4rem]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-x-1">
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
          <p className="text-textColor text-[0.7rem] font-medium">
            All the Featured items
          </p>
          <Star fill="#eab308" stroke="none" className="h-4 w-4" />
        </div>

        <h3 className="text-3xl text-accentColor2 font2">Featured</h3>
        <div className="w-full flex justify-end">
          <Button className="hidden md:flex ">
            <Button.Border1 />
            <Button.Border2 />
            <Button.Title>See All</Button.Title>
            <Button.Icon>
              <ArrowRight className="stroke-white" />
            </Button.Icon>
          </Button>
        </div>
      </div>
      <div className="p-8 flex flex-wrap justify-center gap-y-4 gap-x-4 md:gap-x-8">
        {[...Array(4).keys()].map((i) => (
          <Card key={i}>
            <Card.CardContainer>
              <Card.CategoryIcon category="cake"/>
              <Card.BgRemoveImage bgRemoveImage={cakeBgRemove} />
              <Card.CardInfo title="Birthday Cake" price="99.9" />
              <Card.CardImage cardImage={cake1}/>
              <Card.CardButtonWrapper>
                <Button>
                  <Button.Border1 className="bg-accentColor2 border-[0.1px]  border-stone-500" />
                  <Button.Border2 className="bg-accentColor2 border-[0.1px]   border-gray-500" />
                  <Button.Title className="text-black font-medium">
                    View Details
                  </Button.Title>
                  <Button.Icon className=" ">
                    <Plus strokeWidth="1" className="stroke-black h-4 w-4 " />
                  </Button.Icon>
                </Button>
              </Card.CardButtonWrapper>
            </Card.CardContainer>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItem;
