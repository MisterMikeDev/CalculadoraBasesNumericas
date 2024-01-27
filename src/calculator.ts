import { Bases } from "./types";
/**
 * @param number - The number to convert
 * @param baseInput - The base of the number to convert
 * @param baseOutput - The base to convert the number to
 * @returns The converted number
 * @example
 * ```ts
 * calculate({ number: 10, baseInput: "decimal", baseOutput: "binary" });
 * // => 1010
 * ```
 */
export const calculate = ({
    number,
    baseInput,
    baseOutput
}: {
    number: number;
    baseInput: Bases;
    baseOutput: Bases;
}) => {
    if (baseInput === "decimal" && baseOutput === "binary") {
        return number.toString(2);
    }
    if (baseInput === "decimal" && baseOutput === "hexadecimal") {
        return number.toString(16);
    }
    if (baseInput === "decimal" && baseOutput === "octal") {
        return number.toString(8);
    }
    if (baseInput === "binary" && baseOutput === "decimal") {
        return parseInt(number.toString(), 2);
    }
    if (baseInput === "binary" && baseOutput === "hexadecimal") {
        return parseInt(number.toString(), 2).toString(16);
    }
    if (baseInput === "binary" && baseOutput === "octal") {
        return parseInt(number.toString(), 2).toString(8);
    }
    if (baseInput === "hexadecimal" && baseOutput === "decimal") {
        return parseInt(number.toString(), 16);
    }
    if (baseInput === "hexadecimal" && baseOutput === "binary") {
        return parseInt(number.toString(), 16).toString(2);
    }
    if (baseInput === "hexadecimal" && baseOutput === "octal") {
        return parseInt(number.toString(), 16).toString(8);
    }
    if (baseInput === "octal" && baseOutput === "decimal") {
        return parseInt(number.toString(), 8);
    }
    if (baseInput === "octal" && baseOutput === "binary") {
        return parseInt(number.toString(), 8).toString(2);
    }
    if (baseInput === "octal" && baseOutput === "hexadecimal") {
        return parseInt(number.toString(), 8).toString(16);
    }
    return number;
};
