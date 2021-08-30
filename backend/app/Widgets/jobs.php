<?php

namespace App\Widgets;

use App\Models\Job;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class Jobs extends BaseDimmer
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
        $count = Job::count();
        $string = 'Jobs';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-hammer',
            'title'  => "{$count} {$string}",
            'text'   => "You Have {$count} {$string} , Click on button below to view all {$string}",
            'button' => [
                'text' => 'View All Jobs',
                'link' => route('voyager.jobs.index'),
            ],
            'image' => 'storage/widgets/job.jpg',
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
