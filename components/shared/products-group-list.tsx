import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Title } from "./title";

interface Props {
	className?: string;
	title: string;
	items: any[];
	listClassName?: string;
	categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
	className,
	title,
	items,
	listClassName,
	categoryId,
}) => {
	return (
		<div className={cn("", className)}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.item[0].price}
					/>
				))}
			</div>
		</div>
	);
};
