'use client'
import styled from 'styled-components'
import { useState } from 'react'

const CompareContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`

const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const CompareCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`

const CarImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`

const CarSpecs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Spec = styled.p`
  margin: 0;
  color: #666;
  
  strong {
    color: #333;
  }
`

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 68, 68, 0.9);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  font-size: 20px;
  z-index: 10;

  &:hover {
    background: #ff0000;
  }
`

const AddCarContainer = styled.div`
  height: fit-content;
  align-self: flex-start;
`

const AddCarButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: #45a049;
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`

const SpecCategory = styled.div`
  margin-bottom: 1.5rem;
`

const CategoryTitle = styled.h3`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4CAF50;
`

export default function Page() {
    const [cars, setCars] = useState([
        {
            id: 1,
            model: "Tesla Model 3",
            year: 2024,
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800",
            basicInfo: {
                price: "$40,000",
                make: "Tesla",
                condition: "New"
            },
            performance: {
                engine: "Electric Motor",
                horsepower: "283 HP",
                torque: "330 lb-ft",
                acceleration: "5.8s (0-60 mph)",
                topSpeed: "140 mph"
            },
            efficiency: {
                range: "272 miles",
                mpge: "132 city / 138 highway",
                batterySize: "60 kWh"
            },
            exterior: {
                color: "Pearl White",
                wheelSize: "18-inch",
                bodyStyle: "Sedan",
                length: "184.8 inches",
                width: "72.8 inches"
            },
            interior: {
                seating: "5 passengers",
                upholstery: "Vegan Leather",
                cargoSpace: "23 cu ft",
                infotainment: "15-inch touchscreen"
            },
            transmission: {
                type: "Single-speed",
                driveType: "Rear-wheel drive"
            },
            safety: {
                airbags: "8 airbags",
                assistSystems: "Autopilot",
                crashRating: "5-star NHTSA"
            }
        },
        {
            id: 2,
            model: "BMW i4",
            year: 2024,
            image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800",
            basicInfo: {
                price: "$51,400",
                make: "BMW",
                condition: "New"
            },
            performance: {
                engine: "Electric Motor",
                horsepower: "335 HP",
                torque: "317 lb-ft",
                acceleration: "5.5s (0-60 mph)",
                topSpeed: "118 mph"
            },
            efficiency: {
                range: "301 miles",
                mpge: "109 city / 108 highway",
                batterySize: "83.9 kWh"
            },
            exterior: {
                color: "Alpine White",
                wheelSize: "19-inch",
                bodyStyle: "Gran Coupe",
                length: "188.3 inches",
                width: "72.9 inches"
            },
            interior: {
                seating: "5 passengers",
                upholstery: "SensaTec",
                cargoSpace: "16.6 cu ft",
                infotainment: "12.3-inch display"
            },
            transmission: {
                type: "Single-speed",
                driveType: "All-wheel drive"
            },
            safety: {
                airbags: "10 airbags",
                assistSystems: "Driving Assistant Professional",
                crashRating: "Not yet rated"
            }
        }
    ]);

    const removeCar = (id) => {
        setCars(cars.filter(car => car.id !== id));
    };

    const addCar = () => {
        if (cars.length >= 3) return;
        
        const newCar = {
            id: Date.now(),
            model: "Toyota Camry",
            year: 2024,
            image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800",
            basicInfo: {
                price: "$27,000",
                make: "Toyota",
                condition: "New"
            },
            performance: {
                engine: "2.5L 4-cylinder",
                horsepower: "203 HP",
                torque: "184 lb-ft",
                acceleration: "7.5s (0-60 mph)",
                topSpeed: "135 mph"
            },
            efficiency: {
                range: "500 miles",
                mpge: "28 city / 39 highway",
                batterySize: "N/A"
            },
            exterior: {
                color: "Midnight Black",
                wheelSize: "17-inch",
                bodyStyle: "Sedan",
                length: "192.1 inches",
                width: "72.4 inches"
            },
            interior: {
                seating: "5 passengers",
                upholstery: "Fabric",
                cargoSpace: "15.1 cu ft",
                infotainment: "7-inch touchscreen"
            },
            transmission: {
                type: "8-speed automatic",
                driveType: "Front-wheel drive"
            },
            safety: {
                airbags: "10 airbags",
                assistSystems: "Toyota Safety Sense 2.5+",
                crashRating: "5-star NHTSA"
            }
        };
        
        setCars([...cars, newCar]);
    };

    return (
        <CompareContainer>
            <Title>Car Comparison</Title>
            <CompareGrid>
                {cars.map(car => (
                    <CompareCard key={car.id}>
                        <RemoveButton onClick={() => removeCar(car.id)}>×</RemoveButton>
                        <CarImage src={car.image} alt={car.model} />
                        
                        <SpecCategory>
                            <CategoryTitle>Basic Information</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Model:</strong> {car.model}</Spec>
                                <Spec><strong>Year:</strong> {car.year}</Spec>
                                <Spec><strong>Make:</strong> {car.basicInfo.make}</Spec>
                                <Spec><strong>Price:</strong> {car.basicInfo.price}</Spec>
                                <Spec><strong>Condition:</strong> {car.basicInfo.condition}</Spec>
                            </SpecsGrid>
                        </SpecCategory>

                        <SpecCategory>
                            <CategoryTitle>Performance</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Engine:</strong> {car.performance.engine}</Spec>
                                <Spec><strong>Horsepower:</strong> {car.performance.horsepower}</Spec>
                                <Spec><strong>Torque:</strong> {car.performance.torque}</Spec>
                                <Spec><strong>0-60 mph:</strong> {car.performance.acceleration}</Spec>
                                <Spec><strong>Top Speed:</strong> {car.performance.topSpeed}</Spec>
                            </SpecsGrid>
                        </SpecCategory>

                        <SpecCategory>
                            <CategoryTitle>Efficiency</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Range:</strong> {car.efficiency.range}</Spec>
                                <Spec><strong>MPGe:</strong> {car.efficiency.mpge}</Spec>
                                <Spec><strong>Battery:</strong> {car.efficiency.batterySize}</Spec>
                            </SpecsGrid>
                        </SpecCategory>

                        <SpecCategory>
                            <CategoryTitle>Exterior</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Color:</strong> {car.exterior.color}</Spec>
                                <Spec><strong>Wheels:</strong> {car.exterior.wheelSize}</Spec>
                                <Spec><strong>Body:</strong> {car.exterior.bodyStyle}</Spec>
                                <Spec><strong>Length:</strong> {car.exterior.length}</Spec>
                                <Spec><strong>Width:</strong> {car.exterior.width}</Spec>
                            </SpecsGrid>
                        </SpecCategory>

                        <SpecCategory>
                            <CategoryTitle>Interior</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Seating:</strong> {car.interior.seating}</Spec>
                                <Spec><strong>Upholstery:</strong> {car.interior.upholstery}</Spec>
                                <Spec><strong>Cargo:</strong> {car.interior.cargoSpace}</Spec>
                                <Spec><strong>Display:</strong> {car.interior.infotainment}</Spec>
                            </SpecsGrid>
                        </SpecCategory>

                        <SpecCategory>
                            <CategoryTitle>Safety</CategoryTitle>
                            <SpecsGrid>
                                <Spec><strong>Airbags:</strong> {car.safety.airbags}</Spec>
                                <Spec><strong>Systems:</strong> {car.safety.assistSystems}</Spec>
                                <Spec><strong>Rating:</strong> {car.safety.crashRating}</Spec>
                            </SpecsGrid>
                        </SpecCategory>
                    </CompareCard>
                ))}
                {cars.length < 3 && (
                    <AddCarContainer>
                        <AddCarButton onClick={addCar}>
                            + Add Car to Compare
                        </AddCarButton>
                    </AddCarContainer>
                )}
            </CompareGrid>
        </CompareContainer>
    )
}
