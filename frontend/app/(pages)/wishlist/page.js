import RevealParagraph from "@/Components/RevealParagraph";
import RevealTitle from "@/Components/RevealTitle";
import StatusChecker from "@/Components/StatusChecker.js";
import ShowWishlist from "./ShowWishlist.js";

const Wishlist = () => {
  return (
    <StatusChecker>
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
      <ShowWishlist/>
    </article>
     </StatusChecker>
  );
};

export default Wishlist;
