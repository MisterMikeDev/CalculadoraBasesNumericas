import { calculate } from "./calculator";
import "./style.css";
import { Bases } from "./types";

const $ = (s: string) => document.querySelector(s);

const $form = $("form#form-calc");
const $result = $("span#result");

$form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const { baseInput, baseOutput, numeroInput } = Object.fromEntries(
        formData.entries()
    );
    console.log(baseInput, baseOutput, numeroInput);

    const result = calculate({
        number: parseInt(numeroInput as string),
        baseInput: baseInput as Bases,
        baseOutput: baseOutput as Bases
    });
    $result!.innerHTML = `${result}`;
});
