import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

'5/20'


export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>

			<TopBar />

			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title={"Пиццы"}
								items={[
									{
										id: 0,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 2,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 3,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 4,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 5,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 6,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},
								]}
								categoryId={1}
							/>
										<ProductsGroupList
								title={"Комбо"}
								items={[
									{
										id: 0,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 1,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 2,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 3,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 4,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},	{
										id: 5,
										name: "Пиццо",
										imageUrl:
											"https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
										price: 550,
										item: [{price: 550 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
