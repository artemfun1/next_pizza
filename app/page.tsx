import { Container, Filters, ProductCard, Title, TopBar } from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size="lg" className="font-extrabold" />
			</Container>
			
			<TopBar />

			<Container   2 00  className="mt-10 pb-14">
				<div className="flex gap-[60px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{<ProductCard id={0}   name={'Пиццо'}   price={550} imageUrl={'https://media.dodostatic.net/image/r:233x233/11EE7D612FC7B7FCA5BE822752BEE1E5.avif'}/>}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
