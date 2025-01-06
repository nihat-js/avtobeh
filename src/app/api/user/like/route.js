export async function POST(req, res) {

    const carId = req.nextUrl.searchParams.get('carId');
    const userId = req.nextUrl.searchParams.get('userId');

    console.log(carId);
    console.log(userId);    

    const data = await req.json();
    console.log(data); // Log the received data
    return res.status(200).json({ message: 'Data received successfully' }); // Send a success response
  }