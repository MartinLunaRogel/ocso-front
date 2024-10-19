import { Input, Button } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage(){
    return (<div className="bg-orange-500 px-10 py-2 rounded-md">
        <p className="text-2xl my-4 text-white">Iniciar sesion</p>
        <div className="flex flex-col gap-2 py-10 items-center">
            <Input label="Email" type="email" isRequired={true} size="sm"/>
            <Input label="Contraseña" type="password" isRequired={true} size="sm"/>
        </div>
        <div className="flex flex-col items-center gap-2">
            <Button color="primary">Registrrse</Button>
            <p className="text-white">No tienes cuenta <Link href="/signup" className="text-red-600 underline">Registrate</Link></p>
        </div>
    </div>
    );
}