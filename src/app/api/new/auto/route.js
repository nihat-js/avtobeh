import AutoSale from "@/database/sequelize/models/AuotSale";

export async function POST(req, res) {
    const data = await req.json();

    let {
        brand,
        model,
        year,
        price,
        description,
        city,
        phone,
        images
    } = data;


    let x = await AutoSale.create({
        brand,
        model,
        year,
        price,
        description,
        city,
        phone,
        images
    });

    return new Response

    console.log(data);
    return new Response('Hello, Next.js!')
}