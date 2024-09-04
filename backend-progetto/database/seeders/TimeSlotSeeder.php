<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TimeSlot;
use Carbon\Carbon;

class TimeSlotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $timeSlots = [
            ['start_time' => '09:00:00', 'end_time' => '10:00:00'],
            ['start_time' => '10:00:00', 'end_time' => '11:00:00'],
            ['start_time' => '11:00:00', 'end_time' => '12:00:00'],
            ['start_time' => '13:00:00', 'end_time' => '14:00:00'],
            ['start_time' => '14:00:00', 'end_time' => '15:00:00'],
            ['start_time' => '15:00:00', 'end_time' => '16:00:00'],
            ['start_time' => '16:00:00', 'end_time' => '17:00:00'],
            ['start_time' => '17:00:00', 'end_time' => '18:00:00'],
        ];

        foreach ($timeSlots as $slot) {
            TimeSlot::create([
                'start_time' => Carbon::createFromTimeString($slot['start_time']),
                'end_time' => Carbon::createFromTimeString($slot['end_time']),
            ]);
        }
    }
}