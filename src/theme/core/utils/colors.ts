export type CSSMathCalculator = (input: number) => string;
export const calculatePercent = (input: number) => `${input}%`;
export const calculateDecimal = (input: number) => (input / 100).toPrecision(2);

export const supportsQuery = '(color: hsl(from red h s calc(l - 50%)))';

export const calculateContrastColor = (
  calculator: CSSMathCalculator,
  color: string,
) => (
  `hsl(from ${color} h ${calculator(100)} calc(${calculator(100)} - (l - ${calculator(49)}) * 1000))`
);

export const calculateInversePercentage = (
  calculator: CSSMathCalculator,
  color: string,
  percentage: number,
) => (
  `hsl(from ${color} h s calc(l - (l - ${calculator(50)}) * ${percentage.toPrecision((2))}))`
);

export const calculatePercentage = (
  color: string,
  percentage: number,
) => (
  `hsl(from ${color} h s calc(l * ${percentage.toPrecision((2))}))`
);

export const calculatePaperColor = (
  calculator: CSSMathCalculator,
  color: string,
) => (
  calculateInversePercentage(calculator, color, 0.35)
);
