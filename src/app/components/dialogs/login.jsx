import { useAuth } from "@/src/lib/AuthContext";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

export default function Login({ state, setState, toggleLoginRegisterState }) {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handler() {
        setState(prev => !prev)
    }

    const { setUser } = useAuth()

    async function submit(e) {
        e.preventDefault()
        let response = await axios.post("/api/auth/login", form)
        console.log(response.data)
        if (response.data.status == "ok") {
            setUser(response.data.data)
            setState(false)
        } else {
            alert(response.data["message"])
        }
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
                            Daxil ol
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            {/* Enter your email and password to Sign In. */}
                            Zəhmət olmasa email və şifrənizi daxil edin.
                        </Typography>
                        {/* <Typography className="-mb-2" variant="h6">
                            Email
                        </Typography> */}
                        <Input label="Email" size="lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        {/* <Typography className="-mb-2" variant="h6">
                            Şifrə
                        </Typography> */}
                        <Input label="Şifrə" size="lg" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                        <div className="-ml-2.5 -mt-3">
                            <Checkbox label="Yadda saxla" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={submit} fullWidth>
                            Daxil ol
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                            Hesabınız yoxdur ?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue-gray"
                                className="ml-1 font-bold"
                                onClick={toggleLoginRegisterState}
                            >
                                Qeydiyyat
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </div>
    )
}