<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function mail()
    {
        $request->validate([
            'emailForm' => 'required|email',
            'nameForm' => 'required',
            'phoneForm' => 'required',
            'subjectForm' => 'required',
            'messageForm' => 'required',
          ]);
  
          $data = [
            'username' => $request->nameForm,
            'phone' => $request->phoneForm,
            'subject' => $request->subjectForm,
            'email' => $request->emailForm,
            'message' => $request->messageForm
          ];
  
          Mail::send('email-template', $data, function($message) use ($data) {
            $message->to('reham@databoat.om')
            ->subject('Contact Message');
           
          });
  
         return redirect()->back()->withSuccess('Thanks for your message! We will get back to you soon!');
    }


    public function mailarabic()
    {
        $request->validate([
            'emailForm' => 'required|email',
            'nameForm' => 'required',
            'phoneForm' => 'required',
            'subjectForm' => 'required',
            'messageForm' => 'required',
          ]);
  
          $data = [
            'username' => $request->nameForm,
            'phone' => $request->phoneForm,
            'subject' => $request->subjectForm,
            'email' => $request->emailForm,
            'message' => $request->messageForm
          ];
  
          Mail::send('email-template', $data, function($message) use ($data) {
            $message->to('reham@databoat.om')
            ->subject('Contact Message');
           
          });
  
         return redirect()->back()->withSuccess('شكراً على الرسالة، سنتواصل بكم قريباً');
    }
}
