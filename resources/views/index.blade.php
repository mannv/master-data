<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Laravel - VueJS</title>

    <!-- Fonts -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
    <style type="text/css">
        body {
            min-height: 75rem;
            padding-top: 4.5rem;
        }
    </style>
</head>

<body>
<div id="app"></div>

<script type="text/javascript" src="{{asset('js/app.js')}}?v={{time()}}"></script>
</body>
</html>
