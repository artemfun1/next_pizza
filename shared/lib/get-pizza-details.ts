import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";

/**
 * Функция для получения данных о пицце
 *
 * @param type - тип теста
 * @param size - размер пиццы
 * @param items - список изделий
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns { totalPrice: number, textDetaills: string } - стоимость и текст описание
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetaills };
};
