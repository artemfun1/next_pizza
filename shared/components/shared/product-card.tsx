import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui";
import { Title } from "./title";

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: FC<Props> = ({
	className,
	id,
	name,
	price,
	imageUrl,
}) => {
	return (
		<div className={cn("", className)}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
				<p className="text-sm text-gray-400">Описание пиццы блаблаблаблаблабла</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
						от <b>{price} ₽</b>
					</span>

					<Button variant="secondary" className="text-base font-bold">
						<Plus size={20} className="mr-1" />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	);
};
