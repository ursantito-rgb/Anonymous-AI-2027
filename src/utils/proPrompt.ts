// Free edition: never schedule or display subscription promotions.
type ProPromptVariant = 'text' | 'image';
type ProPromptListener = (variant: ProPromptVariant) => void;
export function shouldShowProAha(_count: number): boolean { return false; }
export function subscribeProPrompt(_listener: ProPromptListener): () => void { return () => {}; }
export function emitProPrompt(_variant: ProPromptVariant): void {}
export function checkProPromptForText(_delayMs: number): void {}
export function checkProPromptForImage(_delayMs: number): void {}
