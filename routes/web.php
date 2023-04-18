<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Website\ContactController;



Route::get('/', function () {
    return view('index');
});

Route::get('/ar', function () {
    return view('index-rtl');
});

Route::get('/AboutUs', function () {
    return view('about-us');
});

Route::get('/arAboutUs', function () {
    return view('about-us-rtl');
});

Route::get('/Services', function () {
    return view('services');
});

Route::get('/arServices', function () {
    return view('services-rtl');
});


Route::get('/ContactUs', function () {
    return view('contact-us');
});

Route::get('/arContactUs', function () {
    return view('contact-us-rtl');
});

Route::get('/Products', function () {
    return view('products');
});

Route::get('/arProducts', function () {
    return view('products-rtl');
});


Route::post('/storecontact', 'App\Http\Controllers\ContactController@mail');
Route::post('/storarabiccontact', 'App\Http\Controllers\ContactController@mailarabic');