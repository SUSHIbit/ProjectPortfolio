<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\WorkController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminPersonalInfoController;
use App\Http\Controllers\AdminSocialLinksController;
use App\Http\Controllers\AdminProjectsController;
use App\Http\Controllers\AdminSkillsController;
use App\Http\Controllers\AdminInternetLinksController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Public Routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/work', [WorkController::class, 'index'])->name('work');
Route::get('/about', [AboutController::class, 'index'])->name('about');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

// Admin Routes (protected)
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    // Dashboard - Make sure this route exists and matches the HOME constant
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // Comment out or remove this route to avoid conflicts
    // Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard.index');
    
    // Personal Info
    Route::get('/personal-info', [AdminPersonalInfoController::class, 'edit'])->name('personal-info.edit');
    Route::put('/personal-info', [AdminPersonalInfoController::class, 'update'])->name('personal-info.update');
    
    // CV Upload
    Route::post('/cv-upload', [AdminPersonalInfoController::class, 'uploadCV'])->name('cv.upload');
    
    // Social Links
    Route::resource('social-links', AdminSocialLinksController::class)->except(['show']);
    
    // Projects
    Route::resource('projects', AdminProjectsController::class)->except(['show']);
    
    // Skills
    Route::resource('skills', AdminSkillsController::class)->except(['show']);
    
    // Internet Links
    Route::resource('internet-links', AdminInternetLinksController::class)->except(['show']);
});

// Auth Routes (only login, no registration)
Route::get('/admin/login', [AuthenticatedSessionController::class, 'create'])
    ->middleware('guest')
    ->name('login');

Route::post('/admin/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest');

Route::post('/admin/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// Disable registration routes by not including them

// Customize the middleware for password reset to prevent direct access
// We still want to allow admins to reset passwords once logged in

// Remove route from "forgot password"
Route::get('/forgot-password', function () {
    return redirect('/admin/login');
})->name('password.request');