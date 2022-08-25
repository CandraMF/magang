
@component('mail::message')

# Welcome to My Auth & Mailing

@component('mail::button', ['url' => ''])
{{ $code }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
