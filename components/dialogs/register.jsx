import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";

export default function Register({ state, setState , toggleLoginRegisterState}) {


    function handler() {
        setState(prev => !prev)
    }

    async function submit(){
        
    }


    return (
        <div>
            {/* <Button onClick={handleOpen}>Sign In</Button> */}
            <Dialog
                size="xs"
                open={state}
                handler={handler}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Qeydiyyat
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            {/* Enter your email and password to Sign In. */}
                            {/* Zəhmət olmasa email və şifrənizi daxil edin. */}
                            Yeni hesab məlumatlarınız
                        </Typography>
                        <Input label="Ad" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            {/* Email */}
                        </Typography>
                        <Input label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                            {/* Şifrə */}
                        </Typography>
                        <Input type="password" label="Şifrə" size="lg" />
                        <Input type="password" label="Şifrə təkrarı" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Yadda saxla" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handler} fullWidth>
                            Qeydiyyat
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Hesabınız var ?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={toggleLoginRegisterState}
                            >
                                Daxil ol
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}