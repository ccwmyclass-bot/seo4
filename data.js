const products = [
    {
        id: 1,
        name: "頂級純棉 T-Shirt",
        category: "casual",
        price: "$1,350",
        image: "public/images/casual_1.png",
        description: "專為舒適與風格設計的頂級高品質白色純棉 T-Shirt。非常適合日常穿搭。"
    },
    {
        id: 2,
        name: "極簡主義連帽衫",
        category: "casual",
        price: "$2,550",
        image: "public/images/casual_2.png",
        description: "深藍色極簡風格連帽衫，採用柔軟高品質面料製成。設計簡潔，穿著舒適。"
    },
    {
        id: 3,
        name: "修身靛藍牛仔褲",
        category: "casual",
        price: "$3,600",
        image: "public/images/casual_3.png",
        description: "深靛藍色修身牛仔褲，具有細膩的丹寧紋理。是任何休閒衣櫥的必備百搭單品。"
    },
    {
        id: 4,
        name: "修身錐形休閒褲",
        category: "casual",
        price: "$2,850",
        image: "public/images/casual_4.png",
        description: "採用頂級棉料製成的米色錐形休閒褲。為半正式休閒場合提供簡潔、現代的外觀。"
    },
    {
        id: 5,
        name: "深灰色精緻西裝",
        category: "formal",
        price: "$25,500",
        image: "public/images/formal_1.png",
        description: "由頂級羊毛打造的深灰色精緻西裝。專為俐落、專業的輪廓而設計。"
    },
    {
        id: 6,
        name: "經典正式襯衫",
        category: "formal",
        price: "$3,300",
        image: "public/images/formal_2.png",
        description: "帶有法式袖口的潔白正式襯衫。經過完美熨燙，採用頂級棉料製成，展現優雅風采。"
    },
    {
        id: 7,
        name: "羊毛西裝外套",
        category: "formal",
        price: "$13,500",
        image: "public/images/formal_3.png",
        description: "帶有金色彩扣的深藍色羊毛西裝外套。經典永恆的單品，能為任何裝扮增添成熟魅力。"
    },
    {
        id: 8,
        name: "打褶西裝褲",
        category: "formal",
        price: "$5,400",
        image: "public/images/formal_4.png",
        description: "採用羊毛絲綢混紡製成的黑色打褶西裝褲。具有銳利的褲線與高級感細節。"
    },
    {
        id: 9,
        name: "豪華銀色腕錶",
        category: "jewelry",
        price: "$36,000",
        image: "public/images/jewelry_1.png",
        description: "配有深色皮革錶帶的精緻銀色腕錶。工藝與風格的傑作。"
    },
    {
        id: 10,
        name: "霧面黑極簡戒指",
        category: "jewelry",
        price: "$4,500",
        image: "public/images/jewelry_2.png",
        description: "由碳化鎢製成的極簡霧面黑戒指。時尚、現代且耐用。"
    },
    {
        id: 11,
        name: "銀色鍊條項鍊",
        category: "jewelry",
        price: "$6,600",
        image: "public/images/jewelry_3.png",
        description: "優雅的銀色鍊條項鍊。為現代男性提供低調而強大的配飾。"
    },
    {
        id: 12,
        name: "皮革與精鋼手環",
        category: "jewelry",
        price: "$2,850",
        image: "public/images/jewelry_4.png",
        description: "編織皮革與不鏽鋼手環。結合了堅固耐用與豪華設計。"
    },
    {
        id: 13,
        name: "義大利皮革腰帶",
        category: "accessories",
        price: "$2,250",
        image: "public/images/acc_1.png",
        description: "帶有銀色扣環的高品質棕色義大利皮革腰帶。精緻的細節提升整體質感。"
    },
    {
        id: 14,
        name: "黑色皮革錢包",
        category: "accessories",
        price: "$3,600",
        image: "public/images/acc_2.png",
        description: "簡練的黑色皮革對折錢包。極簡設計與頂級工藝。"
    },
    {
        id: 15,
        name: "皮革牛津鞋",
        category: "accessories",
        price: "$10,500",
        image: "public/images/acc_3.png",
        description: "經典棕色皮革牛津鞋。拋光外觀與永恆設計，是正式場合的絕佳選擇。"
    },
    {
        id: 16,
        name: "羊毛紳士帽",
        category: "accessories",
        price: "$5,400",
        image: "public/images/acc_4.png",
        description: "時尚的炭灰色羊毛費多拉帽（Fedora）。高級配件，完善您的精緻造型。"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
} else {
    window.products = products;
}
