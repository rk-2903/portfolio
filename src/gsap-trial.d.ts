declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(targets: unknown, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}