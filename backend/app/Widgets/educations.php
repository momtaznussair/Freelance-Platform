<?php

namespace App\Widgets;

use App\Models\Education;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class Educations extends BaseDimmer
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = Education::count();
        $string = 'Educations';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-study',
            'title'  => "{$count} {$string}",
            'text'   => "You Have {$count} {$string} , Click on button below to view all {$string}",
            'button' => [
                'text' => 'View All Educations',
                'link' => route('voyager.educations.index'),
            ],
            'image' => 'storage/widgets/education.jpg',
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return Auth::user()->can('browse', Voyager::model('User'));
    }
}
