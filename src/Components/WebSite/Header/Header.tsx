import { Header } from "@/Components/Header";
import { HeaderStyle } from "@/app/Style";
interface WebSiteHeader{
  color:string
}

export default function WebSiteHeader({color}:WebSiteHeader) {
  console.log(color)
  return (
    <Header.Box className={`${HeaderStyle.HeaderBox}`} style={{background:color[0]}}> 
      <div className={HeaderStyle.HeaderDiv}>
        <Header.Logo src="/navbar-mobile/logo.png" />
        <Header.Navbar className={"flex gap-4"}>
          <Header.Link className={HeaderStyle.HeaderLink} href="/">
            Home
          </Header.Link>
          <Header.Link className={HeaderStyle.HeaderLink} href="/">
            Nossas lojas
          </Header.Link>
          <Header.Link className={HeaderStyle.HeaderLink} href="/">
            Novidades
          </Header.Link>
          <Header.Link className={HeaderStyle.HeaderLink} href="/">
            Promoções
          </Header.Link>
        </Header.Navbar>
      </div>
    </Header.Box>
  );
}
