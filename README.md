The Odin Project, Foundations: calculator (final project).

The "happy path":
1. Display panel is blank.
2. User enters a number (multi-digit is allowed).
3. User enters a single operator.
4. User enters a number (multi-digit is allowed).
5. User clicks "equals".
6. Evaluated number is displayed.
7. User either clears and starts from #1, or continues from 3.

Usage constraints:
a. If multiple chained calculations are entered (e.g. 1+2+3+4 ... etc), only the first one will be evaluated on clicking equals. Anything after the second operand will be cleared and discarded.
b. Anything divided by 0 will display an error message upon pressing "equals". The input will be cleared upon pressing "equals".
c. If there are two or more consecutive operators, an error message will be displayed upon pressing "equals". The input will be cleared upon pressing "equals".
d. If an input starts or ends with an operator, an error message will be displayed upon pressing "equals". The input will be cleared upon pressing "equals".

Outstanding requirements from TOP assignment:
a. Your calculator should not evaluate more than a single pair of numbers at a time. Once a whole equation (2 operands & 1 operator) has been inputted, any consequent operator/operand should cause the equation to be evaluated and the result displayed.
b. When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result.

Ideas for future exploring:
a. Refactor: for the HTML buttons, I could use a JS loop to create them with tags.
