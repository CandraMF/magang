@component('mail::message')
# Kode Aktivasi Akun Magang - Badan Pengelola Keuangan Haji

Berikut Adalah Kode Aktivasi Akun Kamu

@component('mail::button', ['url' => ''])
    # {{ $code }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
