# The foodchecker

Make sure you don't eat food that you can't eat because of your allergies.

Entree | Scan | Product
:-------------------------:|:-------------------------:|:-------------------------:
![Landing page](https://github.com/lottekoblens/foodchecker/blob/main/images/home.png) |  ![Scan page](https://github.com/lottekoblens/foodchecker/blob/main/images/scan-page.png) | ![Product page](https://github.com/lottekoblens/foodchecker/blob/main/images/product.png)

## :bookmark_tabs: Table of contents
* [Demo](https://github.com/lottekoblens/foodchecker#computer-demo)
* [Concept](https://github.com/lottekoblens/foodchecker#bulb-concept)
* [Features](https://github.com/lottekoblens/foodchecker#high_brightness-features)
* [Data](https://github.com/lottekoblens/foodchecker#file_folder-data)
* [Assessment](https://github.com/lottekoblens/foodchecker#clipboard-assessment)
* [Rubric](https://github.com/lottekoblens/foodchecker#clipboard-rubric)
* [Activity diagram](https://github.com/lottekoblens/foodchecker#activity-diagram)
* [Installation](https://github.com/lottekoblens/foodchecker#wrench-installation)
* [Process](https://github.com/lottekoblens/foodchecker#chart_with_upwards_trend-process)
* [Wishlist](https://github.com/lottekoblens/foodchecker#pencil-wishlist)
* [Resources](https://github.com/lottekoblens/foodchecker#open_file_folder-resources)
* [License](https://github.com/lottekoblens/foodchecker#bookmark-license)

## :computer: Demo

[Live demo](https://lottekoblens.github.io/foodchecker/)

<img src="https://github.com/lottekoblens/foodchecker/blob/main/images/app.gif" width="300">

## :bulb: Concept

This web app fits the following user story: _'As a foodie, I want to be able to scan a product while shopping so that I can read more information about the product and make a good choice whether it fits my diet.'_
So the app makes it easier for the user to find out if a product contains something they are allergic to. They scan the barcode of the product and the information of the product comes forward. 

## :high_brightness: Features

* Scan a product -> get information about that product
* When scan doesn't work -> fill in barcode/ try scanning again -> get information about that product
* When barcode is not found -> given feedback that it's not found

## :file_folder: Data 

The data that is used in this project comes from world.openfoodfacts.org. To get information about a product, a fetch is done with the barcode of the product in the url. So the fetch url looks something like this: 

``` `https://world.openfoodfacts.org/api/v0/product/'${barcode}.json` ```

The ${barcode} is a dynamic value. It's get from the barcode scanner or from the value the user fills in when the scan can't find the barcode.

## Activity diagram

![Activity diagram](https://github.com/lottekoblens/foodchecker/blob/main/images/activitydiagram-final.png)

## :clipboard: Assessment

This is the assignment: 'Design and build a Single Page Web App based on a User Story.' 

The user story that I've chosen is as follows: _'As a foodie, I want to be able to scan a product while shopping so that I can read more information about the product and make a good choice whether it fits my diet._

### :clipboard: Rubric

![Rubric](https://github.com/lottekoblens/foodchecker/blob/main/images/Rubric.png)

## :wrench: Installation

1. Clone this repository by putting this in your terminal:

`git clone https://github.com/lottekoblens/foodchecker.git`

2. Use live server or open the index.html file in the browser to use the application.

## :chart_with_upwards_trend: Process

If you want to know more about my process, you can read it [here](https://github.com/lottekoblens/foodchecker/wiki/Proces).

## :pencil: Wishlist

There are a few things I haven't done (because of a lack of time), but I wanted to do in this project:

* When the user doens't allow you to use the camera -> create a state that gives them feedback about it and give them the option again to change that and give the camera permission. 
* The popup 'No product found' shows up for a short time in the error state when the user types in a valid barcode. I want to fix this in the future.

## :open_file_folder: Resources

* Bongers, C. (2021, 29 april). Detecting barcodes from the webcam. Daily Dev Tips. Geraadpleegd op 14 februari 2022, van https://daily-dev-tips.com/posts/detecting-barcodes-from-the-webcam/
* mdn web docs. (2022c, februari 18). Fetch API - Web APIs | MDN. Geraadpleegd op 15 februari 2022, van https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* Open Food Facts. (z.d.). Open Food Facts - World. Geraadpleegd op 14 februari 2022, van https://world.openfoodfacts.org/
* W3 Schools. (z.d.). HTML DOM Element innerHTML Property. Geraadpleegd op 1 maart 2022, van https://www.w3schools.com/jsref/prop_html_innerhtml.asp
* Routie | Javascript hash router. (z.d.). Routie. Geraadpleegd op 2 maart 2022, van http://projects.jga.me/routie/
* Java T Point. (z.d.). JavaScript reset - javatpoint. Www.Javatpoint.Com. Geraadpleegd op 9 maart 2022, van https://www.javatpoint.com/javascript-reset#:%7E:text=In%20JavaScript%2C%20the%20reset(),does%20not%20return%20any%20value.

## :bookmark: License

This repository has the [MIT](https://github.com/lottekoblens/foodchecker/blob/main/LICENSE) license.
