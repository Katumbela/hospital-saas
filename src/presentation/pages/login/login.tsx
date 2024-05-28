import { Button, InputHackyOff } from "../../components";

export function LoginPage() {
  document.title = ' Login Page | TATVA SOFTWARE'
  return (
    <>
      <div className="h-screen grid  items-center place-content-center w-screen">
        <div className="shadow-xl bg-anc rounded-md p-8">
          <center>
            <h1 className="text-2xl font-bold text-white"> ANC Scheduler</h1>
          </center>
          <br />
          <InputHackyOff className="text-white" placeholder="Usuario" />
          <br />
          <InputHackyOff className="text-white" placeholder="Password" />
          <br />
          <Button text="Login" onClick={() => window.location.href ='/admin'} className="w-full click justify-center" />
          <br />
        </div>
      </div>
    </>
  );
}
