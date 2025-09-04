"use client"
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

type Props = {
  navItems?: string[];
};
const Sidebar: React.FC = ({ navItems }: Props) => {
    const handleClick = () => {
    console.log("Клик по кнопке!");
    alert("Привет, мир!");
  };
  return (
    <div className="bg-[#383838] w-[300px]">
      <div className="bg-stone-500 h-[60px] text-amber-50">
        Логотип и название
      </div>

      <nav>
        <Button onClick={handleClick} variant={'ghost'} size={'lg'} className='hover:bg-slate-600 w-[400px] rounded-none'>
          <Mail className="mr-2 h-4 w-4" />
          Name
        </Button>
       
      </nav>
    </div>
  );
};

export default Sidebar;
