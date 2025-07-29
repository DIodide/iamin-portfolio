---
title: "Complete Markdown & LaTeX Test"
date: "2024-01-20"
description: "A comprehensive test of all markdown features including headers, formatting, math, code, links, and Obsidian images."
---

# Header Level 1

This is a comprehensive test of all markdown features supported by our MarkdownRenderer component.

## Header Level 2

### Header Level 3

#### Header Level 4

##### Header Level 5

###### Header Level 6

## Text Formatting

**This is bold text** and this is normal text.

_This is italic text_ and this is normal text.

**Bold** and _italic_ can be combined like **_this_**.

## Inline Code and Code Blocks

Here's some `inline code` in a sentence.

```javascript
// This is a code block
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // Output: 55
```

```python
# Python code block
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
```

## Links

Here are some different types of links:

[External Link to Google](https://www.google.com)

[Link to GitHub](https://github.com)

[Link with a very long URL](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Inline Mathematics

Here's some inline math: $E = mc^2$ and the Pythagorean theorem: $a^2 + b^2 = c^2$.

More complex inline expressions: $\int_{0}^{\infty} e^{-x} dx = 1$ and $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

Greek letters: $\alpha, \beta, \gamma, \delta, \epsilon, \lambda, \mu, \pi, \sigma, \omega$.

## Display Mathematics

Here's the Gaussian integral:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

The Fundamental Theorem of Calculus:

$$\frac{d}{dx}\left( \int_{a}^{x} f(t) \, dt\right) = f(x)$$

Matrix multiplication:

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$$

Different matrix types:

$$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{bmatrix}$$

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

Taylor series expansion:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

Fourier transform:

$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

Complex fractions and limits:

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$

## Mathematical Symbols and Operations

Summations and products: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ and $\prod_{i=1}^{n} i = n!$

Square roots and radicals: $\sqrt{x^2 + y^2}$ and $\sqrt[3]{27} = 3$

Fractions: $\frac{1}{2} + \frac{1}{3} = \frac{5}{6}$

Subscripts and superscripts: $x_1, x_2, \ldots, x_n$ and $a^{n+1} = a \cdot a^n$

## Mixed Content

You can mix **bold text** with math like $f(x) = x^2$ and `code snippets` in the same paragraph.

Here's a mathematical statement in **bold**: **The derivative of $x^2$ is $2x$**.

And here's some code with math context: `calculateArea(radius)` where area $= \pi r^2$.

## Obsidian Image Test

Here's an embedded image using Obsidian syntax:

![[Pasted image 20250729124059.png]]

## Error Handling Tests

This should show a math error (intentionally malformed): $\invalid{command}$

And this display math has an error: $$\also\invalid{syntax}$$

## Edge Cases

Empty lines between paragraphs should create proper spacing.

Text with `inline code` and $inline math$ and **bold text** all in one sentence.

## Complex Mathematical Expressions

Probability and statistics:

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

Calculus of variations:

$$\frac{\delta}{\delta y} \int_{a}^{b} F(x, y, y') dx = \frac{\partial F}{\partial y} - \frac{d}{dx}\frac{\partial F}{\partial y'}$$

Quantum mechanics:

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

## Nested and Complex Formatting

This paragraph contains **bold text with _italic inside_ it** and `code with math $x^2$` and regular text.

**Bold text** followed by $math = \frac{1}{2}$ followed by [a link](https://example.com) all in one line.

## Code with Mathematics Context

```latex
\documentclass{article}
\begin{document}
The quadratic formula is:
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
\end{document}
```

That's the end of our comprehensive markdown and LaTeX test!
