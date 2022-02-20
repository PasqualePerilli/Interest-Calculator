# Interest Calculator

## 1. Info

This is a project showing how the calculator for simple interest works. This project started off of a fork of IBM's Simple-Interest-Calculator, available here: https://github.com/ibm-developer-skills-network/vftvk-Simple-Interest-Calculator

## 2. Modifications

The initial project had:

- Incorrect styling;
- Incomplete HTML;
- No function defined for the calculation of the simple interest;

With this project, the goal was for the calculator to:

 - Work properly;
 - Look identical to the example images;

To accomplish this goal, modifications were made to HTML, CSS and JavaScript files.

## 3. Limitations

No font-family was provided in IBM's instructions for neither the header nor the text. I chose something resembling it, but it likely isn't the same exact font. It's difficult to determine which font was used with a myriad of fonts available. In addition, the size of the font wasn't specified either...

No information was given about the border-radius property. I had to guess a percentage that produces an output that is similar, but may not be exactly the same as the original.

No information was given about the dimensions of the white "container". As one can see in §4.1 and §4.2, the header "Simple Interest Calculator" isn't centered: there is more space left to the right than to the left. I mirrored this effect, but not having a definitive requirement that specifies the correct size makes it a little bit of a challenge.

## 4. Screenshots

### 4.1 Sample initial page

![Sample initial page](ibm1.png)


### 4.2 Sample computation page

![Sample computation page](ibm2.png)

### 4.3 Coded initial page

![Coded initial page](pasquale1.png)

### 4.4 Coded computation page

![Coded computation page](pasquale2.png)

## 5. Differences

### 5.1 Validation logic

The form includes three input fields: a numeric one for the amount, a slider for the interest rate and a dropdown for the amount of years.

Although the latter two have to always have a value, the former can technically be empty when the "Compute Interest" button is pressed. 
In those circumstances, given that a value is completely missing, it is meaningless to attempt to calculate the interest. 
As such, a validation logic was introduced: when all fields are filled, then the message will show the resulting interest; when one is missing (amount), an error message will be displayed instead, prompting the user to fill in all input values.

A screenshot of the above-mentioned error message is displayed below:

![Coded error page](pasquale3.png)

### 5.2 Currency and rounding

The example image provided in §4.2 does not show whether the "Everyone Can Get Rich" organization wants to show the decimal places (and how many of them).
I took the liberty of setting that to 2. I also introduced, in currency.js, a valid mechanism for rounding currency amounts, as there are certain instances where the .toFixed(2) of JavaScript was producing wrong results.

### 5.3 Default values

The requirements do not specify what the default values should be when the page loads, so I took what was shown in the example image at §4.1 and set those as default values.

### 5.4 Interest rate

The requirements do not specify what the maximum interest rate is, nor what the "step" is. Looking at the screenshot, the 10.50% value seemed to be slightly left of halfway. As such, I guessed that the slider's max value in the provided image was 25 and set my code accordingly.

I also noticed that between §4.1 and §4.2, the percentage value of the slider goes from having 2 decimal places (10.50%) to just one (3.5%). I replicated this as well in my code with one caveat: the initial value set for the slider and displayed on page has the trailing zero, while, as soon as the slider changes, it stops displaying the trailing zero (including for 10.50%).

### 5.5 Number of years

The requirements do not specify what the maximum number of years should be, nor the minimum. As such, I opted for 1 as a minimum and 20 as a maximum.

### 5.6 Result message

The requirements do not specify what happens to the result message when the values of amount, interest rate or number of years are changed. To avoid confusion, I added to my JavaScript code a mechanism that detects when any of the three changes and hides (sets the display css property to none) the result message. Only after clicking again on the button, the message is displayed. This makes the page more responsive and dynamic.

### 5.7 Error message

The error message also follows the same logic as the result message: if the error message is being displayed and any of the three values changes, the error message is no longer displayed.

## 6. Versioning

| Version  | Created by  | Created on  | Comments  |
|---|---|---|---|
| 1.0  | Pasquale Perilli  | 20-FEB-2022  | Initial readme version  |
