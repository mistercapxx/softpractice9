import contentStyle from "@/styles/Content.module.css";
import Navbar from '@/components/Navbar';
import Content from '@/components/Content';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={contentStyle.content}>
        <Content />
      </div>
    </>
  );
}
