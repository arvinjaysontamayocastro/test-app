import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "firstLetters"
})
export class FirstLettersPipe implements PipeTransform {
  transform(words: string): any {
    return words
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 3);
  }
}