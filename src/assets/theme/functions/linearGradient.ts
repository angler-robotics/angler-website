/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The linearGradient() function helps you to create a linear gradient color background
 */

function linearGradient(color: string, colorState: string, angle = 195): string {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;