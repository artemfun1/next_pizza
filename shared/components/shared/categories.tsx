'use client'
import { cn } from "@/lib/utils";
import { useCategoryStore } from '@/store/category'
import { Category } from '@prisma/client'
import Link from 'next/link'

interface Props {
	items:Category[]
	className?: string;
}


const activeIndex = 0;

export const Categories: React.FC<Props> = ({items, className }) => {
	const categoryActiveId = useCategoryStore((state)=>state.activeId)
	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
		>
			{items.map(({name,id}, index) => (
				<Link
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						categoryActiveId === id && "bg-white shadow-gray-200 text-primary"
					)}
					href={`/#${name}`}
					key={index}
				>
					<button>{name}</button>
				</Link>
			))}
		</div>
	);
};
