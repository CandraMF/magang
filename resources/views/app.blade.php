<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <meta name="csrf-token" value="{{ csrf_token() }}"/>
   <title>Magang</title>
   <link rel="icon" type="image/png" href="{{ asset('logo-bpkh-only-s.png') }}">
   <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:200,300,400,500,600,700|Material+Icons" rel="stylesheet">
   <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px; background: rgb(255, 255, 255) !important">

   <div id="app" class="d-flex flex-column flex-root">
   </div>

   <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
