<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'name' => 'Haircut',
                'description' => 'Professional haircut services.',
                'price' => 20.00,
                'duration' => 30,
            ],
            [
                'name' => 'Hair Coloring',
                'description' => 'Premium hair coloring services.',
                'price' => 50.00,
                'duration' => 60,
            ],
            [
                'name' => 'Beard Trim',
                'description' => 'Professional beard trimming services.',
                'price' => 15.00,
                'duration' => 20,
            ],
            // Add more services as needed
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}