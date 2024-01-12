import Contract from "@/components/contract";
import Header from "@/components/header";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Carousel from "@/components/carousel";
import Freela from "@/components/freela";
import Faq from "@/components/otherComponents/faq";
import SimpleForm from "@/components/simple-form";
import MenageOpportunities from "@/components/manage-opportunities";
import Peoples from "@/components/Peoples";
import NewsLetter from "@/components/otherComponents/newsLestter";
import Footer from "@/components/otherComponents/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Contract />
        <Carousel />
        <Freela />
        <Card />
        <Peoples />
        {/* <Feedbacks /> */}
        {/* <MenageOpportunities /> */}
        {/* <NewsLetter /> */}
        <Faq />
        <SimpleForm />
      </main>
      <Footer />
    </>
  );
}
