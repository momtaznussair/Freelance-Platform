<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\ApiResponseTrait;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    use ApiResponseTrait;

    public function allNotifications($id){

        $user = User::where('id',$id)->first();

        $notifications = $user->notifications;

        if($notifications){
            return $this->apiResponse($notifications);
        }

        return $this->apiResponse(null,'No Notifications',404);
    }


    public function readNotifications($id){
        $user = User::where('id',$id)->first();

        $notifications = $user->readNotifications;

        if($notifications){
            return $this->apiResponse($notifications);
        }

        return $this->apiResponse(null,'No Notifications',404);
    }

    public function unreadNotifications($id){
        $user = User::where('id',$id)->first();

        $notifications = $user->unreadNotifications;

        if($notifications){
            return $this->apiResponse($notifications);
        }

        return $this->apiResponse(null,'No Notifications',404);
    }


    public function markAsRead($user_id , $notification_id){
        $user = User::where('id',$user_id)->first();
        $notification = $user->notifications->where('id',$notification_id)->first();

        $notification->markAsRead();
        return $this->apiResponse(true,'Notification Marked as read');
    }

    
}
