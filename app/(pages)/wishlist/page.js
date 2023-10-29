import Button from "@/Components/Button";
import Card from "@/Components/Card";
import RevealParagraph from "@/Components/RevealParagraph";
import RevealTitle from "@/Components/RevealTitle";
import { products } from "@/libs/Data/data";
import { Plus } from "lucide-react";

const Wishlist = () => {
  return (
    <article className="w-full min-h-screen flex flex-col items-center text-center md:mt-[7rem] py-8  px-8 lg:px-[2rem] xl:px-[4rem]">
      <section>
        <RevealTitle
          phrases={["Your Wishlist"]}
          phraseStyle="text-4xl font-medium text-accentColor"
        />
        <RevealParagraph
          phrases={[
            "Add products that catch your eye to your personal wishlist for later. Whether you're not ready to make a purchase just yet, or you want to keep track of items you plan to buy as gifts for friends and family, adding products to your wishlist allows you to save them for later.",
          ]}
          phraseStyle=" text-accentColor2"
          containerStyle="max-w-[40rem]"
        />
      </section>
      <div className="h-0.5 w-full bg-yellow-500 mt-8" />
      <div className="w-full grid grid-cols-2 sm:grid-cols-3  sm:gap-4 gap-2 mt-6 md:mt-8 lg:mt-12 sm:px-[2rem] md:px-[5rem] lg:px-[7rem]    md:gap-8">
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              className="h-44 sm:h-52 md:h-56  lg:h-64 xl:h-68 w-full "
            >
              <Card.CardContainer className="">
                <Card.CategoryIcon
                  category={product.categories}
                  className="hidden"
                />
                <Card.BgRemoveImage
                  bgRemoveImage={product.bgRemove}
                  className=" w-28 h-28 sm:h-32 sm:w-32 md:w-36 md:h-36 lg:h-44 lg:w-44"
                />
                <Card.CardInfo
                  title={product.title}
                  price={product.price}
                  className="text-xs sm:text-sm lg:text-base"
                />
                <Card.CardImage cardImage={product.img} />
                <Card.CardButtonWrapper>
                  <Button
                    className="h-10 w-28 md:h-12 md:w-40"
                    href={`/shop/${product.id}`}
                  >
                    <Button.Border1 className="bg-accentColor2 border-[0.1px]  border-stone-500" />
                    <Button.Border2 className="bg-accentColor2 border-[0.1px]   border-gray-500" />
                    <Button.Title className="text-black font-medium text-xs md:text-sm">
                      View Details
                    </Button.Title>
                    <Button.Icon className=" ">
                      <Plus strokeWidth="1" className="stroke-black h-4 w-4 " />
                    </Button.Icon>
                  </Button>
                </Card.CardButtonWrapper>
              </Card.CardContainer>
            </Card>
          );
        })}
      </div>
    </article>
  );
};

export default Wishlist;
