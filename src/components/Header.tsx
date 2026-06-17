import Menu from "./Menu";
import SecondMenu from "./SecondMenu";
import PageContainer from "./shared/PageContainer";
import SiteTitle from "./SiteTitle";

export default function Header() {
  return (
    <header>
      <PageContainer
        size="full"
        className="flex flex-row items-center justify-between"
      >
        <SiteTitle />
        <Menu />
        <SecondMenu />
      </PageContainer>
    </header>
  );
}
