export async function POST(req, res) {
    const data = await req.json();

    let {
        brandId,
        modelId,
        year,
        price,
        description,
        cityId,
        phone,
        name,
        email,
        images,
        VIN,
        mileage,
        fuelType,
        cylindersCount,
        transmissionType,
        doorsCount,
        engineSize,
        enginePower,
        driveType,
        fuelConsumption,
        condition,
        color,
        interiorColor,
        interiorMaterial,
        interiorTrim,
        interiorTrimColor,
        interiorTrimMaterial,
        interiorTrimType,
        isLeasable,
        isNegotiable,
        isFeatured,
        isArchived,
        isDeleted,
        isVerified,
        isPublished,
        hasCasco,
        hasABS,
        hasESP,
        hasTractionControl,
        hasAirbags,
        hasAirConditioning,
        hasNavigation,
        hasPowerWindows,
        hasPowerSteering,
        hasSunroof,
        hasHeatedSeats,
    } = data


    

    console.log(data);
    return new Response('Hello, Next.js!')
}