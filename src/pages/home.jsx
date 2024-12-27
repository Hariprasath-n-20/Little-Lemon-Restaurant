import ContentHeader from "../components/contentHeader"
import Menu from "../components/menu"
import Testimonials from "../components/testimonials"
import Description from "../components/description"
export default function Home() {
    return (
      <main>
       <ContentHeader />
       <Menu />
       <Testimonials />
       <Description />
      </main>
    )
  }