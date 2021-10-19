import Promo from '../components/Promo'
import MainpageAboutSection from '../components/MainpageAboutSection'
import RecentProjectsSection from '../components/RecentProjectsSection'
import ContactMeSection from '../components/ContactMeSection'
import DefaultLayout from '../components/layouts/DefaultLayout'

export default function IndexPage() {

  return (
    <DefaultLayout>
      <Promo />
      <MainpageAboutSection />
      <RecentProjectsSection />
      <ContactMeSection view="page" />
    </DefaultLayout>
  )
}
