<?php
namespace App\Http\Controllers;

use App\Models\TimeSlot;
use Illuminate\Http\Request;


class TimeSlotController extends Controller
{
    public function index()
    {
        return TimeSlot::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'start_time' => 'required|date_format:H:i:s',
            'end_time' => 'required|date_format:H:i:s|after:start_time',
        ]);

        $timeSlot = TimeSlot::create($request->all());

        return response()->json($timeSlot, 201);
    }

    public function show($id)
    {
        return TimeSlot::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'start_time' => 'required|date_format:H:i:s',
            'end_time' => 'required|date_format:H:i:s|after:start_time',
        ]);

        $timeSlot = TimeSlot::findOrFail($id);
        $timeSlot->update($request->all());

        return response()->json($timeSlot);
    }

    public function destroy($id)
    {
        TimeSlot::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
    public function getMonthAvailability($providerId, Request $request)
    {
        // Example logic to get month availability
        $year = $request->query('year');
        $month = $request->query('month');
        
        $availability = []; // Fetch availability from database

        return response()->json($availability);
    }
}