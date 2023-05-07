import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --color-primary: #03EBB2;
    --color-primary-focus: #008363;
    --color-primary-negative: #01271F;

    --grey-0: #F8F9FA;
    --grey-1: #B3B3B3;
    --grey-2: #343B41;
    --grey-3: #151515;
    --grey-4: #050505;

    --negative: #E83F5B;
    --success: #3FE864;

}

body {
    background-color: var(--grey-4);
}


body, button, input{
        font-family: 'Inter', sans-serif;
    }

`;
