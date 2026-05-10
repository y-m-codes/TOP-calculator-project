The Odin Project, Foundations: calculator (final project).

The "happy path":
1. Display panel is blank.
2. User enters a number (multi-digit is allowed).
3. User enters a single operator.
4. User enters a number (multi-digit is allowed).
5. User clicks "equals".
6. Evaluated number is displayed.
7. User either clears and starts from #1, or continues from 3.

Requirements and limitations:
1. If multiple chained calculations are entered (e.g. 1+2+3+4 ... etc), only the first one will be evaluated on clicking equals. Anything after the second operand will be cleared and discarded.
2. Anything divided by 0 will display an error message upon pressing "equals". The input will be cleared upon pressing "equals".
3. If there are two or more consecutive operators, an error message will be displayed upon pressing "equals". The input will be cleared upon pressing "equals".
4. If an input starts with an operator, an error message will be displayed upon pressing "equals". The input will be cleared upon pressing "equals".
5. If an input starts with a decimal, an error message will be displayed upon pressing "equals". The input will be cleared upon pressing "equals".

Ideas for future exploring:
1) Refactor: for the HTML buttons, I could use a JS loop to create them with tags.
