
@component('mail::message')

<div class="text-center">
    <h2>Aktivasi Akun Magang</h2>

    <h4>Kode Aktivasi mu Adalah</h4>
</div>

@component('mail::button', ['url' => ''])
{{ $code }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
{{--
<!DOCTYPE html>
<html>
<head>
 <title>Kode Aktivasi Akun Magang - Badang Pengelola Keuangan Haji</title>
</head>
<body>

 <h1>Kode Aktivasi mu Adalah</h1>
 <h1 style="text-align: center"></h1>

</body>
</html> --}}
