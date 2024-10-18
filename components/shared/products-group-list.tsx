"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
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
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId);
	const intersectionRef = useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);

	return (
		<div className={cn("", className)} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{items.map((product) => (
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
