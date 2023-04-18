<div class="container">
     <div class="row justify-content-center">
         <div class="col-md-8">
             <div class="card">
                 <div class="card-header"></div>
                   <div class="card-body">
                    @if (session('resent'))
                         <div class="alert alert-success" role="alert">
                            {{ __('A fresh mail has been sent to your email address.') }}
                        </div>
                    @endif
                    You have a new Contact message.
                    <br/>
                    It is from:  {!! $email !!}
                    <br/>
                    the message's subject:  {!! $subject !!}
                    <br/> 
                    the phone number:  {!! $phone !!}
                    <br/>
                  The message is:
                   <br/>
                  {!! $message !!}
                </div>
            </div>
        </div>
    </div>
</div>