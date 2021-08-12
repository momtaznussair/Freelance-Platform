<?php

namespace App\Widgets;

use App\Models\Experience_level;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class ExLevel extends BaseDimmer
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
        $count = Experience_level::count();
        $string = 'Experience Levels';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-wand',
            'title'  => "{$count} {$string}",
            'text'   => "You Have {$count} {$string} , Click on button below to view all {$string}",
            'button' => [
                'text' => 'View All Experience_levels',
                'link' => route('voyager.experience_levels.index'),
            ],
            'image' => 'storage/widgets/experience_level.jpg',
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
