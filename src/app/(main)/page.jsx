import CardComponent from "./_components/CardComponent";
import ContainerComponent from "./_components/ContainerComponent";
import NameComponent from "./_components/NameComponent";

export default function Home() {
  return (
    <ContainerComponent>
      <section className="flex items-end justify-between absolute top-0 left-[40px] right-[40px] h-[100px] rounded-t-4xl border-b-1 border-[#087E8B] pb-2 ">
        <NameComponent pathName={"Homepage"} />
        {/* <FilterComponent /> */}
      </section>

      <section className="w-[1280px] h-[600px] overflow-auto mt-[100px] flex items-center justify-center gap-[80px]">
        <CardComponent
          link="book-categories"
          imageSrc="/book.svg"
          tage="Book"
          discription="View All Available Books"
        />
        <CardComponent
          link="old-school-cartoons"
          imageSrc="/cartoon.svg"
          tage="Cartoon"
          discription="View All Available Cartoons"
        />
      </section>
    </ContainerComponent>
  );
}
