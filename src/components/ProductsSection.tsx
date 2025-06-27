import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Terminal, Workflow, Database, Github } from 'lucide-react';

const PRODUCTS = [
	{
		name: 'CLI',
		icon: <Terminal size={32} className="text-indigo-500" />,
		description: 'Development environments that just work, right out of the box',
		features: [
			'Zero-config setup that actually works',
			'Easy Deployments',
			'Instant previews for every change',
		],
		cta: 'Get Notified',
		bgClass: 'from-indigo-900/20 to-indigo-600/5',
		accentClass: 'border-indigo-900/20',
		status: 'Coming Soon',
    
	},
	{
		name: 'HackDB',
		icon: <Database size={32} className="text-amber-500" />,
		description: 'Database that scales with your ideas, not your headaches',
		features: [
			'Built on top of PostgreSQL',
			'Automatic backups (because we forgot once)',
			'Web Editor and CLI access',
		],
		cta: 'Try Alpha',
		bgClass: 'from-amber-900/20 to-amber-600/5',
		accentClass: 'border-amber-900/20',
		status: 'In Development',
    github: 'https://github.com/meepstertron/HackDB',
	},
];

const ProductsSection = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('revealed');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const revealElements = document.querySelectorAll(
			'.reveal, .reveal-left, .reveal-right'
		);
		revealElements.forEach((el) => observer.observe(el));

		return () => {
			revealElements.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<section id="products" ref={sectionRef} className="py-24 relative">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-16 max-w-xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">
						Our Product Suite
					</h2>
					<p className="text-hexGray-400 reveal">
						We're building each tool to solve real problems we've faced. Some are
						ready to try, others are still cooking.
					</p>
				</div>

				<div className="space-y-24">
					{PRODUCTS.map((product, index) => (
						<div
							key={index}
							className={`flex flex-col ${
								index % 2 ? 'lg:flex-row' : 'lg:flex-row-reverse'
							} items-center gap-8 lg:gap-16 reveal`}
						>
							<div className="w-full lg:w-1/2 space-y-6">
								<div className="flex items-center justify-between">
									<div className="flex items-center">
										<div className="mr-3">{product.icon}</div>
										<div>
											<h3 className="text-3xl font-bold">
												{product.name}
											</h3>
											<span className="text-sm text-hexGreen-500 font-medium">
												{product.status}
											</span>
										</div>
									</div>
									{product.github && <Button
										variant="outline"
										size="icon"
										className="ml-16"
                    onClick={() => window.open(product.github, '_blank')}
									>
										<Github />
									</Button>}
								</div>

								<p className="text-xl text-hexGray-300">
									{product.description}
								</p>

								<ul className="space-y-3">
									{product.features.map((feature, i) => (
										<li key={i} className="flex items-start">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-hexGreen-500 mr-2 mt-1"
											>
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											<span className="text-hexGray-300">
												{feature}
											</span>
										</li>
									))}
								</ul>

								{/* <Button className="bg-hexGreen-500 hover:bg-hexGreen-600 text-black">
									{product.cta}
									<ChevronRight size={16} className="ml-1" />
								</Button> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsSection;
