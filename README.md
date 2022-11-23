## Overview

This is an extended version of React template from [Stellar Minore](https://stellarminore.com/) `Open-source Template`,
If you are looking for more simplified version with folder structure and without RTK setup, Check them out here at https://bitbucket.org/stellar-minore/react-template

## Details

#### Initial template for projects that are running with:
 - React
 - Tailwind-css
 - Redux Toolkit
 - SASS Modules (`.module.scss`)
 - Eslint / Stylint configured
 

#### Folder Structure:

<img width="317" alt="Screen Shot 2022-11-22 at 7 43 26 PM" src="https://user-images.githubusercontent.com/37541648/203343023-e2e41a48-b755-402f-ad4b-bff2f4bbbdfe.png">

 
#### Out Of The Box:
 - Auth (Login/Register) pages without any styles to get you going with Authentication.
 - Navbar without any styles. You can Customize it according to your needs.
 - Private/Public Components to handle the protected routes functionality for client-side.
 - Custom Axios Instance (Supports JWT handling `Access-tokens/Refresh-tokens`).
 - SASS variables and mixins at one place `/utils/sass`

#### Redux Toolkit:
 - Already covered with `login, register, logout, verifyUser` slices.
 - Connected with Axios Instance to handle all API calls.

> If your app requires auth, you might not have to deal with all the boilerplate for RTK and start working on rest of flow.
 
#### Tokens Authentication Flow:
 - Structure is already built to deal with `http-only` cookies `(Refresh-tokens)`.
 - While `Access-tokens` are stored in localstorage.
 - I know `Localstorage` is not safe to store tokens so template already has a
   support to deal with `Rotating-refresh-tokens`. You can read about the concept here: [Rotating Refresh Tokens](https://auth0.com/docs/secure/tokens/refresh-tokens/refresh-token-rotation).
 - Make sure you have set the expiry for `Access-tokens` less then 30s for better security.
 
#### To use the template `(Make sure to use latest Node Version)`:
 ```
  git clone https://github.com/kazmi066/react-tailwind-rtk-starter
  cd react-tailwind-rtk-starter
  npm i
  npm start
 ```
