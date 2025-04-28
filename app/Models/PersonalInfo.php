<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalInfo extends Model
{
    use HasFactory;

    protected $table = 'personal_info';

    protected $fillable = [
        'name',
        'role',
        'short_description',
        'about_description',
        'cv_file',
        'kudos_text',
        'contact_description',
        'contact_email',
    ];

    /**
     * Get the URL for the CV file.
     *
     * @return string|null
     */
    public function getCvUrlAttribute()
    {
        if (!$this->cv_file) {
            return null;
        }

        return asset('storage/' . $this->cv_file);
    }
}