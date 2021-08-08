<?php

namespace App\Widgets;

use App\Models\Language;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class Languages extends BaseDimmer
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
        $count = Language::count();
        $string = 'Languages';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-font',
            'title'  => "{$count} {$string}",
            'text'   => "You Have {$count} {$string} , Click on button below to view all {$string}",
            'button' => [
                'text' => 'View All Languages',
                'link' => route('voyager.languages.index'),
            ],
            'image' => 'storage/widgets/language.jpg',
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
