# Progressive web apps: Foodchecker

Make sure you don't eat food that you can't eat because of your allergies.

Entree | Scan | Product
:-------------------------:|:-------------------------:|:-------------------------:
![Landing page]() |  ![Scan page]() | ![Product page]()

## :bookmark_tabs: Table of contents
* [Demo](https://github.com/lottekoblens/progressive-web-apps-2122#computer-demo)
* [Concept](https://github.com/lottekoblens/progressive-web-apps-2122#bulb-concept)
* [Features](https://github.com/lottekoblens/progressive-web-apps-2122#high_brightness-features)
* [Data](https://github.com/lottekoblens/progressive-web-apps-2122#file_folder-data)
* [Assessment](https://github.com/lottekoblens/progressive-web-apps-2122#clipboard-assessment)
* [Rubric](https://github.com/lottekoblens/progressive-web-apps-2122#clipboard-rubric)
* [Installation](https://github.com/lottekoblens/progressive-web-apps-2122#wrench-installation)
* [Process](https://github.com/lottekoblens/progressive-web-apps-2122#chart_with_upwards_trend-process)
* [Wishlist](https://github.com/lottekoblens/progressive-web-apps-2122#pencil-wishlist)
* [Resources](https://github.com/lottekoblens/progressive-web-apps-2122#open_file_folder-resources)
* [License](https://github.com/lottekoblens/progressive-web-apps-2122#bookmark-license)

## :computer: Demo

[Live demo]()

<img src="" width="300">

## :bulb: Concept

This web app fits the following user story: _'As a foodie, I want to be able to scan a product while shopping so that I can read more information about the product and make a good choice whether it fits my diet.'_
So the app makes it easier for the user to find out if a product contains something they are allergic to. They scan the barcode of the product and the information of the product comes forward. 

## :high_brightness: Features

* Scan a product -> get information about that product
* Search a product with the barcode -> get information about that product
* When barcode is not found -> given feedback that it's not found

## :file_folder: Data 

The data that is used in this project comes from world.openfoodfacts.org. To get information about a product, a fetch is done with the barcode of the product in the url. So the fetch url looks something like this: 

``` `https://world.openfoodfacts.org/api/v0/product/'${barcode}.json` ```

The ${barcode} is a dynamic value. It's get from the barcode scanner or from the value the user fills in in the search input field.

## :clipboard: Assessment

In this course we convert the client side web application, made during the Web App From Scratch course, into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Finally we’ll implement a series of optimisations to improve the performance of the application.

### :clipboard: Rubric

![Rubric](hhttps://github.com/lottekoblens/progressive-web-apps-2122/blob/main/public/images/Rubric.png)

## :wrench: Installation

1. Clone this repository by putting this in your terminal:

`git clone https://github.com/lottekoblens/progressive-web-apps-2122.git`

2. Install the project by putting in the following in the terminal:

`npm install`

3. Run the project by putting this in the terminal:

`npm start`

## :chart_with_upwards_trend: Process

If you want to know more about my process, you can read it [here](https://github.com/lottekoblens/progressive-web-apps-2122/wiki/Exercises).

## :pencil: Wishlist

There are a few things I haven't done (because of a lack of time), but I wanted to do in this project:



## :open_file_folder: Resources

* Bongers, C. (2021, 29 april). Detecting barcodes from the webcam. Daily Dev Tips. Geraadpleegd op 14 februari 2022, van https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
* mdn web docs. (2022c, februari 18). Fetch API - Web APIs | MDN. Geraadpleegd op 15 februari 2022, van https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* Open Food Facts. (z.d.). Open Food Facts - World. Geraadpleegd op 14 februari 2022, van https://world.openfoodfacts.org/
* W3 Schools. (z.d.). HTML DOM Element innerHTML Property. Geraadpleegd op 1 maart 2022, van https://www.w3schools.com/jsref/prop_html_innerhtml.asp
* Routie | Javascript hash router. (z.d.). Routie. Geraadpleegd op 2 maart 2022, van http://projects.jga.me/routie/
* Java T Point. (z.d.). JavaScript reset - javatpoint. Www.Javatpoint.Com. Geraadpleegd op 9 maart 2022, van https://www.javatpoint.com/javascript-reset#:%7E:text=In%20JavaScript%2C%20the%20reset(),does%20not%20return%20any%20value.

## :bookmark: License

This repository has the [MIT](https://github.com/lottekoblens/progressive-web-apps-2122/blob/main/LICENSE) license.

