import CardContainer from "@/components/ui/cards/card-container";
import Card from "@/components/ui/cards/card";
import { workItems } from "@/data/work-items";
import { notFound } from "next/navigation";
import MainPageTitle from "@/components/page-sections/main-page-title";
export default function WorkPage() {
  if (workItems.length < 1) {
    return notFound();
  }
  return (
    <>
      <MainPageTitle tag="All My Projects" title="Nothing Special To See Here">
        Have a look at my collection of work, I have created this website to
        show the projects I have worked on. Some may be indivual parts of an
        already existing web site. Others may be full custom web applications.
      </MainPageTitle>
      <CardContainer>
        {workItems.map((workItem) => (
          <Card key={workItem.id} item={workItem} />
        ))}
      </CardContainer>
    </>
  );
}
