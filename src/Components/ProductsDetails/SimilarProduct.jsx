
import SimilarProducutCard from './SimilarProductCard'



const products = [
    {
        id: 1,
        name: "Banarasi Silk Saree",
        subBrand: "Royal Banarasi",
        price: 5200,
        minPrice: 4800,
        maxPrice: 5500,
        discountPercentage: 8,
        color: "Red",
        imageUrls: [
            "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

        ]
    },
    {
        id: 2,
        name: "Kanjivaram Silk Saree",
        subBrand: "South Indian Weaves",
        price: 7600,
        minPrice: 7200,
        maxPrice: 8000,
        discountPercentage: 10,
        color: "Blue",
        imageUrls: [
            "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
            "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
            "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
        ]
    },
    {
        id: 3,
        name: "Chiffon Printed Saree",
        subBrand: "Casual Comfort",
        price: 3400,
        minPrice: 3000,
        maxPrice: 3800,
        discountPercentage: 12,
        color: "Green",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

            "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

        ]
    },
    {
        id: 4,
        name: "Organza Floral Saree",
        subBrand: "Modern Chic",
        price: 2900,
        minPrice: 2600,
        maxPrice: 3200,
        discountPercentage: 15,
        color: "Lavender",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
            "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

        ]
    },
    {
        id: 1,
        name: "Banarasi Silk Saree",
        subBrand: "Royal Banarasi",
        price: 5200,
        minPrice: 4800,
        maxPrice: 5500,
        discountPercentage: 8,
        color: "Red",
        imageUrls: [
            "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

        ]
    },
    {
        id: 2,
        name: "Kanjivaram Silk Saree",
        subBrand: "South Indian Weaves",
        price: 7600,
        minPrice: 7200,
        maxPrice: 8000,
        discountPercentage: 10,
        color: "Blue",
        imageUrls: [
            "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
            "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
            "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
        ]
    },
    {
        id: 3,
        name: "Chiffon Printed Saree",
        subBrand: "Casual Comfort",
        price: 3400,
        minPrice: 3000,
        maxPrice: 3800,
        discountPercentage: 12,
        color: "Green",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

            "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

        ]
    },
    {
        id: 4,
        name: "Organza Floral Saree",
        subBrand: "Modern Chic",
        price: 2900,
        minPrice: 2600,
        maxPrice: 3200,
        discountPercentage: 15,
        color: "Lavender",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
            "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

        ]
    },
    {
        id: 1,
        name: "Banarasi Silk Saree",
        subBrand: "Royal Banarasi",
        price: 5200,
        minPrice: 4800,
        maxPrice: 5500,
        discountPercentage: 8,
        color: "Red",
        imageUrls: [
            "https://tse2.mm.bing.net/th?id=OIP.df7JqpVO6H46cY4T_E8OvwHaJQ&w=474&h=474&c=7",
            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRwu1OFyzDyJe5abpNa2Ouaa_REzkwDxKlg&s",

            "https://tse1.mm.bing.net/th?id=OIP.C-qYpwrVVA48GRM4ID6xcQHaJ4&w=474&h=474&c=7",
            "https://www.vishalprints.in/cdn/shop/files/PEHNAWA-47260-01_3deafc35-17e5-4bb7-a90f-f4c6c12c0d3f.jpg?v=1719123007",

        ]
    },
    {
        id: 2,
        name: "Kanjivaram Silk Saree",
        subBrand: "South Indian Weaves",
        price: 7600,
        minPrice: 7200,
        maxPrice: 8000,
        discountPercentage: 10,
        color: "Blue",
        imageUrls: [
            "https://ivalinmabia.com/cdn/shop/files/kamakshi-light-blue-shade-and-bright-tone-kanchi-cotton-saree-sarees-178.webp?v=1725382942&width=3840",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
            "https://sareewave.com/cdn/shop/products/SJSundaramsilk103.jpg?v=1670919253&width=900",
            "https://royalanarkali.com/wp-content/uploads/2024/08/Stylish-Royal-Blue-Color-Soft-Lichi-Silk-Jacquard-All-Over-Saree-2.jpeg",
            "https://lajreedesigner.com/cdn/shop/files/KP-3087_1_900x1350_crop_center@2x.jpg?v=1698558643",
        ]
    },
    {
        id: 3,
        name: "Chiffon Printed Saree",
        subBrand: "Casual Comfort",
        price: 3400,
        minPrice: 3000,
        maxPrice: 3800,
        discountPercentage: 12,
        color: "Green",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/products/KP-3042-Green_3_900x1350_crop_center@2x.jpg?v=1676695147",
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/KP-6025_1_900x1350_crop_center@2x.jpg?v=1740388663",

            "https://lajreedesigner.com/cdn/shop/products/ShrijiAvadh-Devratna-Green_4_900x1350_crop_center@2x.jpg?v=1663236988",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",
            "https://lajreedesigner.com/cdn/shop/files/Aayna-4041_4_500x750_crop_center.jpg?v=1696051144",
            "https://lajreedesigner.com/cdn/shop/products/KP-1079_1_900x1350_crop_center@2x.jpg?v=1660639727",

        ]
    },
    {
        id: 4,
        name: "Organza Floral Saree",
        subBrand: "Modern Chic",
        price: 2900,
        minPrice: 2600,
        maxPrice: 3200,
        discountPercentage: 15,
        color: "Lavender",
        imageUrls: [
            "https://lajreedesigner.com/cdn/shop/files/Tasrika-Masakkali-Lavender_2_900x1350_crop_center@2x.jpg?v=1738224656",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",
            "https://assets.ajio.com/medias/sys_master/root/20240104/rqvY/6596b7b7ddf779151902a85e/-473Wx593H-466947788-lavender-MODEL3.jpg",
            "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/3/13ae4d5S586_2.jpg?tr=w-256",
            "https://lajreedesigner.com/cdn/shop/files/Shubh-SF-1002_1_900x1350_crop_center@2x.jpg?v=1733471400",

        ]
    },


];
const SimilarProduct = () => {
    return (
        <div>

            <section className="product_section grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5
                     gap-y-5 px-5 justify-center">
                {products.map((product) => (
                    <SimilarProducutCard key={product.id} product={product} />
                ))}

            </section>
        </div>
    )
}

export default SimilarProduct