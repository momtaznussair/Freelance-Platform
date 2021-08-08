<?php

namespace App\Widgets;

use App\Models\Payment_style;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Widgets\BaseDimmer;

class PayStyles extends BaseDimmer
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
        $count = Payment_style::count();
        $string = 'Payment Styles';

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-milestone',
            'title'  => "{$count} {$string}",
            'text'   => "You Have {$count} {$string} , Click on button below to view all {$string}",
            'button' => [
                'text' => 'View All Payment_styles',
                'link' => route('voyager.payment-styles.index'),
            ],
            'image' => 'storage/widgets/payment_style.jpg',
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
