"use client";
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { useEffect, useState } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
  ingredients?: Ingredient[];
  items: ProductItem[];
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  className,
  loading,
  ingredients,
  items,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const pizzaPrice =
    items.find(item => item.pizzaType === type && item.size === size)?.price ||
    0;

  const totalIngredientsPrice = Array.from(selectedIngredients).reduce(
    (acc, ingredientId) => {
      const ingredient = ingredients?.find(ing => ing.id === ingredientId);
      return acc + (ingredient?.price || 0);
    },
    0
  );

  const totalPrice = pizzaPrice + totalIngredientsPrice;

  const textDetails = `${size} см, ${mapPizzaType[type]} пицтсой`;

  const handleClickAdd = () => {
    onSubmit?.();
    console.log({
      size,
      type,
      ingredients: Array.from(selectedIngredients),
      totalPrice,
    });
  };

  const availablePizza = items.filter(item => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map(item => ({
    name: item.name,
    value: item.value,
    disabled: !availablePizza.some(
      pizza => Number(pizza.size) === Number(item.value)
    ),
  }));

  useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      item => Number(item.value) === size && !item.disabled
    );

    const availableSize = availablePizzaSizes?.find(item => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  console.log(availablePizza);

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} className="" size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={value => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={value => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-y-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients?.map(ingredient => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
