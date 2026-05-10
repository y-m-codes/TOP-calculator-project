The Odin Project, Foundations: calculator (final project).

Requirements (from TOP assignment and my own thinking):
1. the user enters numbers & operands in order (e.g. "1 + 2)
2. the calculation is performed when there is a number, operand, and number,
in the display panel, and the equals sign is clicked.
3. if there is a number, operand, and number, any further number or decimal
button clicked will not register anything. it will not clear the existing
entries. it will prompt the user to evaluate the existing input before
proceeding.
4. the C button will clear the display panel and any "staged" data for
calculating - it resets.
5. the backspace button will clear the last single entry but not clear
the entire memory.
6. the pos/neg button will be applied to the number succeeding it, and must
be inputted in that order, e.g. to get "-1" the order is: [+/-] -> [1].
7. if there is a number, operand, and number, clicking another operand will
evaluate the existing information, return the output, and apply the selected
operand after it.
8. decimals will be rounded to 4 places
9. dividing by zero is not allowed, and will display an error message. it will
not clear or alter any information already inputted.
10. if any operand buttons are pressed more than once in a row, only the first
one will be registered, the subsequent ones will not be registered. they will
not alter any existing input.
11. if an operand is selected without any numbers preceding it, it will
not be registered.
12. if any number buttons are clicked in a row, the digits will be combined to
form one number, e.g. pressing [1] -> [2] -> [3] will result in "123", not
"1 2 3" nor "6".
13. when a result is displayed, pressing another number should automatically
clear the display and memory, and input the selected number for a new
calculation.

Ideas for future exploring:
1) refactor: for the HTML buttons, I could use a JS loop to create them with tags.
