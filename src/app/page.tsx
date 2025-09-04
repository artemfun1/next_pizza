
import { Sidebar } from '@/shared/AppComponents/sidebar'
import { Main } from "@/shared/AppComponents/main";
export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex h-full">
        <Sidebar />
        <Main />
      </div>
      {/* <aside className="absolute"></aside> */}
      {/* <Footer /> */}
    </div>
  );
}
