# Chef IT

## Introduction

A MERVN stack website that allows users to create and review recipes.

## Overview

A simple site that allows its users to create and log into accounts, leave feedback and
create, review and rate recipes made by other users.

## Table of contents

- [Introduction](#introduction)
- [Overview](#overview)
- [Table of contents](#table-of-contents)
- [Documentation](#documentation)
  - [How to run](#how-to-run)
  - [Implementation details](#implementation-details)

## Documentation

### How to run

In two separate terminals, in the folders `client` and `server` and run ```npm run dev```.
Copy the IP given by the terminal that ran Vite and copy it into your browser of choice.

### Implementation details

- The site has been tested on OperaGX(chromium) and Firefox. 

- To allow users to log in and remain signed in (for a day), while also having access to some information about them, when they log in, the server sends a cookie to them that contains their username, telephone and email.

- Some components, like the `Footer`, are not required on desktop pages, while being present on all mobile pages. As such, there is a separate component `MobileFooter`, that handles that problem.

- The `NavBar` on `Profile` page has been replaced with a `NavBarProfile`.

- The file `server.js` from the folder `server` handles all API requests and handles the use of the database. The database schemas are stored in the folder `database_schema`.

#### Copyright: 2024 - Gheorghe Andrei-Bogdan
