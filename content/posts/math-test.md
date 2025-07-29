---
title: "Math Test with KaTeX"
date: "2024-01-15"
description: "A comprehensive test of mathematical expressions including inline math, display equations, matrices, and error handling using KaTeX rendering."
---

# Mathematical Expressions Test

This post demonstrates various mathematical expressions rendered with KaTeX.

## Inline Math

Here's some inline math: $E = mc^2$ and $a^2 + b^2 = c^2$.

You can also write more complex inline expressions like $\int_{0}^{\infty} e^{-x} dx = 1$ or $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$.

## Display Math

Here's a display equation:

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$

And another one:

$$\frac{d}{dx}\left( \int_{0}^{x} f(u) \, du\right) = f(x)$$

## More Complex Examples

### Simple Matrix

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$

### Matrix Multiplication

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$$

### Different Matrix Types

Parentheses: $$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$

Brackets: $$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$

Braces: $$\begin{Bmatrix} 1 & 2 \\ 3 & 4 \end{Bmatrix}$$

Vertical bars: $$\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}$$

### Fractions and Limits

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

### Greek Letters and Symbols

Here are some Greek letters: $\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \lambda, \mu, \pi, \sigma, \phi, \psi, \omega$.

### Subscripts and Superscripts

$x_1, x_2, \ldots, x_n$ and $a^{n+1} = a \cdot a^n$

## Testing Edge Cases

This should work: $f(x) = x^2$ but this plain text should not be affected: This costs $5 and that costs $10.

**Bold text** and _italic text_ should still work normally.

`Code snippets` should also work fine.

## Error Handling

This should show an error (intentionally malformed): $\invalid{command}$

And this display math has an error: $$\also\invalid$$

That's it for the math test!
