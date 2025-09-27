import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Component/Navbar";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Component/Header";
import SelectComponent from "./Component/SelectComponent";
import SearchComponent from "./Component/SearchComponent";
import MainSummary from "./Component/MainSummary";
import TableComponent from "./Component/TableComponent";
import EntriesComponent from "./Component/SearchComponent";
import Footer from "./Component/Footer";



export default function Home() {
  return (
    <>
    <Header />
    <Navbar />
    <SelectComponent />
    <SearchComponent />
    <MainSummary />
    <TableComponent />
    <EntriesComponent />
    <Footer />
    </>
  );
}
