const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        category: "casual",
        price: "$45",
        image: "public/images/casual_1.png",
        description: "A premium high-quality white cotton t-shirt designed for comfort and style. Perfect for everyday wear."
    },
    {
        id: 2,
        name: "Minimalist Hoodie",
        category: "casual",
        price: "$85",
        image: "public/images/casual_2.png",
        description: "Navy blue minimalist hoodie made from soft, high-quality fabric. Features a clean design and comfortable fit."
    },
    {
        id: 3,
        name: "Slim Fit Indigo Jeans",
        category: "casual",
        price: "$120",
        image: "public/images/casual_3.png",
        description: "Dark indigo slim fit jeans with detailed denim texture. A versatile staple for any casual wardrobe."
    },
    {
        id: 4,
        name: "Tapered Chinos",
        category: "casual",
        price: "$95",
        image: "public/images/casual_4.png",
        description: "Beige tapered chinos made from premium cotton. Offers a clean, modern look for smart-casual occasions."
    },
    {
        id: 5,
        name: "Charcoal Tailored Suit",
        category: "formal",
        price: "$850",
        image: "public/images/formal_1.png",
        description: "A charcoal grey tailored suit crafted from luxury wool. Designed for a sharp, professional silhouette."
    },
    {
        id: 6,
        name: "Classic Dress Shirt",
        category: "formal",
        price: "$110",
        image: "public/images/formal_2.png",
        description: "Crisp white dress shirt with French cuffs. Perfectly ironed and made from premium cotton for an elegant look."
    },
    {
        id: 7,
        name: "Wool Blazer",
        category: "formal",
        price: "$450",
        image: "public/images/formal_3.png",
        description: "Navy blue wool blazer with gold buttons. A timeless piece that adds sophistication to any outfit."
    },
    {
        id: 8,
        name: "Pleated Trousers",
        category: "formal",
        price: "$180",
        image: "public/images/formal_4.png",
        description: "Black pleated trousers in a wool silk blend. Features a sharp crease and high-end finish."
    },
    {
        id: 9,
        name: "Luxury Silver Watch",
        category: "jewelry",
        price: "$1200",
        image: "public/images/jewelry_1.png",
        description: "Sophisticated silver watch with a dark leather strap. A masterpiece of craftsmanship and style."
    },
    {
        id: 10,
        name: "Matte Black Ring",
        category: "jewelry",
        price: "$150",
        image: "public/images/jewelry_2.png",
        description: "Minimalist matte black ring made from tungsten carbide. Sleek, modern, and durable."
    },
    {
        id: 11,
        name: "Silver Chain Necklace",
        category: "jewelry",
        price: "$220",
        image: "public/images/jewelry_3.png",
        description: "Elegant silver chain necklace. A subtle yet powerful accessory for the modern man."
    },
    {
        id: 12,
        name: "Leather & Steel Bracelet",
        category: "jewelry",
        price: "$95",
        image: "public/images/jewelry_4.png",
        description: "Braided leather and stainless steel bracelet. Combines rugged durability with luxury design."
    },
    {
        id: 13,
        name: "Italian Leather Belt",
        category: "accessories",
        price: "$75",
        image: "public/images/acc_1.png",
        description: "High-quality brown Italian leather belt with a silver buckle. A refined accessory for any belt loop."
    },
    {
        id: 14,
        name: "Black Leather Wallet",
        category: "accessories",
        price: "$120",
        image: "public/images/acc_2.png",
        description: "Sleek black leather bi-fold wallet. Minimalist design with premium craftsmanship."
    },
    {
        id: 15,
        name: "Leather Oxford Shoes",
        category: "accessories",
        price: "$350",
        image: "public/images/acc_3.png",
        description: "Classic brown leather Oxford shoes. Polished finish and timeless design for formal excellence."
    },
    {
        id: 16,
        name: "Wool Fedora Hat",
        category: "accessories",
        price: "$180",
        image: "public/images/acc_4.png",
        description: "Stylish charcoal wool fedora. A high-end accessory that completes a sophisticated look."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
} else {
    window.products = products;
}
